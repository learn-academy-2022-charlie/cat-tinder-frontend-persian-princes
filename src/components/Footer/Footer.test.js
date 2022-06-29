import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from './Footer'
Enzyme.configure({adapter: new Adapter()})

describe("When Footer renders", () => {
    let footerRender
    beforeEach(() => {
        footerRender = shallow(<Footer />)
    })
    it("will display a copyright", () => {
        const footerCopyrightRender = footerRender.find("p").text()
        expect(footerCopyrightRender).toEqual("© Copyright Logan and Jenner")
    })
    it("will display 2 unordered lists", () => {
        const footerUnorderedListRender = footerRender.find("ul")
        expect(footerUnorderedListRender.length).toEqual(2)
    })
    it("will have 4 list items per unordered list", () => {
        const footerListItemRender = footerRender.find("li")
        expect(footerListItemRender.length).toEqual(8)
    })
})