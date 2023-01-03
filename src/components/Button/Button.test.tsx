import React from "react"
import Button from "./Button"
import { render } from "@testing-library/react"

describe("button", () => {
    test("renders the Button Component", () => {
        render(<Button buttonName="name" onClick={() => {}} />)
    })
    test("props test", () => {
        render(
            <>
                <Button buttonName="name" onClick={() => {}}>
                    hello!
                </Button>
            </>
        )
    })
})
