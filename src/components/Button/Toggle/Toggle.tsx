import React, {
    BaseSyntheticEvent,
    ForwardedRef,
    MouseEvent,
    forwardRef,
    useState,
} from "react"
import { ToggleProps } from "@model/components/Button"
import s from "./Toggle.module.scss"

function Toggle(
    {
        size = "lg",
        onClick,
        color = "pri",
        className,
        isActive = true,
        isMono,
        disabled,
        ...props
    }: ToggleProps,
    ref: ForwardedRef<HTMLButtonElement>
) {
    const [_isActive, _setIsActive] = useState(isActive)

    const handleToggle = (event: BaseSyntheticEvent) => {
        _setIsActive(!_isActive)
        onClick && onClick(event as MouseEvent<HTMLButtonElement>)
    }

    return (
        <button
            data-c-size={size}
            data-c-color={color}
            data-c-active={_isActive}
            data-c-mono={isMono == false ? "false" : disabled}
            disabled={disabled}
            className={className ? `${s.toggle} ${className}` : `${s.toggle}`}
            onClick={handleToggle}
            ref={ref}
            {...props}
        >
            <div className={s.toggle__core} />
        </button>
    )
}

export default forwardRef(Toggle)
