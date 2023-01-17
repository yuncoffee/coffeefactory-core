import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { ToggleProps } from "@model/components/Button"
import { GLOBAL_COLOR_LIST } from "../../../data/type"
import { sColorName } from "@model/type"
import Toggle from "./Toggle"

export const Template = ({ ...props }: ToggleProps) => {
    return <Toggle {...props} />
}

const ARG_TYPES = {
    onClick: { control: false, defaultValue: action("click!") },
    color: { defaultValue: "pri" },
    size: { defaultValue: "lg" },
}

const PARAMETERS = {
    controls: {
        include: ["onClick", "color", "size", "className"],
    },
}

export default {
    title: "ReactComponentLibrary/Toggle",
    component: Template,
    argTypes: ARG_TYPES,
    parameters: PARAMETERS,
} as ComponentMeta<typeof Template>

export const ColorScale: ComponentStory<typeof Template> = ({
    ...props
}: ToggleProps) => {
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
                        <Toggle
                            {...props}
                            color={color}
                            onClick={(event) => {
                                console.log(event.currentTarget)
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
