import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatEdit from './CatEdit.js'
Enzyme.configure({adapter: new Adapter()})

describe("When CatEdit renders", () => {
    let catEditRender
    beforeEach(() => {
        let cat = {
            id: 1,
            name: "Mittens",
            age: 5,
            enjoys: "sunshine and warm spots",
            image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        }
        catEditRender = shallow(<CatEdit cat/>)
    })
    it("renders a heading for updating your cat", () => {
        
        const catEditHeading = catEditRender.find("h1").text()
        expect(catEditHeading).toEqual("Update your card!")
    })
    it("displays a form to edit a cat", () => {
        const catEditFormRender = catEditRender.find("Form")
        expect(catEditFormRender.length).toEqual(1)
    })
    it("displays an input for the cats name", () => {
        const catEditNameRender = catEditRender.find('[name="name"]')
        expect(catEditNameRender.length).toEqual(1)
    })
    it("displays an input for the cats age", () => {
        const catEditAgeRender = catEditRender.find('[name="age"]')
        expect(catEditAgeRender.length).toEqual(1)
    })
    it("displays an input for the cats enjoys", () => {
        const catEditEnjoysRender = catEditRender.find('[name="enjoys"]')
        expect(catEditEnjoysRender.length).toEqual(1)
    })
    it("displays an input for the cats image", () => {
        const catEditImageRender = catEditRender.find('[name="image"]')
        expect(catEditImageRender.length).toEqual(1)
    })
})