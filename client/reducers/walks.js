import { ADD_WALK, SAVE_WALKS,} from '../actions/action'

const initialState = []
// const initialState = [{id: 1, name:'Kainui'}, {id: 2, name:'Yarndleys'}, {id: 3, name:'Newstead'}]

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_WALK:
            return  [...state.walks, action.walk]
        case SAVE_WALKS:
            return  action.walks
        default: 
            return state
    }
}

export default reducer