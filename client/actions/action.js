export const ADD_WALK = 'ADD_WALK'
export const SAVE_WALKS = 'SAVE_WALKS'


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