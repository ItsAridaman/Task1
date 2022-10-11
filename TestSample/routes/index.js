var express = require('express');
var router = express.Router();
var user = require('../Models/UserDetail');


/* GET home page. */

router.get('/Home', (req, res) => {
  user.find({}, req.body, (err, result) => {
    console.log("working...");
    console.log(result);
    res.render('Homepage.ejs', { result: result })
  })

  // res.render('Homepage.ejs');
});

router.post('/Addpart1', (req, res) => {
  user.create(req.body, (err, result) => {

    console.log("user created...");
    res.redirect('/Home')


  }
  )

});




module.exports = router;
