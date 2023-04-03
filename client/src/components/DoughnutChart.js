import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Walks', 'Dog Park', 'Sleep', 'Home Play', 'Runs'],
    datasets: [
        {
            label: 'Hours a week',
            data: [12, 19, 42, 5, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 10,
        },
    ],
};

export const options = {
    responsive: true,
    plugins: {
        legend: {
            labels: {
                color: 'white'
            }
        },
        title: {
            display: true,
            text: 'Exercise',
            color: 'white',
            font: {
                size: 20
            }
        },
    },
};

export function DoughnutChart() {
    return <Doughnut data={data} options={options} />;
}