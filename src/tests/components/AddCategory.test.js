import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory'

describe('test <AddCategory/>', () => {
    // const setCategories = () => { }
    //es igual que la funcion pero permite tener datos de ella
    const setCategories = jest.fn()
    let wrapper = shallow(<AddCategory setCategories={setCategories} />)

    beforeEach(() => {
        //limpiamos los mocks y reseteamos el componente
        jest.clearAllMocks()
        wrapper = shallow(<AddCategory setCategories={setCategories} />)

    })

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

    test('no debe de postear la informacion con submit', () => {
        //mandamos los argumentos del submit que es el preventDefault
        //wrapper.find('form').simulate('submit', {preventDefault:()=>{}})
        wrapper.find('form').simulate('submit', { preventDefault() { } })
        //verificamos que la funcion no se haya llamado
        expect(setCategories).not.toHaveBeenCalled()
    })


})
