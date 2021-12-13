import React from 'react';
import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory'

describe('test <AddCategory/>', () => {

    const setCategories = () => { }
    const wrapper = shallow(<AddCategory setCategories={setCategories} />)

    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot()
    })

    test('debe de cambiar la caja de texto', () => {
        //seleccionamos el input
        const input = wrapper.find('input')
        //creamos el value del e.target.value
        const value = 'Hola mundo'
        //simulamos el cambio del value del evento desestructurando
        input.simulate('change', { target: { value } })
        //seleccionamos el parrafo y lo comparamos con el value esperado
        expect(wrapper.find('p').text().trim()).toBe(value)
    })

})
