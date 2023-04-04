import React, { useRef, useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    LineController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    LineController
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const colors = [
    'red',
    'orange',
    'yellow',
    'lime',
    'green',
    'teal',
    'blue',
    'purple',
];

export const data = {
    labels,
    datasets: [
        {
            label: 'Weight',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 200 })),
        },
        {
            label: 'Food Intake (grams)',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 800 })),
        },
    ],
};

function createGradient(ctx, area) {
    const colorStart = "lime"
    const colorMid = "green"
    const colorEnd = "teal"

    const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

    gradient.addColorStop(0, colorStart);
    gradient.addColorStop(0.5, colorMid);
    gradient.addColorStop(1, colorEnd);

    return gradient;
}

export function GradientChart() {
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    useEffect(() => {
        const chart = chartRef.current;

        if (!chart) {
            return;
        }

        const chartData = {
            ...data,
            datasets: data.datasets.map(dataset => ({
                ...dataset,
                borderColor: createGradient(chart.ctx, chart.chartArea),
            })),
        };

        setChartData(chartData);
    }, []);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: 'white'
                }
            },
            title: {
                display: true,
                text: 'Diet',
                color: 'white',
                font: {
                    size: 20
                }
            },
        },
    };

    return <Chart ref={chartRef} type='line' data={chartData} options={options} />;
}
