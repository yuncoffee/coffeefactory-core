import React from "react"
import { ComponentMeta } from "@storybook/react"
import Input from "./Input"
import { InputProps } from "@model/components"
import { action } from "@storybook/addon-actions"

export const Template = ({ ...props }: InputProps) => {
    return <Input {...props} />
}

const ARG_TYPES = {
    onClick: { control: false, defaultValue: action("click!") },
}

export default {
    title: "ReactComponentLibrary/Input",
    component: Template,
    argTypes: ARG_TYPES,
} as ComponentMeta<typeof Template>
