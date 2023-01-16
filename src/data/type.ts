export const FONT_LIST = [
    "1000",
    "900",
    "800",
    "700",
    "600",
    "500",
    "400",
    "300",
    "200",
    "100",
] as const

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

export const BOX_VARIANT_LIST = ["box", "box-line", "box-ghost"] as const

export const BLOCK_VARIANT_LIST = [
    "block",
    "block-line",
    "block-ghost",
] as const

export const ROUND_VARIANT_LIST = [
    "round",
    "round-line",
    "round-ghost",
] as const

export const CIRCLE_VARIANT_LIST = [
    "circle",
    "circle-line",
    "circle-ghost",
] as const

export const ETC_VARIANT_LIST = ["text"] as const

export const VARIANT_LIST = [
    ...BOX_VARIANT_LIST,
    ...BLOCK_VARIANT_LIST,
    ...ROUND_VARIANT_LIST,
    ...CIRCLE_VARIANT_LIST,
    ...ETC_VARIANT_LIST,
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
] as const

export const PRI_COLOR_LIST = ["pri", "sec"] as const

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
] as const

export const GLOBAL_COLOR_LIST = [
    ...PRI_COLOR_LIST,
    ...SUB_COLOR_LIST,
    "gray",
    "white",
] as const

export const COLOR_TYPE_LIST = [
    "lightness",
    "light",
    "base",
    "dark",
    "darkness",
]

export const SPACE_LIST = Array.from(
    { length: 32 },
    (i: number) => `${i * 2}px`
)
