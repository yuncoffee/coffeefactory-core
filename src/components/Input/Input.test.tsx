import React from "react"
import InputText from "./InputText"
import { render } from "@testing-library/react"

describe("button", () => {
    test("renders the Button Component", () => {
        render(<InputText />)
    })
    test("props test", () => {
        render(<InputText data-size="sekrjwk" />)
    })
})
