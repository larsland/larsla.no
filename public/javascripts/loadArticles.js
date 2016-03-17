function loadAllArticles() {
    var titles = []
    var container = document.getElementById('articlesContainer')

    var httpGet = function(url, callback) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", url, true);
        xmlHttp.onload = function(e) {
            if (xmlHttp.readyState === 4) {
                if (xmlHttp.status === 200) {
                    callback(JSON.parse(xmlHttp.responseText).reverse())
                } else {
                    console.error(xmlHttp.statusText);
                }
            }
        }
        xmlHttp.onerror = function(e) {
            console.error(xmlHttp.statusText)
        }
        xmlHttp.send(null);
    }

    var renderArticles = function(allArticles) {
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

    httpGet('/api/articles', renderArticles)
}

window.addEventListener('load', loadAllArticles);
