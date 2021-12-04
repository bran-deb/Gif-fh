import React, { useState } from 'react'

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('Hola Mundo')

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

export default AddCategory
