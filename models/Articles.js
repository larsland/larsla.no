var mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema({
    title: String,
    ingress: String,
    content: String
},
{
    timestamps: true
});

mongoose.model('Article', ArticleSchema);
