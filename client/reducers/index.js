import {combineReducers} from 'redux'

import walks from './walks'
import selectedWalk from './selectedWalk'
import pageView from './pageView'

export default combineReducers({
    walks,
    selectedWalk,
    pageView
})