import React from 'react'
import { useState, useEffect } from 'react'
import { GifGridItem } from './gifGridItem'

export const GifGrid = ({ category }) => {
    //hacemos que el componente se ejecute una sola vez
    useEffect(() => {
        getGifs()
    }, [])

    const [images, setImages] = useState([])

    const getGifs = async () => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=i6WreDgXbyKNG06qdfOz08YlRDqCbtUx`
        const resp = await fetch(url)
        const { data } = await resp.json()

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
            }
        })
        console.log(gifs)
        setImages(gifs)
    }

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