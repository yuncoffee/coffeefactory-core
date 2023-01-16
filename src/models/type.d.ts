import {
    BASE_SIZE_LIST,
    BLOCK_VARIANT_LIST,
    BOX_VARIANT_LIST,
    CIRCLE_VARIANT_LIST,
    ETC_VARIANT_LIST,
    FONT_LIST,
    GLOBAL_COLOR_LIST,
    GRAY_COLOR_LIST,
    PRI_COLOR_LIST,
    ROUND_VARIANT_LIST,
    SIZE_LIST,
    SUB_COLOR_LIST,
    VARIANT_LIST,
} from "../data/type"
import {
    ALIGN_ITEMS_LIST,
    BORDER_LIST,
    BORDER_STYLE_LIST,
    DISPLAY_LIST,
    FLEX_BOX_LIST,
    FLEX_WRAP_LIST,
    JUSTIFY_CONTENTS_LIST,
    OVERFLOW_LIST,
    RADIUS_LIST,
    SPACE_LIST,
    TRANSITION_LIST,
} from "../data/utilsType"

export type sFont = typeof FONT_LIST[number]
export type sBaseSize = typeof BASE_SIZE_LIST[number]
export type sSize = typeof SIZE_LIST[number]
export type sBoxVariant = typeof BOX_VARIANT_LIST[number]
export type sBlockVariant = typeof BLOCK_VARIANT_LIST[number]
export type sRoundVariant = typeof ROUND_VARIANT_LIST[number]
export type sCircleVariant = typeof CIRCLE_VARIANT_LIST[number]
export type sEtcVariant = typeof ETC_VARIANT_LIST[number]

export type sVariantExcpetCircle =
    | sBoxVariant
    | sBlockVariant
    | sRoundVariant
    | sEtcVariant

export type sVariantExceptRound =
    | sBoxVariant
    | sBlockVariant
    | sCircleVariant
    | sEtcVariant

export type sVariant =
    | sBoxVariant
    | sBlockVariant
    | sRoundVariant
    | sCircleVariant
    | sEtcVariant

export type sColorName =
    | typeof PRI_COLOR_LIST[number]
    | typeof SUB_COLOR_LIST[number]
    | typeof GRAY_COLOR_LIST[number]
export type sColor = typeof GLOBAL_COLOR_LIST[number]
export interface baseStyleAttributes {
    /**
     * className - using add style
     * @CoffeeFactory Component - Core
     *
     * @example
     *
     * ```
     * <Example className={`${s.example} ${className}`} />
     * ```
     */
    className?: string
    /**
     * component variant
     *
     * @CoffeeFactory Component - Core
     *
     * @example
     *
     * ```
     * sBoxVariant | sBlockVariant | sRoundVariant | sCircleVariant | sEtcVariant
     * ```
     */
    variant?: sVariant | sButtonVariant
    /**
     * component size
     *
     * @CoffeeFactory Component - Core
     *
     * @example
     *
     * ```
     * "xxl" | "xl" | "lg" | "mid" | "sm" | "xs" | "xxs" | "xxxs"
     * ```
     */
    size?: sSize
    /**
     * component color
     *
     * @CoffeeFactory Component - Core
     *
     * @example
     *
     * ```
     * "red" | "pri" | "sec" | "scalet" | "orange" | "yellow" | "lightgreen" | "green" | "teal" | "blue" | "deepblue" | "navy" | "lavendar" | "violet" | "purple" | "pink" | "gray"
     * ```
     */
    color?: sColor
}
export type sBorderStyle = typeof BORDER_STYLE_LIST[number]
export type sOverflow = typeof OVERFLOW_LIST[number]
export type sDisplay = typeof DISPLAY_LIST[number]
export type sBorder = typeof BORDER_LIST[number] | (string & {})
export type sFlexBox = typeof FLEX_BOX_LIST[number]
export type sAlignItems = typeof ALIGN_ITEMS_LIST[number]
export type sJustifyContents = typeof JUSTIFY_CONTENTS_LIST[number]
export type sRadius = typeof RADIUS_LIST[number]
export type sTransition = typeof TRANSITION_LIST[number]
export type sSpaceGap = typeof SPACE_LIST[number]
export type sFlexWrap = typeof FLEX_WRAP_LIST[number]

interface borderStyleAttributes {
    "data-s-border"?: sBorder
    "data-s-border-left"?: sBorder
    "data-s-border-right"?: sBorder
    "data-s-border-top"?: sBorder
    "data-s-border-btm"?: sBorder
    "data-s-border-x"?: sBorder
    "data-s-border-y"?: sBorder
}

interface flexBoxStyleAttributes {
    "data-s-box"?: sFlexBox
    "data-s-align"?: sAlignItems
    "data-s-justify"?: sJustifyContents
    "data-s-flexwrap"?: sFlexWrap
    "data-s-gap"?: sSpaceGap
    "data-s-gap-x"?: sSpaceGap
    "data-s-gap-y"?: sSpaceGap
}

interface spaceStyleAttributes {
    "data-s-overflow"?: sOverflow
    "data-s-overflow-x"?: sOverflow
    "data-s-overflow-y"?: sOverflow
    "data-s-display"?: sDisplay
}

declare global {
    declare namespace React {
        interface HTMLAttributes<T>
            extends DOMAttributes<T>,
                styleUtilsAttributes {}
    }

    interface styleUtilsAttributes
        extends borderStyleAttributes,
            flexBoxStyleAttributes {
        /**
         * 해당 `Attribute`를 통해 폰트 스케일을 조정할 수 있습니다.
         * @CoffeeFactory Foundation - Font
         *
         * @example - 사이즈를 참고하세요.
         *
         * ```
         * "1000" - Max
         * "900" - <h1>
         * "800" -
         * "700" - <h2>
         * "600" - <h3>
         * "500" - <h4>
         * "400" - <h5>
         * "300" - <h6>
         * "200" - 1rem
         * "100" - Min
         * ```
         */
        "data-s-font"?: sFont
        /**
         * 해당 `Attribute`를 통해 `height` 스케일을 조정할 수 있습니다.
         * @CoffeeFactory Foundation - Size
         *
         * @example - 사이즈를 참고하세요.
         *
         * ```
         * "xxl" - 54px
         * "xl" - 48px
         * "lg" - 40px
         * "mid" - 36px
         * "sm" - 32px
         * "xs" - 28px
         * "xxs" - 24px
         * "xxxs" - 20px
         * ```
         */
        "data-s-size"?: sSize
        /**
         * 해당 `Attribute`를 통해 `border-radius` 스케일을 조정할 수 있습니다.
         * @CoffeeFactory Foundation - Radius
         *
         * @example - 사이즈를 참고하세요.
         *
         * ```
         * "circle": 50%,
         * "round": 100px,
         * "xxl": 16px,
         * "xl": 12px,
         * "lg": 8px,
         * "mid": 6px,
         * "sm": 4px,
         * "xs": 2px,
         * ```
         */
        "data-s-radius"?: sRadius
        /**
         * 해당 `Attribute`를 통해 `Transtion` 스케일을 조정할 수 있습니다.
         * @CoffeeFactory Foundation - Transition
         *
         * @example - 사이즈를 참고하세요.
         *
         * ```
         * "fast": 0.2s,
         * "normal": 0.3s,
         * "slow": 0.6s,
         * "slower": 1s,
         * ```
         */
        "data-s-transition"?: sTransition
        "data-s-color"?: sColorName
        "data-s-bordercolor"?: sColorName
        "data-s-bgcolor"?: sColorName
    }
}
