import { useEffect, useState } from 'react';
import organizerService from '../../../api/services/organizerService';  // Importe o serviço que você criou
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registre os componentes do Chart.js
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

    // Preparar os dados para o gráfico
    const chartData = {
        labels: organizers.map((organizer) => organizer.name), // Usar o nome do organizador como label
        datasets: [
            {
                label: 'Média de Avaliação',
                data: organizers.map((organizer) => organizer.averageRating), // Usar a média de avaliação como valor
                backgroundColor: 'rgba(75, 192, 192, 0.6)', // Cor de fundo das barras
                borderColor: 'rgba(75, 192, 192, 1)', // Cor da borda das barras
                borderWidth: 1, // Largura da borda
            },
        ],
    };

    // Opções do gráfico
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
