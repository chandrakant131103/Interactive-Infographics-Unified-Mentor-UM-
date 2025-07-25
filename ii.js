// Corrected data and labels for the interactive infographic

const data = {
    2010: { solar: 31, wind: 3420, hydro: 343, bioenergy: 227 },
    2015: { solar: 253, wind: 831, hydro: 3890, bioenergy: 504 },
    2020: { solar: 707, wind: 1593, hydro: 4370, bioenergy: 6230 }
};

let chart;

function updateChart() {
    const year = document.getElementById('year').value;
    const ctx = document.getElementById('energyChart').getContext('2d');

    if (chart) {
        chart.destroy();
    }

    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Solar', 'Wind', 'Hydro', 'Bioenergy'],
            datasets: [{
                label: `Energy Consumption in ${year} (TWh)`,
                data: [data[year].solar, data[year].wind, data[year].hydro, data[year].bioenergy],
                backgroundColor: ['#f1c40f', '#3498db', '#2ecc71', '#e74c3c'],
                borderColor: ['#f39c12', '#2980b9', '#27ae60', '#c0392b'],
                borderWidth: 1
            }]
        },
        options: {
            animation: {
                duration: 1000,
                easing: 'easeOutQuad'
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Terawatt-hours (TWh)'
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.raw} TWh`;
                        }
                    }
                }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', updateChart);