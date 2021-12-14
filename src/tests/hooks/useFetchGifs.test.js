import { useFetchGifs } from "../../hooks/useFetchGifs"
import { renderHook } from '@testing-library/react-hooks'


describe('Pruebas en el customhook <useFetchGifs/>', () => {

    test('debe de retornar el estado', () => {
        //crea un render de nuestro hook o una function virtual
        const { result } = renderHook(() => useFetchGifs('One Punch'))
        //desestructuramos del resul la data y loading del resul.current que es el valor actual del customhook
        const { data, loading } = result.current
        // const { data, loading } = useFetchGifs('One Punch')

        console.log(data, loading)

        expect(data).toEqual([])
        expect(loading).toBe(true)
    })

})
