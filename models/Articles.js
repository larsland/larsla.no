var mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema({
    title: String,
    content: String
},
{
    timestamps: true
});

mongoose.model('Article', ArticleSchema);
