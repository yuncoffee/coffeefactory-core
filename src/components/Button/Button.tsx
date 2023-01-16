import React, { ForwardedRef, forwardRef, useEffect, useState } from "react"
import s from "./Button.module.scss"
import Spinner from "../Loader/Spinner"
import { ButtonProps } from "@model/components/Button"
import { sBaseSize, sVariantExcpetCircle, sSize } from "@model/type"
import useButton from "./useButton"

const Button = (
    {
        buttonName = "button",
        onClick = () => {
            console.log("helloworld!")
        },
        variant = "block",
        color = "pri",
        size = "xxl",
        className,
        children,
        isLoading = false,
        iconName = undefined,
        ...props
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
) => {
    const [spinnerSize, spinnerColor, handleMouseLeave, handleMouseOver] =
        useButton(size, color, variant, props.onMouseLeave, props.onMouseOver)

    return (
        <button
            data-c-variant={variant}
            data-c-size={size}
            data-c-color={color}
            className={className ? `${s.button} ${className}` : `${s.button}`}
            ref={ref}
            onClick={onClick}
            name={props.name ? props.name : buttonName}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            {isLoading && <Spinner size={spinnerSize} color={spinnerColor} />}
            {!isLoading && iconName && (
                <i className={`${iconName} ri-1x`} data-s-margin-right="4px" />
            )}
            {!isLoading && !children && buttonName}
            {!isLoading && children}
        </button>
    )
}

export default forwardRef(Button)
