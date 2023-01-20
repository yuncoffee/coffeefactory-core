import { baseStyleAttributes } from "@model/type"
import { HTMLAttributes } from "react"

export interface OptionProps
    extends Omit<HTMLAttributes<HTMLUListElement>, "color">,
        baseStyleAttributes {}

export interface SelectProps {}
