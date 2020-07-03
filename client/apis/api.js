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

// [{difficulty: '', offLeash: ''}]

export function multiSearchWalks(searchTerms) {
    const query = new URLSearchParams(searchTerms)

    // const query = new URLSearchParams({difficulty: '', offLeash: ''}).toString()
    // console.log(query)
    return request
    .get(`/multisearch/${query}`)
    .then(response => {
        console.log('in api', response)
        return response.body
    })
}