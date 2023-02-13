import React from "react"
import { ComponentMeta } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { OptionProps } from "@model/components/Select"
import Option from "./Option"
import { SbArgTypes } from "../../sbUtils"

interface sbArgTypes {
    sb_only_has_option: boolean
    sb_only_width: number
}
interface sbOptionProps extends OptionProps, sbArgTypes {}

class OptionSbArgTypes extends SbArgTypes implements sbArgTypes {
    sb_only_has_option: boolean
    sb_only_width: number

    constructor({ sb_only_width, sb_only_has_option }: sbArgTypes) {
        super()
        this.sb_only_width = sb_only_width
        this.sb_only_has_option = sb_only_has_option
    }
}

const optionSbArgTypes = new OptionSbArgTypes({
    sb_only_has_option: true,
    sb_only_width: 200,
})

const SAMPLE_OPTIONLIST = [
    { name: "hello" },
    { name: "world" },
    { name: "hello worldasdadasd!" },
]

const ARG_TYPES = {
    onClick: { control: false, defaultValue: action("click!") },
    size: { defaultValue: "lg" },
    optionNullDisplayLabel: { defaultValue: "Empty Option" },
    variant: { defaultValue: "block" },
    optionList: { defaultValue: SAMPLE_OPTIONLIST },
}

const PARAMETERS = {
    controls: {
        include: [
            "onClick",
            "size",
            "variant",
            "optionNullDisplayLabel",
            "optionList",
        ],
    },
}

optionSbArgTypes.setArgTypes(ARG_TYPES)
optionSbArgTypes.setParameter(PARAMETERS)

export const Template = ({ ...props }: OptionProps) => {
    // SAMPLE
    // sb_only를 포함하는 props
    const _props = props as sbOptionProps
    return (
        <Option
            // 원본에서 sb_only props 삭제
            {...optionSbArgTypes.removeSbArgTypesToProps(props)}
            optionList={_props.sb_only_has_option ? _props.optionList : null}
            style={{ width: `${_props.sb_only_width}px` }}
            onClick={(event) => {
                console.log(event.target)
            }}
        />
    )
}

export default {
    title: "ReactComponentLibrary/Select/Option",
    component: Template,
    argTypes: ARG_TYPES,
    parameters: PARAMETERS,
} as ComponentMeta<typeof Option>
