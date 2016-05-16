var removeArticle = document.getElementById('removeArticle');
var postArticleBtn = document.getElementById('post-btn');
var postArticleForm = document.getElementById('submit-container');

removeArticle.addEventListener('click', function(e) {
    e.preventDefault();
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("DELETE", "/api/articles/" + e.target.childNodes[1].value, true);
    xmlHttp.onerror = function(e) {
        console.error(xmlHttp.statusText)
    }
    xmlHttp.send(null);
})

postArticleBtn.addEventListener('click', function(e) {
    e.preventDefault();
    postArticleForm.style.display = postArticleForm.style.display == "block" ? "none" : "block";
})
