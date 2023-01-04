declare module "*.scss"

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

declare namespace React {
    interface HTMLAttributes<T> extends DOMAttributes<T> {
        /**
         * 해당 `Attribute`를 통해 폰트 스케일을 조정할 수 있습니다.
         * @CoffeeFactory Foundation
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
         * "200" - default
         * "100" - Min
         * ```
         */
        "data-s-font"?: sFont
    }
}
