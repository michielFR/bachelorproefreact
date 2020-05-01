import React from 'react';
import { Pie } from 'react-chartjs-2';

class PieChart extends React.Component {
    constructor() {
        super();
        this.state = {
            data: {
                labels: [
                    'Red',
                    'Blue',
                    'Yellow'
                ],
                datasets: [{
                    data: [4, 5, 6],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ]
                }]
            },
            options: {
                maintainAspectRatio: true,
                responsive: false,
                title: {
                    display: true,
                    text: 'Sample chart from react-chartjs-2'
                }
            }
        }
    }

    render() {
        return (
            <div className="px-3">
                <h2>Pie Example</h2>
                <div align="center">
                    <Pie data={this.state.data} options={this.state.options} width={900} height={450} />
                </div>
            </div>
        );
    }
}

export default PieChart;