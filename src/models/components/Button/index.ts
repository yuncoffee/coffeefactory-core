import {
    baseStyleAttributes,
    sBaseSize,
    sVariantExcpetCircle,
    sColor,
    sVariantExceptRound,
} from "@model/type"
import { ButtonHTMLAttributes } from "react"

interface ButtonBaseProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        baseStyleAttributes {
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
    /**
     * component color
     */
    color?: sColor
    /**
     * component size
     */
    size?: sBaseSize
}

export interface ButtonProps extends ButtonBaseProps {
    /**
     * display Name
     */
    buttonName: string
    variant?: sVariantExcpetCircle
}

export interface IconButtonProps extends ButtonBaseProps {
    iconName: string
    variant?: sVariantExceptRound
}

export interface ToggleProps extends ButtonBaseProps {
    isActive: boolean
    isMono: boolean
}
