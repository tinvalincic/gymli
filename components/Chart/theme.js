import { palette } from "../Theme";

const theme = {
    chartSettings: {
        line: {
            borderColor: palette.white.normal,
            pointBorderColor: palette.red.normal,
            pointHoverBorderColor: palette.red.normal,
            pointBackgroundColor: palette.black.light,
            pointHoverBackgroundColor: palette.white.normal,
            pointHoverBorderWidth: 1,
            pointHoverRadius: 6,
            pointBorderWidth: 1,
            pointRadius: 7,
            borderWidth: 2,
            legendColor: palette.ink.light
        },
        bar: {
            borderColor: "transparent",
            borderWidth: 0,
            legendColor: palette.ink.light
        },
        doughnut: {
            borderColor: "transparent",
            borderWidth: 0,
            legendColor: palette.ink.light
        }
    },
    chartPalette: {
        bar: {
            light: [
                palette.red.light,
                palette.purple.light,
                palette.gray.light,
                palette.white.normal,
                palette.blue.light
            ],
            normal: [
                palette.red.normal,
                palette.purple.normal,
                palette.gray.dark,
                palette.white.normal,
                palette.blue.normal
            ],
            dark: [
                palette.red.dark,
                palette.purple.dark,
                palette.gray.dark,
                palette.white.normal,
                palette.blue.dark
            ]
        },
        doughnut: {
            light: [
                palette.red.light,
                palette.purple.light,
                palette.gray.light,
                palette.white.normal,
                palette.blue.light
            ],
            normal: [
                palette.red.normal,
                palette.purple.normal,
                palette.gray.normal,
                palette.white.normal,
                palette.blue.normal
            ],
            dark: [
                palette.red.dark,
                palette.purple.dark,
                palette.gray.dark,
                palette.white.normal,
                palette.blue.dark
            ]
        },
        line: {
            light: "rgba(0, 0, 0, 0.2)",
            normal: "rgba(0, 0, 0, 0.2)",
            dark: "rgba(0, 0, 0, 0.2)"
        }
    }
};

export default theme;
