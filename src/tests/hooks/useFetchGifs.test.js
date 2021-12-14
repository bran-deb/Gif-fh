import { useFetchGifs } from "../../hooks/useFetchGifs"
import { renderHook } from '@testing-library/react-hooks'


describe('Pruebas en el customhook <useFetchGifs/>', () => {

    test('debe de retornar el estado', async () => {
        //crea un render de nuestro hook o una function virtual
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'))
        //desestructuramos del resul la data y loading del resul.current que es el valor actual del customhook
        const { data, loading } = result.current
        // const { data, loading } = useFetchGifs('One Punch')

        console.log(data, loading)
        //waitForNextUpdate retorna una promise por lo que la funcion tiene que ser un async
        await waitForNextUpdate()

        expect(data).toEqual([])
        expect(loading).toBe(true)
    })

    test('debe de retornar un array de imgs y el loading en false', async () => {
        //creamos el render del hook esperando el siguiente cambio
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'))
        //waitForNextUpdate retorna una promise por lo que la funcion tiene que ser un async
        await waitForNextUpdate()
        //desestructuramos del resul la data y loading del resul.current que es el valor actual del customhook
        const { data, loading } = result.current
        //verifica que la data tenga 10 imgs y se dejo de cargar
        expect(data.length).toBe(10)
        expect(loading).toBe(false)

    })


})
