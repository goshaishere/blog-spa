import axios from 'axios'
import $ from 'jquery'
import {setIsFetching, setFetchError, setCards} from "../reducers/responseReducer"


export const getCards = () => {
    const url = 'https://mocki.io/v1/a5814d24-4e22-49fc-96d1-0e9ae2952afc'

    return async (dispatch) => {
        try {
            console.log("Запрашиваем данные ", url)
            dispatch(setIsFetching(true))
            const response = await axios.get(url)
            dispatch(setCards(response))
        } catch (e) {
            dispatch(setFetchError(true))
            dispatch(setIsFetching(false))

            setTimeout( () => {
                dispatch(setFetchError(false))
            }, 2000)
        }
    }
}


// export const getRates = (currencyTypeFrom, currencyTypeTo, value) => {

//     return async (dispatch) => {
//         try {
//             dispatch(setIsFetching(true))
//             const response = await axios.get(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${currencyTypeFrom}`)
//             //dispatch(setRates(response.data))
//             //dispatch(setMultiplexer(response.data.conversion_rates[currencyTypeTo]))
//             //dispatch(setConvertedValue(response.data.conversion_rates[currencyTypeTo] * value))
//         } catch (e) {
//             dispatch(setFetchError(true))
//             dispatch(setIsFetching(false))

//             setTimeout( () => {
//                 dispatch(setFetchError(false))
//             }, 2000)
//         }
//     }
// }