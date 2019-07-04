import theme from "./theme";

function purifyObject(obj) {
    Object.entries(obj).map(([key, val]) => {
        typeof val === "object"
            ? purifyObject(val)
            : val == null && delete obj[key];
    });
    return obj;
}

export function getChartDatasets(chartType, chartKind) {
    const chartDataset = [
        {
            label: false,
            fill: true,
            borderColor: theme.chartSettings[chartType].chartBorderColor,
            pointBorderColor: theme.chartSettings[chartType].pointBorderColor,
            pointBackgroundColor:
                theme.chartSettings[chartType].pointBackgroundColor,
            pointHoverBackgroundColor:
                theme.chartSettings[chartType].pointHoverBackgroundColor,
            pointHoverBorderColor:
                theme.chartSettings[chartType].pointHoverBorderColor,
            pointHoverBorderWidth:
                theme.chartSettings[chartType].pointHoverBorderWidth,
            pointHoverRadius: theme.chartSettings[chartType].pointHoverRadius,
            pointBorderWidth: theme.chartSettings[chartType].pointBorderWidth,
            pointRadius: theme.chartSettings[chartType].pointRadius,
            borderWidth: theme.chartSettings[chartType].borderWidth,
            backgroundColor: theme.chartPalette[chartType][chartKind]
        }
    ];
    return chartDataset.map(dataset => purifyObject(dataset));
}

export function getChartOptions(chartType, chartKind, displayLegend) {
    const chartOptions = {
        scales: {
            yAxes: undefined,
            xAxes: undefined
            // yAxes: [
            //     {
            //         ticks: {
            //             beginAtZero: true,
            //             fontColor: theme.chartSettings[chartType].legendColor
            //         }
            //     }
            // ],
            // xAxes: [
            //     {
            //         ticks: {
            //             fontColor: theme.chartSettings[chartType].legendColor
            //         }
            //     }
            // ]
        },
        legend: {
            display: displayLegend
        },
        tooltips: {
            callbacks: {
                label: function(tooltipItem) {
                    return tooltipItem.yLabel;
                }
            }
        },
        responsive: true,
        showXLabels: 5
    };

    console.log(purifyObject(chartOptions));

    return purifyObject(chartOptions);
}
