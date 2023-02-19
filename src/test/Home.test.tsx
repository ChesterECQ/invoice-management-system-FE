import Home from '../pages/Home';
import * as ReactDom from 'react-dom';
import React from 'react';

describe ('Home Component Test', () => {
    let container : HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div')
        document.body.appendChild(container)
        ReactDom.render(<Home />, container)
    })

    afterEach(() => {
        document.body.removeChild(container)
        container.remove()
    })

    it('Home Component Render correctly', () =>{
        expect(container.querySelector("[data-test = 'fileUpload']")).toBeInTheDocument
        expect(container.querySelector("[data-test = 'invoice records']")).toBeInTheDocument
    })

})
