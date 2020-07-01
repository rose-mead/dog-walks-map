import request from 'superagent'

export function getWalks() {
    return request
    .get('/walks')
    .then(response => response.body)
}


export function getWalk(id) {
    return request
    .get(`/walk/${id}`)
    .then(response => response.body)
}

export function searchWalks(difficulty) {
    return request
    .get(`/search/${difficulty}`)
    .then(response => {
        console.log('in api', response)
        return response.body
    })
}