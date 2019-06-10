import { palette, base } from "./defaults";

const theme = {
    colorButton: {
        primary: palette.white.normal,
        secondary: palette.ink.normal,
        tertiary: palette.white.normal
    },
    colorButtonActive: {
        primary: palette.red.normal,
        secondary: palette.gray.normal,
        tertiary: palette.purple.normal
    },
    backgroundButton: {
        primary: palette.red.normal,
        secondary: palette.gray.normal,
        tertiary: palette.purple.normal
    },
    backgroundButtonActive: {
        primary: palette.white.normal,
        secondary: palette.white.normal,
        tertiary: palette.white.normal
    },
    backgroundButtonHover: {
        primary: palette.red.light,
        secondary: palette.gray.light,
        tertiary: palette.purple.light
    },
    backgroundButtonHoverActive: {
        primary: palette.white.normal,
        secondary: palette.white.normal,
        tertiary: palette.white.normal
    },
    borderColorButtonActive: {
        primary: palette.red.normal,
        secondary: palette.gray.normal,
        tertiary: palette.purple.normal
    },
    transitionButton: {
        primary: base.durationNormal,
        secondary: base.durationNormal,
        tertiary: base.durationNormal
    },
    fontSizeButton: {
        small: base.fontSizeSm,
        normal: base.fontSizeMd,
        large: base.fontSizeLg
    },
    paddingButton: {
        small: `${base.paddingSm} ${base.paddingMd}`,
        normal: `${base.paddingMd} ${base.paddingLg}`,
        large: `${base.paddingLg} ${base.paddingXLg}`
    },
    marginButton: {
        block: {
            small: `${base.paddingSm} 0px`,
            normal: `${base.marginMd} 0px`,
            large: `${base.paddingLg} 0px`
        },
        normal: {
            small: `${base.marginXs}`,
            normal: `${base.marginSm}`,
            large: `${base.paddingMd}`
        }
    },
    uxRange: {
        background: palette.gray.normal,
        thumb: palette.red.normal,
        border: palette.black.normal,
        borderDark: palette.black.dark,
        fill: palette.gray.darker
    },
    numberColor: {
        default: palette.red.normal
    },
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
            borderWidth: 2
        },
        bar: {
            borderColor: "transparent",
            borderWidth: 0
        },
        doughnut: {
            borderColor: "transparent",
            borderWidth: 0
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
