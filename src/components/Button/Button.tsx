import React, {
    BaseSyntheticEvent,
    ForwardedRef,
    forwardRef,
    useEffect,
    useState,
} from "react"
import s from "./Button.module.scss"
import { ButtonProps, ButtonVariant } from "@model/components/Button"
import Spinner from "../Loader/Spinner"

const Button = (
    {
        buttonName = "button",
        onClick = () => {
            console.log("helloworld!")
        },
        variant = "block-line",
        color = "red",
        size = "xxl",
        name,
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

    const getSpinnerColor = (variant: ButtonVariant) => {
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
            className={s.button}
            ref={ref}
            onClick={onClick}
            name={name ? name : buttonName}
            {...props}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
        >
            {isLoading && <Spinner size={spinnerSize} color={spinnerColor} />}
            {!isLoading && !children && buttonName}
            {!isLoading && children}
        </button>
    )
}

export default forwardRef(Button)
