export const ADD_WALK = 'ADD_WALK'
export const SAVE_WALKS = 'SAVE_WALKS'
export const SELECTED_WALK = 'SELECTED_WALK'


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