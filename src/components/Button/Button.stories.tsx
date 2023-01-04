import React from "react"
import { ComponentMeta } from "@storybook/react"
import Button from "./Button"
import Input from "../Input/Input"
import { action } from "@storybook/addon-actions"
import { ButtonProps } from "@model/components/Button"

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

export const Test = () => {
    return (
        <>
            <h1>test</h1>
            <Button
                buttonName="hello"
                c-size="xl"
                onClick={(e) => {
                    console.log(e)
                }}
            >
                <h1>test</h1>
                <div>dd</div>hglloe
            </Button>
        </>
    )
}

export const Testtest = () => {
    return (
        <Input
            data-s-font={"800"}
            className="helloworld! i am"
            // onChange={(event) => {
            //     console.log(event.target.value)
            // }}
        />
    )
}
