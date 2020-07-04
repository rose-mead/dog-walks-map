import { getWalks, searchWalks, multiSearchWalks } from "../apis/api"

export const ADD_WALK = 'ADD_WALK'
export const SAVE_WALKS = 'SAVE_WALKS'
export const SELECTED_WALK = 'SELECTED_WALK'
export const NAVIGATE = 'NAVIGATE'
export const SEARCH_WALK = 'SEARCH_WALK'
export const SEARCH = 'SEARCH'



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

export function searchVisible(target) {
    return {
        type: 'SEARCH',
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

export function saveSearchResults(walks) {
    return {
        type: 'SEARCH_WALKS',
        searchedWalk: walks
    }
}

export function fetchSearchResults(difficulty) {
    return dispatch => {
        searchWalks(difficulty)
        .then(walks => {
            dispatch(saveSearchResults(walks))
            // dispatch(saveSearchResults(walks))
        })
    }
}

// [{difficulty: ''},{offLeash: ''}]
export function fetchMultipleSearchResults(searchTerms) {
    return dispatch => {
        multiSearchWalks(searchTerms)
        .then(walks => {
            dispatch(saveWalks(walks))
        })
    }
}