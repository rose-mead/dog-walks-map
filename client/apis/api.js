import request from 'superagent'

export function getWalks() {
    return request
    .get('/walks')
    .then(response => response.body)
}