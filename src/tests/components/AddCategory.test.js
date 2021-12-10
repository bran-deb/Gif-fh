import React from 'react';
import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory'

describe('test <AddCategory/>', () => {

    const setCategories = () => { }
    // const wrapper = shallow(<AddCategory />)

    test('debe de mostrarse correctamente', () => {

        const wrapper = shallow(<AddCategory setCategories={setCategories} />)

        expect(wrapper).toMatchSnapshot()
    })

})
