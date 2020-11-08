const express = require("express")

const router = express.Router()

router.get('/' , (req, res)=>{
    res.send('this is my backend');
})
router.get('/done' ,  (req, res)=>{
    res.send('authentication done');
})
 
router.get('/notdone',  (req , res) => {
    res.send('authentication not done')
})
 
module.exports = router