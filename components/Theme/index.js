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
    fontSizeButton: {
        small: base.fontSizeSm,
        normal: base.fontSizeMd,
        large: base.fontSizeLg
    },
    paddingButton: {
        small: `${base.paddingXs} ${base.paddingSm}`,
        normal: `${base.paddingSm} ${base.paddingMd}`,
        large: `${base.paddingMd} ${base.paddingLg}`
    }
};

export default theme;
