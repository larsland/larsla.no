function loadAllArticles(callback) {
    var titles = []
    var container = document.getElementById('articlesContainer')

    function httpGet(url) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", url, false ); // false for synchronous request
        xmlHttp.send( null );
        return xmlHttp.responseText;
    }

    var allArticles = JSON.parse(httpGet("/api/articles")).reverse();

    for (var i = 0; i < allArticles.length; i++) {
        var div = document.createElement("DIV");
        var p = document.createElement("P");
        var h3 = document.createElement("H2");
        var line = document.createElement("DIV");

        var title = allArticles[i].title
        var content = allArticles[i].content

        h3.innerHTML = title;
        h3.className = "article-title";
        h3.id = 'title'+i
        h3.name = 'article-title';
        p.innerHTML = marked(content);
        p.id = 'content'+i
        line.className = "horizontal-line";

        div.appendChild(h3);
        div.appendChild(line);
        div.appendChild(p);
        div.className = "article box-shadow borderBox";
        container.appendChild(div);
    }
}

window.addEventListener('load', loadAllArticles);
