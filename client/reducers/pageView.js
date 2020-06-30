import { NAVIGATE } from '../actions/action'

const initialState = 'home'

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case NAVIGATE:
            return  action.target
        default: 
            return state
    }
}

export default reducer