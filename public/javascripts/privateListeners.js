var postArticleBtn = document.getElementById('post-btn');
var postArticleForm = document.getElementById('submit-container');
var openEditArticleBtn = document.getElementById('open-edit-article-btn');
var editArticleForm = document.getElementById('edit-article-form');

var removeArticleFromPreview = function() {
    var assuranceCheck = window.prompt("Are you sure you want to delete this article?" + '\n\n' + "Type 'yes' for deletion")
    if (assuranceCheck === "yes") {
        var articleToRemove = document.getElementById('removeArticle');
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("DELETE", "/api/articles/" + articleToRemove.childNodes[1].value, true);
        xmlHttp.onerror = function(e) {
            console.error(xmlHttp.statusText)
        }
        xmlHttp.send(null);
    }
}

var removeArticleFromFull = function(id) {
    var assuranceCheck = window.prompt("Are you sure you want to delete this article?" + '\n\n' + "Type 'yes' for deletion")
    if (assuranceCheck === "yes") {
        var xmlHttp2 = new XMLHttpRequest();
        xmlHttp2.open("DELETE", "/api/articles/" + id, true);
        xmlHttp2.onerror = function(e) {
            console.error(xmlHttp.statusText)
        }
        xmlHttp2.send(null);
    }
}

var toggleEditArticleForm = function() {
    editArticleForm.style.display = editArticleForm.style.display == "block" ? "none" : "block";
}

var togglePostArticleForm = function() {
    postArticleForm.style.display = postArticleForm.style.display == "block" ? "none" : "block";
}
