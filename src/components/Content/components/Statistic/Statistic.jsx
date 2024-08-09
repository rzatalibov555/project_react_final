import { useContext, useRef, useMemo } from "react";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import "./Statistic.css";
import { FilterContext } from "../../../../context/FilterContext.jsx";
import { LanguageContext } from "../../../../context/LanguageContext.jsx";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const Statistic = () => {
    const { currentLanguage, getTranslate } = useContext(LanguageContext);
    const { getCurrentFilter, getStatistic } = useContext(FilterContext);

    const chartBarRef = useRef(null);

    const getGradient = (colors) => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx)
            return "#000000";

        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        colors.forEach((color, i) => {
            gradient.addColorStop(i / (colors.length - 1), color);
        });

        return gradient;
    };

    const chartDataGenerate = useMemo(() => {
        return getStatistic?.map((item) => ({
            "label": item?.label?.[currentLanguage],
            "data": item?.date_data?.[getCurrentFilter]?.data,
            "backgroundColor": getGradient(item.bg_gradient),
            "borderRadius": 10,
            "borderSkipped": false,
            "barPercentage": 0.8,
            "categoryPercentage": 0.6
        }));
    }, [getCurrentFilter, getStatistic, currentLanguage]);

    const chartData = useMemo(() => ({
        "labels": [
            getTranslate("month_labels_jan"),
            getTranslate("month_labels_feb"),
            getTranslate("month_labels_mar"),
            getTranslate("month_labels_apr"),
            getTranslate("month_labels_may"),
            getTranslate("month_labels_jun"),
            getTranslate("month_labels_jul"),
            getTranslate("month_labels_aug"),
            getTranslate("month_labels_sep"),
            getTranslate("month_labels_oct"),
            getTranslate("month_labels_nov"),
            getTranslate("month_labels_dec"),
        ],
        "datasets": chartDataGenerate
    }), [getTranslate, chartDataGenerate]);

    const chartOptions = useMemo(() => ({
        "responsive": true,
        "plugins": {
            "legend": {
                "display": true,
                "position": "top",
                "labels": {
                    "color": "#667085",
                    "usePointStyle": true,
                    "generateLabels": (chart) => {
                        const datasets = chart.data.datasets;
                        return datasets.map((dataset, i) => ({
                            "text": dataset.label,
                            "fillStyle": dataset.backgroundColor,
                            "strokeStyle": dataset.backgroundColor,
                            "lineWidth": 0,
                            "hidden": chart.getDatasetMeta(i).hidden,
                            "index": i,
                            "pointStyle": "circle",
                            "pointRadius": 10,
                        }));
                    },
                },
            },
            "datalabels": {
                "display": false,
            },
            "tooltip": {
                "callbacks": {
                    "label": (context) => {
                        let label = context.dataset.label || "";
                        if (label)
                            label += " : ";
                        if (context.parsed.y !== null)
                            label += `$${context.parsed.y}`;
                        return label;
                    },
                },
            },
        },
        "scales": {
            "x": {
                "beginAtZero": true,
                "grid": {
                    "display": false,
                },
            },
            "y": {
                "beginAtZero": true,
                "ticks": {
                    callback: function (value) {
                        return `$${value}`;
                    },
                },
                "grid": {
                    "color": "#F0F1F3",
                },
            },
        },
    }), []);

    return (
        <div className="statistic-block">
            <h2 className="statistic-block__title">{getTranslate("statistic_block_title")}</h2>
            <p className="statistic-block__description">{getTranslate("statistic_block_description")}</p>
            <div className="statistic-block__chart">
                <Bar ref={chartBarRef} data={chartData} options={chartOptions} />
            </div>
        </div>
    );
}

export default Statistic;