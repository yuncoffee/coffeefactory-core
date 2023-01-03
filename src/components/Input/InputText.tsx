import React, { ForwardedRef, forwardRef } from "react"
import { InputProps } from "../../models/components/Input"
import s from "./Input.module.scss"

function InputText(
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

export default forwardRef(InputText)
