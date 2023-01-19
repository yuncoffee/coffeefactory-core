import React, { ForwardedRef, forwardRef } from "react"
import s from "./Input.module.scss"

function Input(
    { type = "text", className, ...props }: any,
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
