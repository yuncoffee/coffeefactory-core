import { SIZE_LIST, VARIANT_LIST } from "../data/type"

declare global {
    type sFont =
        | "1000"
        | "900"
        | "800"
        | "700"
        | "600"
        | "500"
        | "400"
        | "300"
        | "200"
        | "100"

    type sSize = typeof SIZE_LIST[number]
    type sVariant = typeof VARIANT_LIST[number]
    type sBorderStyle = "solid" | "dotted" | "dashed" | "double"

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
        "data-s-size"?: sSize
    }

    type sBorder = "light" | "regular" | "bold" | "extrabold" | (string & {})

    interface borderStyleAttributes {
        "data-s-border"?: sBorder
        "data-s-border-left"?: sBorder
        "data-s-border-right"?: sBorder
        "data-s-border-top"?: sBorder
        "data-s-border-btm"?: sBorder
        "data-s-border-x"?: sBorder
        "data-s-border-y"?: sBorder
    }

    type sFlexBox = "h-box" | "v-box"
    type sAlignItems = "center" | "start" | "end" | "flex-start" | "flex-end"
    type sJustifyContents = sAlignItems | "left" | "right"

    interface flexBoxStyleAttributes {
        "data-s-box"?: sFlexBox
        "data-s-align"?: sAlignItems
        "data-s-justify"?: sJustifyContents
    }

    type sOverflow = "visible" | "hidden" | "scroll" | "auto"
    type sDisplay = "block" | "flex" | "none" | "inline-flex"

    interface spaceStyleAttributes {
        "data-s-overflow"?: sOverflow
        "data-s-overflow-x"?: sOverflow
        "data-s-overflow-y"?: sOverflow
        "data-s-display"?: sDisplay
    }
}
