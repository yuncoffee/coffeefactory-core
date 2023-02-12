import React, {
    BaseSyntheticEvent,
    ChangeEvent,
    FocusEvent,
    ForwardedRef,
    MouseEvent,
    forwardRef,
    useEffect,
    useId,
    useRef,
    useState,
} from "react"
import { SelectProps } from "@model/components/Select"
import s from "./Select.module.scss"
import Option from "../Option/Option"

const Select = (
    {
        optionList = [{ name: "test" }, { name: "hover" }],
        selectedOption,
        className,
        size = "lg",
        name = "name",
        placeholder = "placeholder",
        variant = "block",
        hasLabel = true,
        ...props
    }: SelectProps,
    ref: ForwardedRef<HTMLDivElement>
) => {
    const FIELD_PADDING = 8
    const LABEL_PLACEHOLDER_GAP = 4
    const ID = useId()
    const labelRef = useRef<HTMLLabelElement | null>(null)
    const [_selectedOption, _setSelectedOption] = useState(
        selectedOption ? selectedOption : optionList[0]
    )
    const [phMargin, setPhMargin] = useState(0)
    const [isFocus, setIsFocus] = useState(false)
    const [hasvalue, setHasValue] = useState(_selectedOption ? true : false)
    const [showOption, setShowOption] = useState(false)

    useEffect(() => {
        hasLabel &&
            setPhMargin(
                labelRef.current!.getBoundingClientRect().width +
                    FIELD_PADDING +
                    LABEL_PLACEHOLDER_GAP
            )
    }, [name, hasLabel])

    useEffect(() => {}, [_selectedOption])

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
        setShowOption(true)
        props.onFocus && props.onFocus(event as FocusEvent<HTMLDivElement>)
    }

    const onBlur = (event: BaseSyntheticEvent) => {
        checkHasValue(event)
        setIsFocus(false)
        props.onBlur && props.onBlur(event as FocusEvent<HTMLDivElement>)
    }

    const handleOnClick = (event: BaseSyntheticEvent) => {
        console.log("hello!")
        setShowOption(!showOption)
        props.onClick && props.onClick(event as MouseEvent<HTMLDivElement>)
    }

    const handleOnClickOption = (event: BaseSyntheticEvent) => {
        if (event.target.tagName == "LI") {
            if (_selectedOption.name !== event.target.dataset.name) {
                const selectedOption = optionList.filter(
                    (option) => option.name === event.target.dataset.name
                )[0]
                _setSelectedOption(selectedOption)
            }
            setShowOption(false)
        } else {
            console.log("잘못 클릭함")
        }
    }

    return (
        <div
            data-c-color="gray"
            data-c-size={size}
            data-c-focus={isFocus}
            data-c-variant={variant}
            data-c-hasvalue={hasvalue}
            data-c-haslabel={hasLabel}
            data-c-showoption={showOption}
            className={className ? `${s.select} ${className}` : `${s.select}`}
            ref={ref}
            {...props}
        >
            {hasLabel && (
                <label
                    className={`${s.select__label}`}
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
                className={`${s.select__placeholder}`}
                htmlFor={props.id ? props.id : ID}
            >
                {hasLabel ? `: ${placeholder}` : `${placeholder}`}
            </label>
            <label htmlFor={props.id ? props.id : ID}>
                <i
                    className={`${s.select__deco} ri-arrow-drop-down-fill ri-1x`}
                />
            </label>

            <input
                readOnly
                type={"text"}
                placeholder={placeholder}
                id={props.id ? props.id : ID}
                className={`${s.select__input}`}
                value={_selectedOption.name}
                onClick={handleOnClick}
            />
            {showOption && (
                <Option
                    optionList={optionList}
                    onClick={handleOnClickOption}
                    size={size}
                    variant={variant}
                />
            )}
        </div>
    )
}

export default forwardRef(Select)
