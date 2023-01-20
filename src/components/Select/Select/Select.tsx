import React, { ForwardedRef, forwardRef } from "react"
import { SelectProps } from "@model/components/Select"
import s from "./Select.module.scss"

const Select = (
    {
        // props를 작성해주세요.
        className,
        ...props
    }: SelectProps,
    ref: ForwardedRef<HTMLUListElement>
) => {
    return (
        <ul
            className={className ? `${s.select} ${className}` : `${s.select}`}
            ref={ref}
            {...props}
        />
    )
}

export default forwardRef(Select)
