import { SEARCH_WALKS } from '../actions/action'

const initialState = [{id: 1, name: "Lake Kainui", location: "Horsham Downs", coordinates: {}, time: "60 min",}]

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_WALKS':
            return action.searchedWalk
        default: 
            return state
    }
}

export default reducer