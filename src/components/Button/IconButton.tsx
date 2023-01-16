import React, { ForwardedRef, forwardRef, useEffect, useState } from "react"
import s from "./Button.module.scss"
import Spinner from "../Loader/Spinner"
import { IconButtonProps } from "@model/components/Button"
import { sBaseSize, sVariantExceptRound, sSize } from "@model/type"
import useButton from "./useButton"

const Button = (
    {
        iconName = "ri-close-line",
        onClick = () => {
            console.log("helloworld!")
        },
        variant = "block",
        color = "pri",
        size = "xxl",
        className,
        isLoading = false,
        ...props
    }: IconButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
) => {
    const [spinnerSize, spinnerColor, handleMouseLeave, handleMouseOver] =
        useButton(size, color, variant, props.onMouseLeave, props.onMouseOver)

    return (
        <button
            data-c-variant={variant}
            data-c-size={size}
            data-c-color={color}
            className={
                className ? `${s.iconButton} ${className}` : `${s.iconButton}`
            }
            ref={ref}
            onClick={onClick}
            name={props.name ? props.name : iconName}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            {isLoading && <Spinner size={spinnerSize} color={spinnerColor} />}
            {!isLoading && iconName && <i className={`${iconName} ri-lg`} />}
        </button>
    )
}

export default forwardRef(Button)
