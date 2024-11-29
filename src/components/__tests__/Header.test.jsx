import { fireEvent, render, screen} from "@testing-library/react"
import "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"


test("Should render Header component with login button", () => {
    render(
        <BrowserRouter>            
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
        )

    const logInButton = screen.getByRole("button")
    expect(logInButton).toBeInTheDocument()
})

test("Should render Header component with login button", () => {
    render(
        <BrowserRouter>            
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
        )

    const logInButton = screen.getByText(/Cart/)
    expect(logInButton).toBeInTheDocument()
})

test("Should render Header component with login button", () => {
    render(
        <BrowserRouter>            
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
        )

    const logInButton = screen.getByRole("button", {name: "Login"})
    fireEvent.click(logInButton)
    const logOutButton = screen.getByRole("button", {name: "Logout"})
    expect(logOutButton).toBeInTheDocument()
})