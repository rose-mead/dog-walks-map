import {combineReducers} from 'redux'

import walks from './walks'
import selectedWalk from './selectedWalk'

export default combineReducers({
    walks,
    selectedWalk,
})