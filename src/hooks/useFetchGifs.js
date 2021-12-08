import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getgifs"


export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })
    //los effect lo pueden ser async
    useEffect(() => {

        getGifs(category)
            .then(imgs => {

                setTimeout(() => {
                    console.log(imgs)
                    setState({
                        data: imgs,
                        loading: false,
                    })
                }, 3000)
            });
        //evaluamos unicamente cuando la categoria cambia
    }, [category])



    return state //{data:[],loading: true}
}
