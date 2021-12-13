import { getGifs } from "../../helpers/getgifs"


describe('tests en <getGifs/> fetch', () => {

    test('debe de traer 10 elementos cuando le mando la categoria', async () => {

        const gifs = await getGifs('one punch')

        expect(gifs.length()).toBe(10)
    })

    test('debe', async () => {

        const gifs = await getGifs('')
        console.log(gifs)//tiene un array vacio[]

        expect(gifs.length()).toBe('')
    })


})
