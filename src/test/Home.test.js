import { render, screen, cleanup } from "@testing-library/react";
import Home from "../sites/Home";


describe("Home Component", () => {
    afterEach(cleanup)

    it("renders Home headline", () => {
        render(<Home />)
        const headlineElm = screen.getByText(/home/i)
        expect(headlineElm).toBeInTheDocument()
    })

    it("renders option to log in", () => {
        render(<Home />)
        const loginElm = screen.getByText(/log in/i).closest("button")
        expect(loginElm).toBeInTheDocument()
    })
    
    it("renders logi button", () => {
        render(<Home />)
        const loginBtn = screen.getAllByText((_, element) => 
        element.tagName === "BUTTON"
        )[0]
        expect(loginBtn).toBeInTheDocument()
    })



})


