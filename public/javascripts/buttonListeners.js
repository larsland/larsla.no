var cancelEditArticleBtn = document.getElementById('cancel-edit-btn');
var editArticleForm = document.getElementById('edit-container');

var addListeners = function() {
    cancelEditArticleBtn.addEventListener('click', function(e) {
        e.preventDefault();
        editArticleForm.style.display = "none";
    })


}

window.addEventListener('load', function(e) {
    e.preventDefault();
    addListeners();
})
