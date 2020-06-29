const express = require('express')
const db = require('../db/db')
const router = express.Router()


router.get('/walks', (req, res) => {
    db.getWalks()
    .then(walks => {
        res.json(walks)
    })
})

router.get('/walk/:id', (req, res) => {
    db.getWalk(req.params.id)
    .then(walk => {
        res.json(walk)
    })
})



module.exports = router