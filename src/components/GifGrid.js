import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './gifGridItem'
import ReactPlaceholder from 'react-placeholder/lib'

export const GifGrid = ({ category }) => {
    //renombramos data a images en el custom hook
    const { data: images, loading } = useFetchGifs(category)

    return (
        <>
            <h3>{category}</h3>
            <ReactPlaceholder
                type="media"
                rows={2}
                className="gif-grid"
                ready={loading === false}
            >
                {/* loading &&<p>Loading</p> //verificamos */}
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
            </ReactPlaceholder>
        </>
    )
}