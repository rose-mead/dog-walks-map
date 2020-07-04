import {combineReducers} from 'redux'

import walks from './walks'
import selectedWalk from './selectedWalk'
import pageView from './pageView'
import searchedWalk from './searchedWalk'
import searchVisible from './searchVisible'

export default combineReducers({
    walks,
    selectedWalk,
    pageView,
    searchedWalk,
    searchVisible,
})