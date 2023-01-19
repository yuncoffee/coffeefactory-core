import React from "react"
import { ComponentMeta } from "@storybook/react"
import Input from "./Input"
import { action } from "@storybook/addon-actions"

export const Template = ({ ...props }: any) => {
    return <Input data-s-size={"xxl"} {...props} />
}

const ARG_TYPES = {
    onClick: { control: false, defaultValue: action("click!") },
}

export default {
    title: "ReactComponentLibrary/Input",
    component: Template,
    argTypes: ARG_TYPES,
} as ComponentMeta<typeof Template>
