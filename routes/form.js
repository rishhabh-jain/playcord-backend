const express = require("express")
const { ensureAuth ,ensureGuest} = require('../middleware/auth.js')
const FirstForm = require('../models/FirstForm')
const router = express.Router()

router.get('/' ,  (req, res)=>{
    res.send('first form');
})

router.post('/post' , async (req, res) => {
    try {
        //   
        //req.body.user = req.user.id
        await FirstForm.create(req.body)
          res.redirect('/firstform')
        } catch (err) {
          console.error(err)
        //   res.render('error/500')
        }
} )
module.exports = router