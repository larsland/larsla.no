function loadAllArticles(callback) {
    var titles = []
    var container = document.getElementById('articlesContainer')

    function httpGet(url) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", url, false ); // false for synchronous request
        xmlHttp.send( null );
        return xmlHttp.responseText;
    }

    var allArticles = JSON.parse(httpGet("/api/articles")).reverse().slice(0, 3);

    for (var i = 0; i < allArticles.length; i++) {
        var div = document.createElement("DIV");
        var h3 = document.createElement("H2");

        var title = allArticles[i].title

        h3.innerHTML = title;
        h3.className = "article-title";
        h3.id = 'title'+i
        h3.name = 'article-title';

        div.appendChild(h3);
        div.className = "article box-shadow borderBox";
        container.appendChild(div);
    }
}

window.addEventListener('load', loadAllArticles);
