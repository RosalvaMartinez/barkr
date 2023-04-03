import React from 'react';
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const options = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            labels: {
                color: 'white'
            }
        },
        title: {
            display: true,
            text: 'Treats/Vitamin',
            color: 'white',
            font: {
                size: 20
            }
        },
    },
};

export const data = {
    datasets: [
        {
            label: 'Vitamins',
            data: Array.from({ length: 100 }, () => ({
                x: faker.datatype.number({ min: 0, max: 100 }),
                y: faker.datatype.number({ min: 0, max: 100 }),
            })),
            backgroundColor: 'rgba(255, 99, 132, 1)',
        },
    ],
};

export function ScatterChart() {
    return <Scatter options={options} data={data} />;
}
