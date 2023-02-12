import React, { useEffect, useState } from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { OptionProps } from "@model/components/Select"
import { GLOBAL_COLOR_LIST } from "../../../data/type"
import { sColorName } from "@model/type"
import Option from "./Option"

interface sbArgTypes {
    sb_only_has_option: boolean
    sb_only_width: number
}

class SbArgTypes implements sbArgTypes {
    sb_only_has_option: boolean
    sb_only_width: number

    constructor(sb_only_has_option: boolean, sb_only_width: number) {
        this.sb_only_has_option = sb_only_has_option
        this.sb_only_width = sb_only_width
    }
}

const OptionSbArgTypes = new SbArgTypes(true, 200)

const SB_ONLY_OPTION_LIST: Array<keyof sbArgTypes> = [
    "sb_only_has_option",
    "sb_only_width",
]

function removeSbArgTypesToProps<T extends { [key: string]: any }>(
    sbOpionList: string[],
    props: T
): T {
    const result = { ...props }

    sbOpionList.forEach((key: string) => {
        delete result[key]
    })
    return result
}

interface sbOptionProps extends OptionProps, sbArgTypes {}

const SAMPLE_OPTIONLIST = [
    { name: "hello" },
    { name: "world" },
    { name: "hello worldasdadasd!" },
]

export const Template = ({ ...props }: OptionProps) => {
    // SAMPLE
    const _props = props as sbOptionProps
    const exceptSbProps = removeSbArgTypesToProps(SB_ONLY_OPTION_LIST, props)
    const exceptSbProps2 = removeSbArgTypesToProps(
        Object.keys(OptionSbArgTypes),
        props
    )
    return (
        <Option
            {...exceptSbProps2}
            optionList={_props.sb_only_has_option ? _props.optionList : null}
            style={{ width: `${_props.sb_only_width}px` }}
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
    size: { defaultValue: "lg" },
    optionNullDisplayLabel: { defaultValue: "Empty Option" },
    variant: { defaultValue: "block" },
    optionList: { defaultValue: SAMPLE_OPTIONLIST },
    // sb only
    sb_only_has_option: { control: "boolean", defaultValue: true },
    sb_only_width: { control: "number", defaultValue: 200 },
}

const PARAMETERS = {
    controls: {
        include: [
            "onClick",
            "size",
            "variant",
            "optionNullDisplayLabel",
            "optionList",
            // sb only
            "sb_only_has_option",
            "sb_only_width",
        ],
    },
}

export default {
    title: "ReactComponentLibrary/Select/Option",
    component: Template,
    argTypes: ARG_TYPES,
    parameters: PARAMETERS,
} as ComponentMeta<typeof Option>

const ColorScale: ComponentStory<typeof Option> = ({ ...props }) => {
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
