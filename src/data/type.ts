export const SIZE_LIST = [
    "xxl",
    "xl",
    "lg",
    "mid",
    "sm",
    "xs",
    "xxs",
    "xxxs",
] as const

export const GRAY_COLOR_LIST = [
    "black",
    "gray900",
    "gray800",
    "gray700",
    "gray600",
    "gray500",
    "gray400",
    "gray300",
    "gray200",
    "gray100",
    "white",
]

export const PRI_COLOR_LIST = ["pri", "sec"]

export const SUB_COLOR_LIST = [
    "scalet",
    "red",
    "orange",
    "yellow",
    "lightgreen",
    "green",
    "teal",
    "blue",
    "deepblue",
    "navy",
    "lavendar",
    "violet",
    "purple",
    "pink",
]

export const GLOBAL_COLOR_LIST = [...PRI_COLOR_LIST, ...SUB_COLOR_LIST] as const

export const COLOR_TYPE_LIST = [
    "lightness",
    "light",
    "base",
    "dark",
    "darkness",
]
