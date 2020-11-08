const express = require("express")
const { ensureAuth ,ensureGuest} = require('../middleware/auth')
const router = express.Router()

router.get('/' , ensureAuth , (req, res)=>{
    res.send('authentication done');
})
 
module.exports = router