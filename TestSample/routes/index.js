var express = require('express');
var router = express.Router();
var users = require('../Models/UserDetail');
var admin = require('../Models/AdminDetails');



router.get('/Home', (req, res) => {
  res.render('Homepage.ejs')
})

router.get('/signup', (req, res) => {
  var error = req.flash('error')[0];
  console.log(error);
  return res.render('signup.ejs', { error });
})

router.post('/signup', (req, res) => {
  if (req.body.password === req.body.confirmpassword) {
    admin.create(req.body, (err, success) => {
      if (err) console.log(err);
      console.log(req.body);
      console.log(req.body);
      console.log("user created successfully");
      res.redirect('/login')
    })
  }
  else {
    req.flash('error', 'Passwords mismatch');
    return res.redirect('/signup');
  }

})

router.get('/login', (req, res) => {
  var error = req.flash('error')[0];
  console.log(error);
  return res.render('login.ejs', { error });
})

router.post('/login', (req, res) => {
  console.log("running now")
  var { email, password } = req.body;
  if (!email || !password) {
    req.flash('error', 'Email/Password required');
    console.log("running now 1")
    return res.redirect('/login');
  }
  admin.findOne({ email }, (err, user) => {
    console.log("working 1");
    if (err) return next(err);
    if (!user) {
      console.log("working 2");

      req.flash('error', 'No admin found with this email');

      return res.redirect('/login');
    }
    if (user) {
      console.log("working 3");

      // var authorise = user.verifypassword(password)
      // if (!authorise) {
      //   return res.redirect('/Adminpanel')
      // }

      if ((user.password) == password) {
        console.log("password match")
        var token = user.signToken();
        console.log(token)
        res.redirect('/Adminpanel')

      }
      else {
        console.log("working 5");
        req.flash('error', 'Wrong password');
        return res.redirect('/login');
      }
    }
  });
});

router.get('/AdminPanel', (req, res) => {
  users.find({}, (err, result) => {
    res.render('AdminPanel.ejs', { result: result });

  })
})

router.get('/createUser', (req, res) => {
  res.render('createUser.ejs');
})

router.post('/createUser', (req, res) => {
  users.create(req.body, (err, success) => {
    if (err) console.log(err);
    console.log(req.body);
    console.log("user created successfully");
    res.redirect('/AdminPanel')
  })
})


router.get('/:id/editUser', (req, res) => {
  console.log(req.params.id);
  var id = req.params.id;
  users.findById(id, (err, result) => {
    console.log(result)
    res.render('editUser.ejs', { result });
  })
});

router.post('/:id/editUser', (req, res) => {
  console.log("its working now")
  var id = req.params.id;
  users.findByIdAndUpdate(id, req.body, (err, result) => {
    res.redirect('/AdminPanel');
  })
});

router.get('/:id/deleteUser', (req, res) => {
  var id = req.params.id;
  users.findByIdAndDelete(id, (err, result) => {
    res.redirect('/AdminPanel');
  })
})

router.get('/logout', (req, res) => {
  res.clearCookie('connect-sid');
  res.redirect('/Home');
});


router.get('/dashboard/filter', (req, res) => {

  var username = req.query.username;
  console.log(username);
  users.find({ firstname: new RegExp(username, 'i') }, (err, result) => {
    console.log("go go");
    console.log(result);
    if (err) console.log(err);
    return res.render('AdminPanel.ejs', { result: result });
  }
  )
})





module.exports = router;
