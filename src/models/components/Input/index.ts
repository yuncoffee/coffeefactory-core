import {
    baseStyleAttributes,
    sBaseSize,
    sVariantExcpetCircle,
} from "@model/type"
import { InputHTMLAttributes } from "react"

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
        baseStyleAttributes {
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

export interface CheckerProps
    extends Omit<
            InputHTMLAttributes<HTMLInputElement>,
            "size" | "color" | "type"
        >,
        baseStyleAttributes {
    /**
     * set Checker Group
     *
     * @requires
     */
    name: string

    /**
     * show value on/off
     */
    hasLabel?: boolean
    /**
     * false - color style in disbled
     */
    isMono?: boolean
}

export interface RadioProps extends CheckerProps {}
export interface CheckboxProps extends CheckerProps {}
