import { getByRole, render, screen } from "@testing-library/react";
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("Contact Component Tests", () => {
    test("Should load contact us component", () => {
        render(<Contact/>)
        const heading = screen.getByRole("heading")
        expect(heading).toBeInTheDocument()
    })

    test("should load button inside contact component", () => {
        render(<Contact/>)
        const button = screen.getByRole("button", { name: "Submit" });
        expect(button).toBeInTheDocument()
    })
})