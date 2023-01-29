import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { action } from "@storybook/addon-actions"
// import { I } from "/model"
import { GLOBAL_COLOR_LIST } from "../../../data/type"
import { sColorName } from "@model/type"
import Select from "./Select"

export const Template = ({ ...props }) => {
    return <Select {...props} />
}

const ARG_TYPES = {
    onClick: { control: false, defaultValue: action("click!") },
    // Add ArgTypes...
}

const PARAMETERS = {
    controls: {
        include: [
            "onClick",
            // Add Props Args(Props)..
        ],
    },
}

export default {
    title: "ReactComponentLibrary/Select",
    component: Template,
    argTypes: ARG_TYPES,
    parameters: PARAMETERS,
} as ComponentMeta<typeof Template>

export const ColorScale: ComponentStory<typeof Select> = ({ ...props }) => {
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
                        <Select
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
