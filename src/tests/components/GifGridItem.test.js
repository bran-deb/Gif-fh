import React from 'react';
import { shallow } from 'enzyme'
import { GifGridItem } from '../../components/gifGridItem'

describe('Pruebas en <GidGridItem/>', () => {

    const title = 'Un titulo'
    const url = 'https://un-url.jpg'

    //test proptypes y snapshot
    test('debe de mostrar el componente correctamente', () => {

        const wrapper = shallow(<GifGridItem title={title} url={url} />)

        expect(wrapper).toMatchSnapshot()
    })

})
