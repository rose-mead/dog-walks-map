import { SELECTED_WALK } from '../actions/action'

const initialState = {id: 1, name: "Lake Kainui", location: "Horsham Downs", coordinates: {}, time: "60 min",}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_WALK:
            return action.selectedWalk
        default: 
            return state
    }
}

export default reducer