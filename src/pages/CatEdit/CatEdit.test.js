import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatEdit from './CatEdit.js'
Enzyme.configure({adapter: new Adapter()})

describe("When CatEdit renders", () => {
    let catEditRender
    beforeEach(() => {
        catEditRender = shallow(<CatEdit />)
    })
    it("renders a heading for updating your cat", () => {
        const catEditHeading = catEditRender.find("h1").text()
        expect(catEditHeading).toEqual("Update your card!")
    })
})