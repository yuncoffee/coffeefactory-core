import React from "react"
import Button from "./Button"
import { render } from "@testing-library/react"

describe("button", () => {
    test("renders the Button Component", () => {
        render(<Button buttonName="name" />)
    })
    test("props test", () => {
        render(<Button buttonName="name" data-size="sekrjwk" />)
    })
})
