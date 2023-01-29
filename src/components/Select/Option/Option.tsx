import React, { ForwardedRef, forwardRef } from "react"
import { OptionProps } from "@model/components/Select"
import s from "./Option.module.scss"

const Option = (
    {
        // props를 작성해주세요.
        className,
        color,
        ...props
    }: OptionProps,
    ref: ForwardedRef<HTMLUListElement>
) => {
    return (
        <ul
            data-c-color={color}
            className={className ? `${s.option} ${className}` : `${s.option}`}
            ref={ref}
            {...props}
        >
            <li>helloworld!</li>
        </ul>
    )
}

export default forwardRef(Option)
