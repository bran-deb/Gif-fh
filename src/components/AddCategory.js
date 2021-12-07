import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategories }) => {

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
            setCategories(cats => [...cats, inputValue])
            setInputValue('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
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

export default AddCategory
