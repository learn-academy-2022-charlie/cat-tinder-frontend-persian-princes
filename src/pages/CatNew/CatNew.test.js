import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatNew from './CatNew.js'
Enzyme.configure({adapter: new Adapter()})

describe("When CatNew renders", () => {
    let catNewRender
    beforeEach(() => {
        catNewRender = shallow(<CatNew />)
    })
    it("displays a heading to create a new cat", () => {
        const catNewHeadingRender = catNewRender.find("h1").text()
        expect(catNewHeadingRender).toEqual("Create your card!")
    })
    it("displays a form to create a cat", () => {
        const catNewFormRender = catNewRender.find("Form")
        expect(catNewFormRender.length).toEqual(1)
    })
    it("displays an input for the cats name", () => {
        const catNewNameRender = catNewRender.find('[name="name"]')
        expect(catNewNameRender.length).toEqual(1)
    })
    it("displays an input for the cats age", () => {
        const catNewAgeRender = catNewRender.find('[name="age"]')
        expect(catNewAgeRender.length).toEqual(1)
    })
    it("displays an input for the cats enjoys", () => {
        const catNewEnjoysRender = catNewRender.find('[name="enjoys"]')
        expect(catNewEnjoysRender.length).toEqual(1)
    })
    it("displays an input for the cats image", () => {
        const catNewImageRender = catNewRender.find('[name="image"]')
        expect(catNewImageRender.length).toEqual(1)
    })
})