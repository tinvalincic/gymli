import theme from "../Theme";

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
    return chartDataset.map(dataset => {
        Object.keys(dataset).map(
            key => dataset[key] == null && delete dataset[key]
        );
        return dataset;
    });
}
