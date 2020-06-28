const express = require('express')
const db = require('../db/db')
const router = express.Router()


router.get('/walks', (req, res) => {
    console.log("in route function")
    db.getWalks()
    .then(walks => {
        console.log(walks)
    })
})



module.exports = router