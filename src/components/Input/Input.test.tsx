import React from "react"

import { render, fireEvent } from "@testing-library/react"
import Input from "./Input"

describe("input", () => {
    let addtionClass: string | undefined = "addtion"
    const { getByTestId } = render(
        <Input
            className={addtionClass}
            data-testid="input"
            data-size="sekrjwk"
        />
    )
    const input = getByTestId("input") as HTMLInputElement
    test("props test", () => {
        addtionClass = undefined
        if (addtionClass) {
            expect(input).toHaveClass(addtionClass)
        } else {
            expect(input).toHaveClass("input")
        }
    })
    test("renders an input", () => {
        const { getByTestId } = render(
            <Input
                data-testid="input"
                className="test"
                data-size="sekrjwk"
                value={"text"}
                onChange={(event) => {
                    console.log(event.target.value)
                }}
            />
        )
        const input = getByTestId("input") as HTMLInputElement

        expect(input).toHaveValue()
    })
})
