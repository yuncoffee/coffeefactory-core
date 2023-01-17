import React, { ForwardedRef } from "react"
import { ToggleProps } from "@model/components/Button"
import s from "./Toggle.module.scss"

function Toggle({ className }: ToggleProps, ref: ForwardedRef<HTMLDivElement>) {
    return (
        <button
            className={className ? `${s.toggle} ${className}` : `${s.toggle}`}
        >
            <div className={s.toggle__core} />
        </button>
    )
}

export default Toggle
