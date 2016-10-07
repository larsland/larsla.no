var express = require('express');
var passport = require('passport');
var mongoose = require('mongoose');
var User = require('../models/User');
var Article = mongoose.model('Article');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    Article.find({}, function(err, articles) {
        if (err) {
            return next(err);
        }
        res.render('index', {
            title: 'larsla:home',
            user: req.user,
            articles: articles.reverse().slice(0, 5)
        })
    })
});

/* GET news page. */
router.get('/news', function(req, res, next) {
    Article.find({}, function(err, articles) {
        if (err) {
            return next(err);
        }
        res.render('news', {
            title: 'larsla:news',
            user: req.user,
            articles: articles.reverse()
        })
    })
})

/* GET news/article page. */
router.get('/news/:_id', function(req, res, next) {
    Article.findById(req.params._id, function(err, article) {
        if (err) {
            return next(err);
        }
        res.render('article', {
            title: 'larsla:news',
            user: req.user,
            article: article
        })
    })
})

/* GET cv page. */
router.get('/cv', function(req, res, next){
    res.render('cv', {
        title: 'larsla:cv'
    })
})

/* GET undass page. */
router.get('/undass', function(req, res, next) {
    res.render('undass', {
        title: 'larsla:undass'
    })
});

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

// GET all comments for a single article
router.get("/api/articles/:_id/comments", function(req, res, next) {
    Article.findById(req.params._id, function(err, article) {
        if (err) {
            res.send(err);
        }
        res.json(article.comments);
    })
})

/* POST a new article */
router.post('/api/articles', function(req, res, next) {
  var article = new Article(req.body);

  if ((req.user.isAdmin) && (req.isAuthenticated())) {
      article.save(function(err, article){
        if(err){
            return next(err);
        }
        res.json(article);
      });
  }
  else {console.log("Not authorized")}
});

/* PUT changes to an article */
router.put('/api/articles/:_id', function(req, res) {
    if ((req.user.isAdmin) && (req.isAuthenticated())) {
        Article.findById(req.params._id, function(err, article) {
            if (err) {
                res.send(err);
            }
            article.title = req.body.title;
            article.ingress = req.body.ingress;
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

// POST a new comment
router.post('/api/articles/:_id/comments', function(req, res, next) {
    Article.update({_id: req.params._id},
        {
            "$push": {
                comments: {
                    text: req.body.text,
                    postedBy: req.user,
                    timePosted: req.body.timePosted
                }
            }
        },
        {
            new: true
        }).exec(function(error, article) {
            if (error) {
                return res.status(400).send({message: "Failed to add comment!"});
            }
            return res.status(200).send(article);
        });
    });

// DELETE a comment
router.post("/api/articles/:_id/comments/:_id", function(req, res, next) {
    Article.update(
        { _id: req.body.articleId },
        { "$pull": { comments: { _id: req.body.commentId }}},
        { safe: true }
    ).exec(function(err, data) {
        if (err) {
            return res.send("err");
        }
        else {
            return res.send("success");
        }

    });
});

/* DELETE a single article */
router.delete('/api/articles/:_id', function(req, res) {
    if ((req.user.username === 'lille') && (req.isAuthenticated())) {
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


router.get('/register', function(req, res) {
    res.render('register', {
        title: 'register',
        user: req.user
    });
});

router.get('/registerAdmin', function(req, res) {
    res.render('registerAdmin', {
        title: 'registerAdmin',
        user: req.user
    });
});

router.post('/register', function(req, res) {
    User.register(new User({
        username : req.body.username,
        name: req.body.name,
        surname: req.body.surname
    }), req.body.password, function(err, User) {
        if (err) {
            return res.render('register', { User : User });
        }
        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
});

router.post('/registerAdmin', function(req, res) {
    if (req.body.adminKey === "05molaand") {
        User.register(new User({
            username : req.body.username,
            name: req.body.name,
            surname: req.body.surname,
            isAdmin: true,
        }), req.body.password, function(err, User) {
            if (err) {
                return res.render('register', { User : User });
            }
            passport.authenticate('local')(req, res, function () {
                res.redirect('/');
            });
        });
    }
    else {
        console.log("Error, invalid key")
    }
});



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
