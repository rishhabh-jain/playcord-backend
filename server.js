const express = require('express');
const router = express.Router();
const passport = require('passport')
const connectDB = require('./config/db')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const mongoose = require("mongoose")
const app = express();
connectDB()
//body parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
require('./config/passport')(passport)
const PORT = process.env.PORT || 5000 
app.use(passport.initialize())
app.use(passport.session())
router.get('/' , (req, res)=>{
    res.send('this is my backend');
})
app.use(
  session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
)

app.use('/' , require('./routes/index.js'))
app.use('/auth' ,require('./routes/auth'))
app.use('/authentication' ,require('./routes/authentication'))
app.use('/firstform' , require('./routes/form.js'))

app.listen(
    PORT,
    console.log(`Server running  on port ${PORT}`)
)
  
