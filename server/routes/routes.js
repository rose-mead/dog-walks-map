const express = require('express')
const db = require('../db/db')
const router = express.Router()


router.get('/walks', (req, res) => {
    db.getWalks()
    .then(walks => {
        res.json(walks)
    })
    .catch(err => {
        console.error(err)
        res.status(500).json({ message: 'It broke' })
      })
})

router.get('/walk/:id', (req, res) => {
    db.getWalk(req.params.id)
    .then(walk => {
        res.json(walk)
    })
    .catch(err => {
        console.error(err)
        res.status(500).json({ message: 'It broke' })
      })
})

router.get('/search/:difficulty', (req, res) => {
    db.getSearchResults(req.params.difficulty)
    .then(walk => {
        res.json(walk)
        console.log('in routes', walk);
        
    })
    .catch(err => {
        console.error(err)
        res.status(500).json({ message: 'It broke' })
      })
})

router.get('/multisearch/:query', (req, res) => {
    // const result = new URLSearchParams({difficulty: 'easy', offLeash: 'true'}).toString()
    // console.log(result)
    const query = req.params.query
    const parsedQuery = JSON.parse('{"' + decodeURI(query.replace(/&/g, "\",\"").replace(/=/g,"\":\"")) + '"}')

    db.getMultiSearchResults(parsedQuery)
    .then(walk => {
        res.json(walk)
        // console.log('in routes', walk);
        
    })
    .catch(err => {
        console.error(err)
        res.status(500).json({ message: 'It broke' })
      })
})



module.exports = router