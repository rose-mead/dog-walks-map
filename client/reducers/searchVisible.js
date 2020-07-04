import { SEARCH } from '../actions/action'

const initialState = false

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH:
            return  action.target
        default: 
            return state
    }
}

export default reducer