var postArticleBtn = document.getElementById('post-btn');
var postArticleForm = document.getElementById('submit-container');

var removeArticle = function() {
    var removeArticle = document.getElementById('removeArticle');
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("DELETE", "/api/articles/" + removeArticle.childNodes[1].value, true);
    xmlHttp.onerror = function(e) {
        console.error(xmlHttp.statusText)
    }
    xmlHttp.send(null);
}

postArticleBtn.addEventListener('click', function(e) {
    e.preventDefault();
    postArticleForm.style.display = postArticleForm.style.display == "block" ? "none" : "block";
})
