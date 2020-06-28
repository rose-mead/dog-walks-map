const express = require('express')
const db = require('../db/db')
const router = express.Router()


router.get('/walks', (req, res) => {
    db.getWalks()
    .then(walks => {
        console.log(walks)
        res.json(walks)
    })
})



module.exports = router