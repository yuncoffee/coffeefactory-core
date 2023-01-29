import React, { ForwardedRef, forwardRef } from "react"
import { OptionProps } from "@model/components/Select"
import s from "./Option.module.scss"

const Option = (
    {
        // props를 작성해주세요.
        optionList,
        onClick,
        variant = "block",
        size = "mid",
        className,
        optionNullDisplayLabel = "Empty Option",
        ...props
    }: OptionProps,
    ref: ForwardedRef<HTMLUListElement>
) => {
    return (
        <ul
            data-c-size={size}
            data-c-variant={variant}
            className={className ? `${s.option} ${className}` : `${s.option}`}
            onClick={onClick}
            ref={ref}
            {...props}
        >
            {optionList ? (
                optionList.map((optionItem, index) => {
                    return (
                        <li
                            className={`${s.option__item}`}
                            onClick={optionItem.onClick}
                            key={index}
                            data-index={index}
                            data-name={optionItem.name}
                            tabIndex={index}
                        >
                            {optionItem.name}
                        </li>
                    )
                })
            ) : (
                <li
                    className={`${s.option__item} ${s.option__null}`}
                    data-index={-1}
                    tabIndex={-1}
                    data-name={"null"}
                >
                    {optionNullDisplayLabel}
                </li>
            )}
        </ul>
    )
}

export default forwardRef(Option)
