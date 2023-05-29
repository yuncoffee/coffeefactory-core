import React, { ForwardedRef, forwardRef } from "react"
import { ButtonProps } from "@model/components/Button"
import useButton from "../useButton"
import Spinner from "../../Loader/Spinner"
import s from "../Button.module.scss"

const Button = (
    {
        buttonName = "button",
        onClick = () => {
            console.log("hello world!")
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

/**
 * - 범용적인 버튼 컴포넌트 입니다.

 * @example
 * ```
 *
 *  <Button onClick={handleAction()}/>
 * ```
 */
export default forwardRef(Button)
