import {
    baseStyleAttributes,
    sBaseSize,
    sVariantExcpetCircle,
} from "@model/type"
import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react"

export type inputType =
    // | "button"
    // | "checkbox"
    // | "color"
    | "date"
    | "datetime-local"
    | "email"
    // | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    // | "radio"
    // | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week"

export interface InputProps
    extends Omit<
            InputHTMLAttributes<HTMLInputElement>,
            "type" | "color" | "size"
        >,
        Omit<baseStyleAttributes, "size" | "variant"> {
    /**
     * @defaultValue - "test"
     *
     * 타입에러 발생 시 `Input` 컴포넌트 대신 아래와 같은 컴포넌트로 변경해보세요.
     *
     * @example
     *
     * ```
     * "button" - <Button/>
     * "file" - <FilePicker/>
     * "checkbox" - <Checkbox/>
     * "radio" - <Radio/>
     * "range" - <Range/>
     * "color" - <ColorPicker/>
     *
     * ```
     */
    type?: inputType
    /**
     * display label(name)
     */
    hasLabel?: boolean
    size?: sBaseSize
    variant?: sVariantExcpetCircle
}

export interface FieldProps extends InputProps {}
