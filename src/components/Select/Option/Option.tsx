import React, { ForwardedRef, forwardRef } from "react"
import { OptionProps } from "@model/components/Select"
import s from "./Option.module.scss"

const Option = (
    {
        // props를 작성해주세요.
        className,
        ...props
    }: OptionProps,
    ref: ForwardedRef<HTMLUListElement>
) => {
    return (
        <div
            className={className ? `${s.option} ${className}` : `${s.option}`}
            ref={ref}
            {...props}
        />
    )
}

export default forwardRef(Option)
