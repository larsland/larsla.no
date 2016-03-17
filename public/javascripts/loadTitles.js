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
            var h3 = document.createElement("H2");

            var title = allArticles[i].title

            h3.innerHTML = title;
            h3.className = "article-title";
            h3.id = 'title'+i
            h3.name = 'article-title';

            div.appendChild(h3);
            div.className = "article box-shadow borderBox pointer";
            div.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = "/news"
            })
            container.appendChild(div);
        }
    }

    httpGet('/api/articles', renderArticles)
}

window.addEventListener('load', loadAllArticles);
