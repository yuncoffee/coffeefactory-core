import React, { BaseSyntheticEvent, useState } from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { action } from "@storybook/addon-actions"
// import { I } from "/model"
import { GLOBAL_COLOR_LIST } from "../../../data/type"
import { sColorName } from "@model/type"
import Select from "./Select"
import { SelectProps } from "@model/components/Select"

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

export const Template = ({ ...props }: SelectProps) => {
    return <Select {...props} />
}

export default {
    title: "ReactComponentLibrary/Select/Select",
    component: Template,
    argTypes: ARG_TYPES,
    parameters: PARAMETERS,
} as ComponentMeta<typeof Template>

export const ColorScale: ComponentStory<typeof Select> = ({ ...props }) => {
    const [showIndex, setShowIndex] = useState(-1)

    return (
        <div data-s-box="h-box" data-s-gap="16px" data-s-flexwrap="wrap">
            {GLOBAL_COLOR_LIST.map((color, index) => {
                let contentColor = color as sColorName

                if (color == "gray" || color == "white") {
                    contentColor = "gray700"
                }

                return (
                    <div
                        data-s-box="v-box"
                        data-s-align="center"
                        data-s-gap="8px"
                        key={index}
                    >
                        <Select
                            {...props}
                            color={color}
                            onClick={(event: BaseSyntheticEvent) => {
                                if (showIndex === index) {
                                    setShowIndex(-1)
                                } else {
                                    setShowIndex(index)
                                }

                                console.log(showIndex)
                            }}
                            data-index={index}
                            showOption={showIndex === index}
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
