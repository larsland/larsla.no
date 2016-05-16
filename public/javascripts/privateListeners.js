var removeArticle = document.getElementById('removeArticle');
var postArticleBtn = document.getElementById('post-btn');
var postArticleForm = document.getElementById('submit-container');
var editArticle = document.getElementById('editArticle');
var cancelEditArticleBtn = document.getElementById('cancel-edit-btn');

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

editArticle.addEventListener('click', function(e) {
    e.preventDefault();
    var editForm = document.getElementById('edit-container');
    editForm.style.display = editForm.style.display == "block" ? "none" : "block";
})
cancelEditArticleBtn.addEventListener('click', function(e) {
    e.preventDefault();
    var editArticleForm = document.getElementById('edit-container');
    editArticleForm.style.display = "none";
})

var hideEditArticleContainer = function() {
    var editForm = document.getElementById('edit-container');
    editForm.style = "none";
}
