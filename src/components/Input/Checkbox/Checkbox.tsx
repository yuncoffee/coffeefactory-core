import React, {
    BaseSyntheticEvent,
    ForwardedRef,
    MouseEvent,
    forwardRef,
    useEffect,
    useId,
    useState,
} from "react"
import s from "./Checkbox.module.scss"
import { CheckboxProps } from "@model/components"

const Checkbox = (
    {
        // props를 작성해주세요.
        className,
        color = "pri",
        size = "lg",
        name,
        value,
        checked,
        hasLabel = false,
        disabled,
        isMono,
        ...props
    }: CheckboxProps,
    ref: ForwardedRef<HTMLInputElement>
) => {
    const ID = useId()

    const [init, setInit] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setInit(false)
        }, 300)
    }, [])

    return (
        <button
            className={
                className ? `${s.checkbox} ${className}` : `${s.checkbox}`
            }
            data-c-init={init}
            data-c-color={color}
            data-c-size={size}
            data-c-mono={isMono}
            data-c-haslabel={hasLabel}
            aria-checked={checked}
            aria-disabled={disabled}
            tabIndex={props.tabIndex}
            onClick={(event) => {
                const target =
                    document.getElementById(`${props.id}`) ||
                    document.getElementById(`${ID}`)
                target?.click()
            }}
        >
            <input
                type={"checkbox"}
                name={name}
                className={`${s.checkbox__input}`}
                value={value}
                id={props.id ? props.id : ID}
                disabled={disabled}
                checked={checked}
                ref={ref}
                {...props}
            />
            <label
                className={`${s.checkbox__label}`}
                htmlFor={props.id ? props.id : ID}
                onClick={(event: BaseSyntheticEvent) => {
                    event.stopPropagation()
                    props.onClick &&
                        props.onClick(event as MouseEvent<HTMLInputElement>)
                }}
            >
                {checked && <div className={`${s.checkbox__deco}`} />}
                {hasLabel && (
                    <span className={`${s.checkbox__value}`}>{value}</span>
                )}
            </label>
        </button>
    )
}

export default forwardRef(Checkbox)
