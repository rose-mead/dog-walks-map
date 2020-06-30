import { ADD_WALK, SAVE_WALKS } from '../actions/action'

const initialState = {
    walks: [{name:'Kainui'}, {name:'Yarndleys'}, {name:'Newstead'}]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_WALK:
            return {
                walks: [...state.walks, action.walk]
            }
        case SAVE_WALKS:
            return {
                walks: action.walks
            }
        default: 
            return state
    }
}

export default reducer