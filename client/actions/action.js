import { getWalks } from "../apis/api"

export const ADD_WALK = 'ADD_WALK'
export const SAVE_WALKS = 'SAVE_WALKS'
export const SELECTED_WALK = 'SELECTED_WALK'
export const NAVIGATE = 'NAVIGATE'



export function addWalk(walk) {
    return {
        type: 'ADD_WALK',
        walk: walk
    }
}

export function saveWalks(walks) {
    return {
        type: 'SAVE_WALKS',
        walks: walks
    }
}

export function selectedWalk(walk) {
    return {
        type: 'SELECTED_WALK',
        selectedWalk: walk
    }
}

export function pageView(target) {
    return {
        type: 'NAVIGATE',
        target: target
    }
}

export function fetchWalks() {
    return dispatch => {
        getWalks()
        .then(walks => {
            dispatch(saveWalks(walks))
        })
    }
    
}