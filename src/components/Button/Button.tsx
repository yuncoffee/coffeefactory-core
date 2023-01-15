import React, { ForwardedRef, forwardRef, useEffect, useState } from "react"
import s from "./Button.module.scss"
import { ButtonProps } from "@model/components/Button"
import Spinner from "../Loader/Spinner"

const Button = (
    {
        buttonName = "button",
        onClick = () => {
            console.log("helloworld!")
        },
        size = "xxl",
        name,
        children,
        isLoading = true,
        ...props
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
) => {
    const [spinnerSize, setSpinnerSize] = useState(size)

    useEffect(() => {
        setSpinnerSize(getSpinnerSize(size))
    }, [size])

    const getSpinnerSize = (size: sSize) => {
        if (size == "xxl") {
            return "sm"
        }

        if (size == "xs" || size == "xxs") {
            return "xxxs"
        }

        return "xxs"
    }

    return (
        <button
            data-c-variant="block"
            data-c-size={size}
            data-c-color="pri"
            className={s.button}
            {...props}
            ref={ref}
            onClick={onClick}
            name={name ? name : buttonName}
        >
            {isLoading && <Spinner size={spinnerSize} />}
            {!isLoading && !children && buttonName}
            {!isLoading && children}
        </button>
    )
}

export default forwardRef(Button)
