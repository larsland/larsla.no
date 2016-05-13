var postArticleBtn = document.getElementById('post-btn');
var cancelEditArticleBtn = document.getElementById('cancel-edit-btn');
var postArticleForm = document.getElementById('submit-container');
var editArticleForm = document.getElementById('edit-container');

var addListeners = function() {
    cancelEditArticleBtn.addEventListener('click', function(e) {
        e.preventDefault();
        editArticleForm.style.display = "none";
    })
    postArticleBtn.addEventListener('click', function(e) {
        e.preventDefault();
        postArticleForm.style.display = postArticleForm.style.display == "block" ? "none" : "block";
    })

}

window.addEventListener('load', function(e) {
    e.preventDefault();
    addListeners();
})
