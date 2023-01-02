import React from "react"
import { ButtonProps } from "../../models/components/Button"
import styles from "./Button.module.scss"

export { ButtonProps }

const Button = ({ buttonName, dataType, ...props }: ButtonProps) => {
    return (
        <button className={styles.button} data-type={dataType} {...props}>
            {buttonName}
        </button>
    )
}

export default Button
