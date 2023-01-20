import React, { useState } from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { CheckboxProps } from "@model/components/Input"
import { GLOBAL_COLOR_LIST } from "../../../data/type"
import { sColorName } from "@model/type"
import Checkbox from "./Checkbox"

export const Template = ({ ...props }: CheckboxProps) => {
    const _value: string[] = props.value! as string[]
    const [selected, setSelected] = useState(_value)

    return (
        <div data-s-box="h-box" data-s-gap="8px">
            {[...Array(3)].map((value, index) => {
                return (
                    <Checkbox
                        {...props}
                        key={index}
                        onChange={(event) => {
                            const targetValue = event.target.value
                            const filtered = selected.find(
                                (e) => e === targetValue
                            )
                            if (filtered) {
                                setSelected(
                                    selected.filter((e) => e !== targetValue)
                                )
                            } else {
                                setSelected([...selected, targetValue])
                            }
                        }}
                        checked={selected.includes(_value[index])}
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
    title: "ReactComponentLibrary/Input/Checkbox",
    component: Template,
    argTypes: ARG_TYPES,
    parameters: PARAMETERS,
} as ComponentMeta<typeof Template>

export const ColorScale: ComponentStory<typeof Checkbox> = ({
    ...props
}: CheckboxProps) => {
    const _value: string[] = props.value! as string[]
    const [selected, setSelected] = useState([...GLOBAL_COLOR_LIST])

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
                        <Checkbox
                            {...props}
                            color={color}
                            onChange={(event) => {
                                const filtered = selected.find(
                                    (e) => e === color
                                )
                                if (filtered) {
                                    setSelected(
                                        selected.filter((e) => e !== color)
                                    )
                                } else {
                                    setSelected([...selected, color])
                                }
                            }}
                            checked={selected.includes(color)}
                            value={color}
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
