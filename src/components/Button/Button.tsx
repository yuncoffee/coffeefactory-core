import React, { ForwardedRef, forwardRef } from "react"
import { ButtonProps } from "../../models/components/Button"
import styles from "./Button.module.scss"

export { ButtonProps }

const Button = (
    {
        buttonName = "button",
        onClick = () => {
            console.log("helloworld!")
        },
        ...props
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
) => {
    return (
        <button
            className={styles.button}
            {...props}
            ref={ref}
            onClick={onClick}
        >
            {buttonName}
        </button>
    )
}

export default forwardRef(Button)
