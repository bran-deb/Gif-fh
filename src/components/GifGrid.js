import React from 'react'
import { useState, useEffect } from 'react'

export const GifGrid = ({ category }) => {
    //hacemos que el componente se ejecute una sola vez
    useEffect(() => {
        getGifs()
    }, [])

    const [count, setCount] = useState(0)

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=i6WreDgXbyKNG06qdfOz08YlRDqCbtUx'
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
    }

    return (
        <div>
            <h3>{category}</h3>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    )
}