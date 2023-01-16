import {
    sBaseSize,
    sColor,
    sSize,
    sVariantExceptRound,
    sVariantExcpetCircle,
} from "@model/type"
import { useEffect, useState } from "react"

type useButton = (
    size: sBaseSize,
    color: sColor,
    variant: sVariantExceptRound | sVariantExcpetCircle,
    onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>,
    onMouseOver?: React.MouseEventHandler<HTMLButtonElement>
) => [sBaseSize, sColor, () => void, () => void]

const useButton: useButton = (
    size,
    color,
    variant,
    onMouseLeave,
    onMouseOver
) => {
    const [spinnerSize, setSpinnerSize] = useState(size)
    const [spinnerColor, setSpinnerColor] = useState(color)

    useEffect(() => {
        setSpinnerSize(getSpinnerSize(size) as sBaseSize)
    }, [size])

    useEffect(() => {
        setSpinnerColor(getSpinnerColor(variant))
    }, [variant])

    const getSpinnerSize = (size: sSize) => {
        if (size == "xxl") {
            return "sm"
        }
        if (size == "xs" || size == "xxs") {
            return "xxxs"
        }
        return "xxs"
    }

    const getSpinnerColor = (
        variant: sVariantExceptRound | sVariantExcpetCircle
    ) => {
        let regExp = /-ghost$/
        if (regExp.test(variant as string)) {
            return color
        }
        regExp = /-line$/
        if (regExp.test(variant as string)) {
            return color
        }

        return "white"
    }

    const handleMouseLeave = () => {
        setSpinnerColor(getSpinnerColor(variant))
        onMouseLeave
    }

    const handleMouseOver = () => {
        setSpinnerColor("white")
        onMouseOver
    }

    return [spinnerSize, spinnerColor, handleMouseLeave, handleMouseOver]
}

export default useButton
