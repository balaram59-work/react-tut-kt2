import {createStore} from 'redux'
import { cakeReducer } from './cakeReducer'
import { initialState } from './initalState'
export const store= createStore(cakeReducer,initialState)