import {
    baseStyleAttributes,
    sBaseSize,
    sVariantExcpetCircle,
    sVariantExceptRound,
} from "@model/type"
import { ButtonHTMLAttributes } from "react"

interface ButtonBaseProps
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size" | "color">,
        baseStyleAttributes {
    /**
     * Button needs onClick Event
     *
     * @requires
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
     * component size
     */
    size?: sBaseSize
}

export interface ButtonProps extends ButtonBaseProps {
    /**
     * display Name
     *
     * @requires
     */
    buttonName: string
    variant?: sVariantExcpetCircle
}

export interface IconButtonProps extends ButtonBaseProps {
    /**
     * display icon - using remixicon
     *
     * @requires
     *
     * @link https://remixicon.com/
     */
    iconName: string
    variant?: sVariantExceptRound
}

export interface ToggleProps extends ButtonBaseProps {
    isActive?: boolean
    isMono?: boolean
}
