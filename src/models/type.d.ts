declare namespace React {
    interface HTMLAttributes<T>
        extends DOMAttributes<T>,
            styleUtilsAttributes {}
}

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

type sSize = "xxl" | "xl" | "lg" | "mid" | "sm" | "xs" | "xxs"

interface styleUtilsAttributes {
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
