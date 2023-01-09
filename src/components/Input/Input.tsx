import React, { ForwardedRef, forwardRef } from "react"
import { InputProps } from "@model/components/Input"
import s from "./Input.module.scss"

function Input(
    { type = "text", className, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
) {
    return (
        <input
            className={className ? `${s.input} ${className}` : s.input}
            type={type}
            {...props}
            ref={ref}
        />
    )
}

export default forwardRef(Input)
