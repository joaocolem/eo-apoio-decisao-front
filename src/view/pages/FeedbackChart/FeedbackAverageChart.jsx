import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import eventService from '../../../api/services/eventService';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const FeedbackAverageChart = () => {
    const [feedbackData, setFeedbackData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await eventService.getFeedbackAverages();
                setFeedbackData(data);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };
        fetchData();
    }, []);

    const chartData = {
        labels: feedbackData.map(item => item.date),
        datasets: [
            {
                label: 'Quantidade de Feedbacks',
                data: feedbackData.map(item => item.feedbackCount),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                tension: 0.1,
                yAxisID: 'y1',
            },
            {
                label: 'Quantidade de Eventos',
                data: feedbackData.map(item => item.eventCount),
                borderColor: 'rgba(153, 102, 255, 1)', // Cor da linha
                backgroundColor: 'rgba(153, 102, 255, 0.2)', // Cor da área abaixo da linha
                fill: true,
                tension: 0.1,
                yAxisID: 'y2', // Associar ao eixo Y2
            },
            {
                label: 'Média de Feedback',
                data: feedbackData.map(item => item.avgFeedbackRating),
                type: 'bar',
                backgroundColor: 'rgba(255, 159, 64, 1)', // Cor das barras
                yAxisID: 'y3', // Associar ao eixo Y3
            }
        ]
    };

    // Opções do gráfico
    const chartOptions = {
        responsive: true,
        scales: {
            y1: {
                type: 'linear',
                position: 'left',
            },
            y2: {
                type: 'linear',
                position: 'right',
            },
            y3: {
                ticks: {
                    beginAtZero: true,
                },
                position: 'right',
                grid: {
                    drawOnChartArea: false,
                },
            },
        },
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            },
        },
    };

    return (
        <div>
            <h2>Feedback Averages</h2>
            <div>
                <Line data={chartData} options={chartOptions} />
            </div>
        </div>
    );
};

export default FeedbackAverageChart;
