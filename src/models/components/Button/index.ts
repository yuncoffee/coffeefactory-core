import { baseStyleAttributes, sButtonVariant, sColor } from "@model/type"
import { ButtonHTMLAttributes } from "react"

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        baseStyleAttributes {
    /**
     * display Name
     */
    buttonName: string
    /**
     *
     * Button needs onClick Event
     */
    onClick: React.MouseEventHandler<HTMLButtonElement>
    /**
     * state of Loading
     */
    isLoading?: boolean
    variant?: sButtonVariant
    /**
     * component color
     */
    color?: sColor
}
