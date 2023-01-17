
    import React, { ForwardedRef, forwardRef } from "react"
    import { I } from "model"
    import s from "../Radio.module.scss"
    
    const Radio = (
        {
            props를 작성해주세요.
            className,
            ...props
        }: I,
        ref: ForwardedRef<T>
    ) => {
    
        return (
            <div
                className={
                    className ? `${s.Radio} ${className}` : `${s.Radio}`
                }
                ref={ref}
                {...props}
            />
        )
    }

    export default forwardRef(Radio)