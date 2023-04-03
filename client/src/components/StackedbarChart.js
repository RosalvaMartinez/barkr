import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    plugins: {
        legend: {
            labels: {
               color: 'white'
            }
        },
        title: {
            display: true,
            text: 'Macro Nutrients',
            color: 'white',
            font: {
                size: 20
            }
        },
    },
    responsive: true,
    scales: {
        x: {
            stacked: true
        },
        y: {
            stacked: true,
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Carbs',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            backgroundColor: 'rgb(255, 99, 132)',
        },
        {
            label: 'Protein',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            backgroundColor: 'rgb(75, 192, 192)',
        },
        {
            label: 'Calories',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            backgroundColor: 'rgb(53, 162, 235)',
        },
    ],
};

export function StackedbarChart() {
    return <Bar options={options} data={data} />;
}
