import React from 'react';
import { shallow } from 'enzyme'
import { GifGridItem } from '../../components/gifGridItem'

describe('Pruebas en <GidGridItem/>', () => {

    const title = 'Un titulo'
    const url = 'https://un-url.jpg'

    const wrapper = shallow(<GifGridItem title={title} url={url} />)

    //test proptypes y snapshot
    test('debe de mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot()
    })

    test('el parrafo <p/> debe de tener el title', () => {

        //seleccionamos el parrafo
        const p = wrapper.find('p')
        //comparamos el texto del parrafo sin espacios con el title
        expect(p.text().trim()).toBe(title)
    })

    test('el <img/> debe de tener una img con el src y el alt', () => {

        //seleccionamos la img
        const img = wrapper.find('img')
        //vemos todos los atributos de img con .props() o con .html()
        // console.log(img.props())

        //solo mostramos la prop de src de dos formas
        // console.log(img.props().src)
        // console.log(img.prop('src'))

        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)
    })

    test('el <div/> debe de tener la clase animate__fadeIn', () => {
        //seleccionamos div
        const div = wrapper.find('div')
        // console.log(div.prop('className').includes('animate__fadeIn'))
        // console.log(div.hasClass('animate__fadeIn'))

        //mostrar las clases con estos dos metodos son equivalentes
        expect(div.prop('className').includes('animate__fadeIn')).toBe(true)
        expect(div.hasClass('animate__fadeIn')).toBe(true)
    })

})
