import {combineReducers} from 'redux'

import walks from './walks'
import selectedWalk from './selectedWalk'
import pageView from './pageView'
import searchedWalk from './searchedWalk'

export default combineReducers({
    walks,
    selectedWalk,
    pageView,
    searchedWalk,
})