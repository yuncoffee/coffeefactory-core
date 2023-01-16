export const BORDER_STYLE_LIST = [
    "solid",
    "dotted",
    "dashed",
    "double",
] as const

export const OVERFLOW_LIST = ["visible", "hidden", "scroll", "auto"] as const

export const DISPLAY_LIST = ["block", "flex", "none", "inline-flex"] as const

export const BORDER_LIST = ["light", "regular", "bold", "extrabold"] as const

export const FLEX_WRAP_LIST = ["wrap", "nowrap", "wrap-reverse"] as const

export const FLEX_BOX_LIST = ["h-box", "v-box"] as const

export const ALIGN_ITEMS_LIST = [
    "center",
    "start",
    "end",
    "flex-start",
    "flex-end",
] as const

export const JUSTIFY_CONTENTS_LIST = [
    ...ALIGN_ITEMS_LIST,
    "left",
    "right",
] as const

export const RADIUS_LIST = [
    "circle",
    "round",
    "xxl",
    "xl",
    "lg",
    "mid",
    "sm",
    "xs",
] as const

export const TRANSITION_LIST = ["fast", "normal", "slow", "slower"] as const

export const SPACE_LIST = Array.from(
    { length: 32 },
    (i: number) => `${i * 2}px`
)
