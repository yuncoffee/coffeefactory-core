import { ButtonHTMLAttributes } from "react"

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
}
