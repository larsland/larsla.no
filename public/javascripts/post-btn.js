var postArticleBtn = document.getElementById('post-btn');
var postArticleForm = document.getElementById('submit-container');

postArticleBtn.addEventListener('click', function(e) {
    e.preventDefault();
    postArticleForm.style.display = postArticleForm.style.display == "block" ? "none" : "block";
})
