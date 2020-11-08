const express = require("express")
const ensureFilled = require('../middleware/form.js')
const router = express.Router()

router.get('/' , ensureFilled, (req, res)=>{
    res.send('home page ');
})
module.exports = router