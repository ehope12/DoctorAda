import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Ensure to import Chart from Chart.js

const HomePage = () => {
    const chartOneRef = useRef(null);
    let chartOne = null;

    useEffect(() => {
        // Create Chart One
        chartOne = new Chart(chartOneRef.current, {
            type: 'bar',
            data: {
                labels: ['Bioethics', 'Mental health', 'Vision health', 'Food insecurity', 'Alzheimers', 'Deafness and other communication disorders'],
                datasets: [{
                    label: '# of Articles',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        return () => {
            // Destroy the charts on component unmount
            if (chartOne) chartOne.destroy();
        };
    }, []);

    return (
        <div>
            <canvas ref={chartOneRef} id="chartOne" width="400" height="200"></canvas>
        </div>
    );
};

export default HomePage;
