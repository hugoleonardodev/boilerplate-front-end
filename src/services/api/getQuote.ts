import axios, { AxiosResponse } from 'axios'

import { IQuote } from '@store/constants/quotesDataTypes'

const getQuote = async (): Promise<AxiosResponse<IQuote[]>> => {
    const url = 'https://type.fit/api/quotes'

    const result = await axios({
        url,
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        },
    })

    return result
}

export default getQuote
