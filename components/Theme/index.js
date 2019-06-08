import { palette, base } from "./defaults";

const theme = {
    colorButton: {
        primary: palette.white.normal,
        secondary: palette.ink.normal,
        tertiary: palette.white.normal
    },
    backgroundButton: {
        primary: palette.red.normal,
        secondary: palette.gray.normal,
        tertiary: palette.purple.normal
    },
    backgroundButtonHover: {
        primary: palette.red.light,
        secondary: palette.gray.light,
        tertiary: palette.purple.light
    },
    transitionButton: {
        primary: base.durationNormal,
        secondary: base.durationNormal,
        tertiary: base.durationNormal
    },
    uxRange: {
        background: palette.gray.normal,
        thumb: palette.red.normal,
        border: palette.black.normal,
        borderDark: palette.black.dark,
        fill: palette.gray.darker,
    },
    numberColor: {
        default: palette.red.normal
    }
};

export default theme;
