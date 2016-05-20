var articleLinks = document.getElementsByName('article-titles')
for (var i = 0; i < articleLinks.length; i++) {
    articleLinks[i].addEventListener('click', function(e) {
        e.preventDefault();
        var id = this.previousSibling.previousSibling.innerHTML
        var link = "/news/" + id;
        location.href="/news/" + id
    })
}
