import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import Button from "./Button"
import { action } from "@storybook/addon-actions"
import { ButtonProps, IconButtonProps } from "@model/components/Button"
import { GLOBAL_COLOR_LIST } from "../../data/type"
import { sColorName } from "@model/type"
import IconButton from "./IconButton"

export const Template = ({ ...props }: IconButtonProps) => {
    return <IconButton {...props} />
}

const ARG_TYPES = {
    onClick: { control: false, defaultValue: action("click!") },
    iconName: { defaultValue: "ri-close-line" },
    variant: { defaultValue: "block" },
    color: { defaultValue: "pri" },
    size: { defaultValue: "lg" },
}

const PARAMETERS = {
    controls: {
        include: [
            "iconName",
            "onClick",
            "variant",
            "color",
            "size",
            "className",
            "isLoading",
        ],
    },
}

export default {
    title: "ReactComponentLibrary/IconButton",
    component: Template,
    argTypes: ARG_TYPES,
    parameters: PARAMETERS,
} as ComponentMeta<typeof Template>

export const ColorScale: ComponentStory<typeof IconButton> = ({
    ...props
}: IconButtonProps) => {
    return (
        <div data-s-box="h-box" data-s-gap="16px" data-s-flexwrap="wrap">
            {GLOBAL_COLOR_LIST.map((color) => {
                let contentColor = color as sColorName

                if (color == "gray" || color == "white") {
                    contentColor = "gray700"
                }

                return (
                    <div
                        data-s-box="v-box"
                        data-s-align="center"
                        data-s-gap="8px"
                    >
                        <IconButton
                            {...props}
                            color={color}
                            onClick={() => {
                                console.log("hello world!")
                            }}
                        />
                        <h4 data-s-color={contentColor}>{color}</h4>
                    </div>
                )
            })}
        </div>
    )
}

ColorScale.parameters = {
    ...PARAMETERS,
    controls: {
        ...PARAMETERS.controls,
        exclude: ["color"],
    },
}
