import React, {
    BaseSyntheticEvent,
    ForwardedRef,
    forwardRef,
    useEffect,
    useState,
} from "react"
import s from "./Button.module.scss"
import Spinner from "../Loader/Spinner"
import { ButtonProps } from "@model/components/Button"
import { sButtonVariant, sSize } from "@model/type"

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
        ...props
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
) => {
    const [spinnerSize, setSpinnerSize] = useState(size)
    const [spinnerColor, setSpinnerColor] = useState(color)

    useEffect(() => {
        setSpinnerSize(getSpinnerSize(size))
    }, [size])

    useEffect(() => {
        setSpinnerColor(getSpinnerColor(variant))
    }, [variant])

    const getSpinnerSize = (size: sSize) => {
        if (size == "xxl") {
            return "sm"
        }
        if (size == "xs" || size == "xxs") {
            return "xxxs"
        }
        return "xxs"
    }

    const getSpinnerColor = (variant: sButtonVariant) => {
        let regExp = /-ghost$/
        if (regExp.test(variant as string)) {
            return color
        }
        regExp = /-line$/
        if (regExp.test(variant as string)) {
            return color
        }

        return "white"
    }

    const handleMouseLeave = () => {
        setSpinnerColor(getSpinnerColor(variant))
        props.onMouseLeave
    }

    const handleMouseOver = () => {
        setSpinnerColor("white")
        props.onMouseOver
    }

    return (
        <button
            data-c-variant={variant}
            data-c-size={size}
            data-c-color={color}
            className={`${s.button} ${className}`}
            ref={ref}
            onClick={onClick}
            name={props.name ? props.name : buttonName}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            {isLoading && <Spinner size={spinnerSize} color={spinnerColor} />}
            {!isLoading && !children && buttonName}
            {!isLoading && children}
        </button>
    )
}

export default forwardRef(Button)
