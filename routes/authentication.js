const express = require("express")
const { ensureAuth ,ensureGuest} = require('../middleware/auth')
const router = express.Router()

router.get('/done' , ensureAuth , (req, res)=>{
    res.send('authentication done');
})
 
router.get('/notdone',ensureGuest ,  (req , res) => {
    res.send('authentication not done')
})
module.exports = router