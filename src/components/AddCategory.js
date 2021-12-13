import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    //Enter
    const handleSubmit = (e) => {
        e.preventDefault()
        //validacion
        if (inputValue.trim().length > 2) {
            //el callback guarda el estado anterior (categories)
            setCategories(cats => [inputValue, ...cats])
            setInputValue('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input
                type='text'
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}