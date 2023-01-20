import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { FieldProps } from "@model/components/Input"
import { GLOBAL_COLOR_LIST } from "../../../data/type"
import { sColorName } from "@model/type"
import Field from "./Field"

export const Template = ({ ...props }: FieldProps) => {
    return <Field {...props} />
}

const ARG_TYPES = {
    onClick: { control: false, defaultValue: action("click!") },
    type: { defaultValue: "text" },
    size: { defaultValue: "lg" },
    color: { defaultValue: "gray" },
    variant: { defaultValue: "block" },
    name: { control: "text", defaultValue: "name" },
    placeholder: { control: "text", defaultValue: "placeholder" },
    hasLabel: { defaultValue: true },
    // Add ArgTypes...
}

const PARAMETERS = {
    controls: {
        include: [
            "type",
            "size",
            "color",
            "variant",
            "name",
            "hasLabel",
            "placeholder",
        ],
    },
}

export default {
    title: "ReactComponentLibrary/Input/Field",
    component: Template,
    argTypes: ARG_TYPES,
    parameters: PARAMETERS,
} as ComponentMeta<typeof Template>

export const ColorScale: ComponentStory<typeof Field> = ({
    ...props
}: FieldProps) => {
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
                        <Field
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
