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
    }
};

export default theme;
