import { selectAnatomy as parts } from "@chakra-ui/anatomy"
import {
  createMultiStyleConfigHelpers,
  cssVar,
  defineStyle,
} from "@chakra-ui/styled-system"
import { inputTheme } from "./input"

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys)

const $bg = cssVar("select-bg")

const baseStyleField = defineStyle({
  ...inputTheme.baseStyle?.field,
  paddingEnd: "2rem",
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: $bg.reference,
  [$bg.variable]: "colors.white",
  _focus: {
    zIndex: "unset",
  },
  _dark: {
    [$bg.variable]: "colors.gray.700",
  },
  "> option, > optgroup": {
    bg: $bg.reference,
  },
})

const baseStyleIcon = defineStyle({
  position: "absolute",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  pointerEvents: "none",
  top: "50%",
  transform: "translateY(-50%)",
  width: "6",
  height: "100%",
  insetEnd: "2",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5,
  },
})

const baseStyleRoot = defineStyle({
  width: "100%",
  height: "fit-content",
  position: "relative",
})

const baseStyle = definePartsStyle({
  root: baseStyleRoot,
  field: baseStyleField,
  icon: baseStyleIcon,
})

const iconSpacing = defineStyle({
  paddingInlineEnd: "8",
})

const sizes = {
  lg: {
    ...inputTheme.sizes?.lg,
    field: {
      ...inputTheme.sizes?.lg.field,
      ...iconSpacing,
    },
  },
  md: {
    ...inputTheme.sizes?.md,
    field: {
      ...inputTheme.sizes?.md.field,
      ...iconSpacing,
    },
  },
  sm: {
    ...inputTheme.sizes?.sm,
    field: {
      ...inputTheme.sizes?.sm.field,
      ...iconSpacing,
    },
  },
  xs: {
    ...inputTheme.sizes?.xs,
    field: {
      ...inputTheme.sizes?.xs.field,
      ...iconSpacing,
    },
    icon: {
      insetEnd: "1",
    },
  },
}

export const selectTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants: inputTheme.variants,
  defaultProps: inputTheme.defaultProps,
})
