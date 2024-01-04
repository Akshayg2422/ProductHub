import { createStore } from 'redux'
import UserReducer from './UserReducer'

export const store = createStore(UserReducer)
