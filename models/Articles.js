var mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema({
    title: String,
    content: String
});

mongoose.model('Article', ArticleSchema);
