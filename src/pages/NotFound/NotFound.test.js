import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from './NotFound'
Enzyme.configure({adapter: new Adapter()})

describe("when NotFound renders", () => {
    let notFoundRender
    beforeEach(() => {
        notFoundRender = shallow(<NotFound />)
    })
    it("renders 404 error message", () => {
        const errorMessageRender = notFoundRender.find("h1").text()
        expect(errorMessageRender).toEqual("404: Not Found")
    })
    it("renders a button that takes you to home page", () => {
        const buttonRender = notFoundRender.find("Link")
        expect(buttonRender.length).toEqual(1)
    })
})