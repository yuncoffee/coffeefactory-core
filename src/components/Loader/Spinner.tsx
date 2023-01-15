import React, { useState } from "react"
import s from "./Spinner.module.scss"

function Spinner({ size = "xs" }) {
    const [isShow, setIsShow] = useState(false)

    setTimeout(() => {
        setIsShow(true)
    }, 500)

    return <div className={s.spinner} data-active={isShow} data-c-size={size} />
}

export default Spinner
