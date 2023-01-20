import React, { useState } from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { RadioProps } from "@model/components"
import { GLOBAL_COLOR_LIST } from "../../../data/type"
import { sColorName } from "@model/type"
import Radio from "./Radio"

export const Template = ({ ...props }: RadioProps) => {
    const _value: string[] = props.value! as string[]
    const [selected, setSelected] = useState(_value[0])

    return (
        <div data-s-box="h-box" data-s-gap="8px">
            {[...Array(3)].map((value, index) => {
                return (
                    <Radio
                        {...props}
                        key={index}
                        onChange={() => {
                            setSelected(_value[index])
                        }}
                        checked={selected == _value![index]}
                        value={_value![index]}
                    />
                )
            })}
        </div>
    )
}

const ARG_TYPES = {
    size: { defaultValue: "lg" },
    color: { defaultValue: "pri" },
    defaultChecked: { defaultValue: false },
    hasLabel: { defaultValue: true },
    disabled: { control: "boolean", defaultValue: false },
    name: { defaultValue: "radio-group" },
    value: { control: "array", defaultValue: ["hello", "world", "storybook"] },
    // Add ArgTypes...
}

const PARAMETERS = {
    controls: {
        include: [
            "name",
            "value",
            "checked",
            "size",
            "color",
            "isMono",
            "disabled",
            "hasLabel",
        ],
    },
}

export default {
    title: "ReactComponentLibrary/Input/Radio",
    component: Template,
    argTypes: ARG_TYPES,
    parameters: PARAMETERS,
} as ComponentMeta<typeof Template>

export const ColorScale: ComponentStory<typeof Radio> = ({
    ...props
}: RadioProps) => {
    const [selected, setSelected] = useState("green")

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
                        <Radio
                            {...props}
                            color={color}
                            checked={selected == color}
                            value={color}
                            // hasLabel={false}
                            onChange={(event) => {
                                console.log(event.target.value)
                                setSelected(event.target.value)
                            }}
                            hasLabel={true}
                            onClick={() => {
                                console.log("hello world!")
                            }}
                            tabIndex={index + 1}
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
