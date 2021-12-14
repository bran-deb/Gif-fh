import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')




describe('Pruebas en <GifGrid/>', () => {
    const category = 'One Punch'


    test('debe de mostrar el componente correctamente', () => {
        //usamos mocks en el customHook para simular sus datos
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        })

        const wrapper = shallow(<GifGrid category={category} />)

        expect(wrapper).toMatchSnapshot()
    })

    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
        //creamos datos para pasarlos al mock customhook
        const gifs = [{
            id: 'ABC',
            url: 'https://ejemploUrl.jpg',
            title: 'cualquier cosa'
        }]
        //suponemos que el loading esta en false y la data ya tiene los gifs
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        const wrapper = shallow(<GifGrid category={category} />)
        //seleccionamos el parrafo para verificar si existe es false
        expect(wrapper.find('p').exists()).toBe(false)
        //seleccionamos el gifgriitem y verificamos que tenga la misma cantidad de elementos que gifs[array]
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
    })

})
