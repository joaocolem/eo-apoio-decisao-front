import { useEffect, useState } from 'react';
import organizerService from '../../../api/services/organizerService'; 
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const OrganizerPage = () => {
    const [organizers, setOrganizers] = useState([]);

    useEffect(() => {
        const fetchOrganizers = async () => {
            try {
                const organizersData = await organizerService.getOrganizersWithAverageRatings();
                setOrganizers(organizersData);
            } catch (error) {
                console.error('Error fetching organizers:', error);
            }
        };

        fetchOrganizers();
    }, []);

 
    const chartData = {
        labels: organizers.map((organizer) => organizer.name), 
        datasets: [
            {
                label: 'Média de Avaliação',
                data: organizers.map((organizer) => organizer.averageRating), 
                backgroundColor: 'rgba(75, 192, 192, 0.6)', 
                borderColor: 'rgba(75, 192, 192, 1)', 
                borderWidth: 1, 
            },
        ],
    };

 
    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Avaliações Médias dos Organizadores',
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => `Média: ${tooltipItem.raw}`,
                },
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Organizadores',
                },
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Média de Avaliação',
                },
            },
        },
    };

    return (
        <div>
            <h3>Organizadores e suas Avaliações Médias</h3>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default OrganizerPage;
