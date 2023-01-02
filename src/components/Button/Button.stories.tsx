import React from "react"
import { ComponentMeta } from "@storybook/react"
import Button, { ButtonProps } from "./Button"
import { action } from "@storybook/addon-actions"

export const Template = ({ ...props }: ButtonProps) => {
    return <Button {...props} />
}

const ARG_TYPES = {
    onClick: { control: false, defaultValue: action("click!") },
}

export default {
    title: "ReactComponentLibrary/Button",
    component: Template,
    argTypes: ARG_TYPES,
} as ComponentMeta<typeof Template>

export const Hello = Template.bind({})
export const ClickMe = Template.bind({})
