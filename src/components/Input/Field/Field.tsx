import React, {
    BaseSyntheticEvent,
    ChangeEvent,
    FocusEvent,
    ForwardedRef,
    forwardRef,
    useEffect,
    useId,
    useRef,
    useState,
} from "react"
import { FieldProps } from "@model/components/Input"
import s from "./Field.module.scss"
import { Button } from "../../Button"

const Field = (
    {
        className,
        type = "text",
        size = "lg",
        name = "name",
        placeholder = "placeholder",
        variant = "block",
        color = "gray",
        hasLabel = true,
        ...props
    }: FieldProps,
    ref: ForwardedRef<HTMLInputElement>
) => {
    const FIELD_PADDING = 8
    const LABEL_PLACEHOLDER_GAP = 4
    const ID = useId()
    const labelRef = useRef<HTMLLabelElement | null>(null)

    const [phMargin, setPhMargin] = useState(0)
    const [isFocus, setIsFocus] = useState(false)
    const [hasvalue, setHasValue] = useState(false)

    useEffect(() => {
        hasLabel &&
            setPhMargin(
                labelRef.current!.getBoundingClientRect().width +
                    FIELD_PADDING +
                    LABEL_PLACEHOLDER_GAP
            )
    }, [name, hasLabel])

    const checkHasValue = (event: BaseSyntheticEvent) => {
        if (event.target.value.length === 0) {
            setHasValue(false)
        } else {
            setHasValue(true)
        }
    }

    const onFocus = (event: BaseSyntheticEvent) => {
        checkHasValue(event)
        setIsFocus(true)
        props.onFocus && props.onFocus(event as FocusEvent<HTMLInputElement>)
    }

    const onBlur = (event: BaseSyntheticEvent) => {
        checkHasValue(event)
        setIsFocus(false)
        props.onBlur && props.onBlur(event as FocusEvent<HTMLInputElement>)
    }

    const onChange = (event: BaseSyntheticEvent) => {
        props.onChange && props.onChange(event as ChangeEvent<HTMLInputElement>)
    }

    return (
        <div
            data-c-size={size}
            data-c-focus={isFocus}
            data-c-hasvalue={hasvalue}
            data-c-variant={variant}
            data-c-haslabel={hasLabel}
            data-c-color={color}
            className={className ? `${s.field} ${className}` : `${s.field}`}
        >
            {hasLabel && (
                <label
                    className={`${s.field__label}`}
                    ref={labelRef}
                    htmlFor={props.id ? props.id : ID}
                >
                    {name}
                </label>
            )}
            <label
                style={
                    hasLabel
                        ? { left: `${phMargin}px` }
                        : { left: `${FIELD_PADDING}px` }
                }
                className={`${s.field__placeholder}`}
                htmlFor={props.id ? props.id : ID}
            >
                {hasLabel ? `: ${placeholder}` : `${placeholder}`}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                id={props.id ? props.id : ID}
                className={`${s.field__input}`}
                ref={ref}
                {...props}
            />
        </div>
    )
}

export default forwardRef(Field)
