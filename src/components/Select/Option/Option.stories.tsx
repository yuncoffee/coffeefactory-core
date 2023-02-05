import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { action } from "@storybook/addon-actions"
// import { I } from "/model"
import { GLOBAL_COLOR_LIST } from "../../../data/type"
import { sColorName } from "@model/type"
import Option from "./Option"

export const Template = ({ ...props }) => {
    return (
        <Option
            {...props}
            onClick={(event) => {
                console.log(event.target)
                console.log(event.currentTarget)
                console.log("hello world!")
            }}
        />
    )
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
    title: "ReactComponentLibrary/Select/Option",
    component: Template,
    argTypes: ARG_TYPES,
    parameters: PARAMETERS,
} as ComponentMeta<typeof Template>

export const ColorScale: ComponentStory<typeof Option> = ({ ...props }) => {
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
                        <Option
                            {...props}
                            color={color}
                            onClick={(event) => {
                                console.log(event.target)
                                console.log(event.currentTarget)
                                console.log("hello world!")
                            }}
                            optionList={[
                                { name: "hello" },
                                { name: "world" },
                                { name: "hello worldasdadasd!" },
                            ]}
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
