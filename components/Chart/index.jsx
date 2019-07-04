import React from "react";
import PropTypes from "prop-types";
import { Doughnut, Line, Bar } from "react-chartjs-2";
import { getChartDatasets, getChartOptions } from "./helpers";

const Chart = ({
    type = "line",
    data = [],
    labels = [],
    kind = "normal",
    legend = false
}) => {
    const initialData = {
        labels: labels,
        datasets: getChartDatasets(type, kind)
    };
    initialData.datasets.map(dataset => (dataset.data = data));

    const options = getChartOptions(type, kind, legend);

    let generatedChart;
    switch (type) {
        case "line":
            generatedChart = <Line data={initialData} options={options} />;
            break;
        case "doughnut":
            generatedChart = <Doughnut data={initialData} options={options} />;
            break;
        case "bar":
            generatedChart = <Bar data={initialData} options={options} />;
            break;
        default:
            generatedChart = <Line data={[initialData]} options={options} />;
            break;
    }

    return generatedChart;
};

Chart.propTypes = {
    type: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    labels: PropTypes.array.isRequired,
    kind: PropTypes.string,
    legend: PropTypes.bool
};

export default Chart;
