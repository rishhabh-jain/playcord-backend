const express = require("express")

const router = express.Router()

router.get('/' , (req, res)=>{
    res.send('this is my backend');
})
 
module.exports = router