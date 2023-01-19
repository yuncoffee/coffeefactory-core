import React, {
    BaseSyntheticEvent,
    ForwardedRef,
    MouseEvent,
    forwardRef,
    useEffect,
    useId,
    useState,
} from "react"
import s from "./Radio.module.scss"
import { RadioProps } from "@model/components"

const Radio = (
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
    }: RadioProps,
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
            className={className ? `${s.radio} ${className}` : `${s.radio}`}
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
                type={"radio"}
                name={name}
                className={`${s.radio__input}`}
                value={value}
                id={props.id ? props.id : ID}
                disabled={disabled}
                checked={checked}
                ref={ref}
                {...props}
            />
            <label
                className={`${s.radio__label}`}
                htmlFor={props.id ? props.id : ID}
                onClick={(event: BaseSyntheticEvent) => {
                    event.stopPropagation()
                    props.onClick &&
                        props.onClick(event as MouseEvent<HTMLInputElement>)
                }}
            >
                {hasLabel && (
                    <span className={`${s.radio__value}`}>{value}</span>
                )}
            </label>
        </button>
    )
}

export default forwardRef(Radio)
