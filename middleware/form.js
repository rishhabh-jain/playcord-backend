const FirstForm = require('../models/FirstForm')

const ensureFilled = async function (req, res, next)  {
  try{
   let user = await FirstForm.findOne({ user : req.user._id })
   if (user) {
     return next()
   } else {
     res.redirect('/done')
   }
  }
  catch(err){
     console.log(err)
  }
}

module.exports = ensureFilled
// module.exports = {
//     ensureFilled: async function (req, res, next)  {
//        try{
//         let user = await FirstForm.findOne({ user : req.user._id })
//         if (user) {
//           return next()
//         } else {
//           res.redirect('/authentication/notdone')
//         }
//        }
//        catch(err){
//           console.log(err)
//        }
//     },
//     ensureNotFilled: function (req, res, next) {
//       let user = await FirstForm.findOne({ user : req.user._id })
//       if (!user) {
//         return next();
//       } else {
//         res.redirect('/authentication/done');
//       }
//     },
//   }