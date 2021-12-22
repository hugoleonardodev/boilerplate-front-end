import { IQuote } from './quotesDataTypes'

export interface IQuoteData {
    data: IQuote[]
}

export interface IRootStateWithReducers {
    quotes: IQuoteData
    router: History
}
