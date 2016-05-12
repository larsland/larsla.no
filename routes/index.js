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
      title: 'larsla:home',
      user: req.user
  });
});

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

/* GET a single article */
router.get('/api/articles/:_id', function(req, res, next) {
    Article.findById(req.params._id, function(err, article) {
        if (err) {
            res.send(err);
        }
        res.json(article);
    })
})

/* POST a new article */
router.post('/api/articles', function(req, res, next) {
  var article = new Article(req.body);
  if (req.isAuthenticated()) {
      article.save(function(err, article){
        if(err){
            return next(err);
        }
        res.json(article);
      });
  }
  else {console.log("Not authorized")}
});

/* PUT an article */
router.put('/api/articles/:_id', function(req, res) {
    if (req.isAuthenticated()) {
        Article.findById(req.params._id, function(err, article) {
            if (err) {
                res.send(err);
            }
            article.title = req.body.title;
            article.content = req.body.content;
            article.save(function(err) {
                if (err) {
                    res.send(err);
                }
                res.json({ message: 'Article updated!'})
            })
        })
    }
    else {console.log("Not authenticated")}

})

/* DELETE a single article */
router.delete('/api/articles/:_id', function(req, res) {
    if (req.isAuthenticated()) {
        Article.remove({_id: req.params._id},
            function(err, article) {
                if (err) {
                    res.end(err);
                }
            res.json({ message: 'Successfully deleted!'})
        })
    }
    else {console.log("Not authorized")}
})




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
        title: 'larsla:login',
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
