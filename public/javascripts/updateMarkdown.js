var allArticleParagraphs = document.getElementsByName("article-content");

var updateMarkdown = function() {
    for (var i = 0; i < allArticleParagraphs.length; i++) {
        allArticleParagraphs[i].innerHTML = marked(allArticleParagraphs[i].innerHTML);
    }
}

window.addEventListener('load', updateMarkdown)
