// var jwt = require('jsonwebtoken');

// module.exports = {
//     verifyToken: async (req, res, next) => {
//         var token = req.myToken;
//         try {
//             if (token) {
//                 var payload = await jwt.verify(token, "thisisthesecret");
//                 req.user = payload;
//                 if(payload)
//                 {
//                     next();
//                 }
//                 else{
//                     res.send("not permitted to do so...")
//                 }
//              }
//             else {
//                 res.send("Token required")
//             }

//         }
//         catch (error) {
//             console.log(error);
//             next(error);
//         }
//     },

//     userInfo: (req, res, next) => {
//         if(req.session.passport)
//         {
//             var userId=req.session;
//             Admin.findById(userId, (err, result) => {
//                 if (err) console.log(err);
//                 req.userdetail = result;
//                 res.locals.userdetail = result;

//                 next();
//             })
//         }
// }
// }
