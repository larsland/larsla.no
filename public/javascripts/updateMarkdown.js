var allArticleParagraphs = document.getElementsByName("article-content");
var allCommentParagraphs = document.getElementsByName("comment");

var updateMarkdown = function() {
    for (var i = 0; i < allArticleParagraphs.length; i++) {
        allArticleParagraphs[i].innerHTML = marked(allArticleParagraphs[i].innerHTML);
    }
    if (allCommentParagraphs.length != 0) {
        for (var i = 0; i < allCommentParagraphs.length; i++) {
            allCommentParagraphs[i].innerHTML = marked(allCommentParagraphs[i].innerHTML);
        }
    }
}

window.addEventListener('load', updateMarkdown)
