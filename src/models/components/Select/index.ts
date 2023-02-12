import { baseStyleAttributes } from "@model/type"
import { HTMLAttributes } from "react"

export interface OptionItem {
    /**
     * option's display name
     *
     * @requires
     */
    name: string
    /**
     * clickEventHandler
     *
     * @requires
     */
    onClick?: React.MouseEventHandler<HTMLLIElement>
}

export interface OptionProps
    extends Omit<HTMLAttributes<HTMLUListElement>, "color">,
        baseStyleAttributes {
    /**
     * OptionItemList
     */
    optionList: OptionItem[] | null
    variant?: "box" | "block" | "round"
    /**
     * common click event
     *
     * ```
     * const handleOnClick = () => {
     *  // do something..
     * }
     *
     * <Option onClick={handleOnClick}  />
     *
     * ```
     */
    onClick?: React.MouseEventHandler<HTMLUListElement>
    /**
     * if you need change display name for optionList state null
     */
    optionNullDisplayLabel?: string
}

export interface SelectProps
    extends Omit<HTMLAttributes<HTMLDivElement>, "color">,
        baseStyleAttributes {
    optionList: OptionItem[]
    optionDirection: string
    hasLabel?: boolean
    name?: string
    variant?: "box" | "block" | "round"
    selectedOption?: OptionItem
    optionNullDisplayLabel?: string
}
