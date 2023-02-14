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
        variant = "box",
        hasLabel = true,
        showOption,
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
    const [_showOption, _setShowOption] = useState(
        showOption ? showOption : false
    )

    useEffect(() => {
        hasLabel &&
            setPhMargin(
                labelRef.current!.getBoundingClientRect().width +
                    FIELD_PADDING +
                    LABEL_PLACEHOLDER_GAP
            )
    }, [name, hasLabel])

    const handleOnClick = (event: BaseSyntheticEvent) => {
        // 중복 콜 방지
        if (
            event.target.tagName === "I" ||
            event.target.tagName === "LABEL" ||
            event.target.tagName === "UL"
        ) {
            return
        }
        props.onClick && props.onClick(event as MouseEvent<HTMLDivElement>)
        if (showOption === undefined) {
            _setShowOption(!_showOption)
        }
    }

    const handleOnClickOption = (event: BaseSyntheticEvent) => {
        if (event.target.tagName == "LI") {
            if (_selectedOption.name !== event.target.dataset.name) {
                const selectedOption = optionList.filter(
                    (option) => option.name === event.target.dataset.name
                )[0]
                _setSelectedOption(selectedOption)
            }
            // _setShowOption(false)
        } else {
            console.error(
                `${event.target.tagName}이 선택되었을 경우 창을 닫을 수 없습니다.`
            )
        }
    }

    return (
        <div
            {...props}
            data-c-color="gray"
            data-c-size={size}
            data-c-focus={isFocus}
            data-c-variant={variant}
            data-c-hasvalue={hasvalue}
            data-c-haslabel={hasLabel}
            data-c-showoption={_showOption}
            className={className ? `${s.select} ${className}` : `${s.select}`}
            ref={ref}
            id={props.id && `${props.id}-${ID}`}
            onClick={handleOnClick}
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
            />
            {showOption ? (
                <Option
                    optionList={optionList}
                    onClick={handleOnClickOption}
                    size={size}
                    variant={variant}
                />
            ) : (
                _showOption === true && (
                    <Option
                        optionList={optionList}
                        onClick={handleOnClickOption}
                        size={size}
                        variant={variant}
                    />
                )
            )}
        </div>
    )
}

export default forwardRef(Select)
