var express = require('express');
var passport = require('passport');
var mongoose = require('mongoose');
var User = require('../models/User');
var Article = mongoose.model('Article');
var fs = require('fs');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'larsla:news',
      user: req.user
  });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
    res.render('about', {
        title: 'larsla:about',
        user: req.user
    })
})

/* GET news page. */
router.get('/news', function(req, res, next) {
    res.render('news', {
        title: 'larsla:news',
        user: req.user
    })
})

/* GET cv page. */
router.get('/cv', function(req, res, next){
    res.render('cv', {
        title: 'larsla:cv'
    })
})

/* GET all articles */
router.get('/api/articles', function(req, res, next) {
    Article.find(function(err, articles){
        if(err) {
            return next(err);
        }
        res.json(articles);
    })

})

/* POST a new article */
router.post('/api/articles', function(req, res, next) {
  var article = new Article(req.body);

  article.save(function(err, article){
    if(err){
        return next(err);
    }
    res.json(article);
  });
});


/*---------------------User authentication---------------------------*/

/*
router.get('/register', function(req, res) {
    res.render('register', {
        title: 'register'
    });
});




router.post('/register', function(req, res) {
    User.register(new User({ username : req.body.username }), req.body.password, function(err, User) {
        if (err) {
            return res.render('register', { User : User });
        }
        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
});
*/

router.get('/login', function(req, res) {
    res.render('login', {
        title: 'login',
        user : req.user
     });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});


module.exports = router;
