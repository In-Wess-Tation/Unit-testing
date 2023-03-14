import { render, screen, cleanup } from "@testing-library/react";
import Navigation from "../conponents/Navigation";

describe("Navigation component", () => {
    afterEach(cleanup)

    it("renders 'ul' tag in a 'nav' tag", () => {
        render(<Navigation />)
        const ulElm = screen.getByRole("list")
        expect(ulElm.parentElement.tagName).toBe("NAV")
    })

    it("renders 'li's is in the 'ul'", () => {
        render(<Navigation />)
        const listItems = screen.getAllByRole("listitem")
        listItems.forEach(listItem => 
        expect(listItem.parentElement.tagName).toBe("MENU")
        )
    })



    it("If there is an li with an 'about' value", () => {
        render(<Navigation />)
        const aboutLink = screen.getByRole("link", {name: /about/i})
        expect(aboutLink).toBeInTheDocument()
        expect(aboutLink.parentElement.tagName).toBe("LI")
    })

    it("If there is an li with an 'about' value", () => {
        render(<Navigation />)
        const contactLink = screen.getByRole("link", {name: /contact/i})
        expect(contactLink).toBeInTheDocument()
        expect(contactLink.parentElement.tagName).toBe("LI")
    })

  


})

