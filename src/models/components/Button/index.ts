import { ButtonHTMLAttributes } from "react"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * buttonName은 이름이다.!
     */
    buttonName: string
    dataType?: string
}
