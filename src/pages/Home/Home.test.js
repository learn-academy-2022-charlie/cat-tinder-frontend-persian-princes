import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home'
Enzyme.configure({adapter: new Adapter()})

describe("When Home renders", () => {
    let homeRender
    beforeEach(() => {
        homeRender = shallow(<Home />)
    })
    // it("has a header and a footer", () => {
    //     const homeHeaderRender = homeRender.find("Header")
    //     expect(homeHeaderRender.length).toEqual(1)
    // })
    it("has a heading", () => {
        const homeHeadingRender = homeRender.find("h1").text()
        expect(homeHeadingRender).toEqual("Home")
    })
})