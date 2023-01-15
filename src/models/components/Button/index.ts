import { ButtonHTMLAttributes } from "react"
import { SIZE_LIST } from "../../../data/type"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * buttonName은 이름이다.!
     */
    buttonName: string
    /**
     * onClick은 중요하다..!
     */
    onClick: React.MouseEventHandler<HTMLButtonElement>
    /**
     * dataType은 들어올 수도 있따..!!!!
     */
    dataType?: string
    isLoading?: boolean
    size?: typeof SIZE_LIST[number]
}
