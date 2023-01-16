import {
    baseStyleAttributes,
    sBaseSize,
    sButtonVariant,
    sColor,
} from "@model/type"
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
    /**
     * state of has Icon - using remixicon
     *
     * @link https://remixicon.com/
     */
    iconName?: string
    variant?: sButtonVariant
    /**
     * component color
     */
    color?: sColor
    /**
     * component size
     */
    size?: sBaseSize
}
