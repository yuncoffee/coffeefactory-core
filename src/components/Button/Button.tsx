import React, { ForwardedRef, forwardRef } from "react"
import s from "./Button.module.scss"
import { ButtonProps } from "@model/components/Button"

const Button = (
    {
        buttonName = "button",
        onClick = () => {
            console.log("helloworld!")
        },
        name,
        children,
        ...props
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
) => {
    return (
        <button
            data-c-variant="round"
            data-c-size="xl"
            data-c-color="pri"
            className={s.button}
            {...props}
            ref={ref}
            onClick={onClick}
            name={name ? name : buttonName}
        >
            {!children && buttonName}
            {children}
        </button>
    )
}

export default forwardRef(Button)
