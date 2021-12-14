import React from 'react';
import { shallow } from 'enzyme'
import GifExpertApp from '../GifExpertApp';


describe('Pruebas en <GifExpertApp/>', () => {

    const wrapper = shallow(<GifExpertApp />)

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de mostrar una lista de categorias del usestate categories', () => {
        //lo que se hace es que se manda por props el estado inicial
        const categories = ['One Punch', 'Dragon Ball']
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />)

        expect(wrapper).toMatchSnapshot()
        //seleccionamos y verificamos que gifgrid tenga la misma cantidad de elementos que categories
        expect(wrapper.find('GifGrid').length).toBe(categories.length)
    })


})
