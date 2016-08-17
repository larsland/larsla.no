var mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema({
    title: String,
    ingress: String,
    content: String,
    comments: [{
        text: String,
        postedBy: {
            type: mongoose.Schema.Types.Mixed,
            ref: 'User'
        },
        timePosted: Date
    }]
},
{
    timestamps: true
});

mongoose.model('Article', ArticleSchema);
