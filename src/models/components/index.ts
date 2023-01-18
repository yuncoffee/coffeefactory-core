import { baseStyleAttributes, sBaseSize, sColor } from "@model/type"
import { InputHTMLAttributes } from "react"

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
