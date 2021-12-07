import React from 'react'
import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getgifs'
import { GifGridItem } from './gifGridItem'

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs(category)
            .then(setImages)
        // si category cambia volvemos a ejecutar este efecto
    }, [category])

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}