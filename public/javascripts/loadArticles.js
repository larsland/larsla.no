function loadAllArticles() {
    var titles = []
    var container = document.getElementById('articlesContainer')

    // Make the ajax call to get all articles
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

    // Creates the HTML for each article and fills it with the json data
    var renderArticles = function(allArticles) {
        for (var i = 0; i < allArticles.length; i++) {
            var div = document.createElement("DIV");
            var p = document.createElement("P");
            var h3 = document.createElement("H2");
            var line = document.createElement("DIV");
            var remove = document.createElement("A");
            var edit = document.createElement("A");
            var hiddenId = document.createElement("INPUT");
            var id = allArticles[i]._id;

            var title = allArticles[i].title
            var content = allArticles[i].content

            h3.innerHTML = title;
            h3.className = "article-title";
            h3.id = 'title'+i
            h3.name = 'article-title';
            p.innerHTML = marked(content);
            p.id = 'content'+i
            line.className = "horizontal-line";
            hiddenId.type = "hidden";
            hiddenId.value = id;
            remove.innerHTML = "delete";
            remove.className = "right space-left"
            remove.href ="";
            remove.appendChild(hiddenId)
            edit.innerHTML ="edit";
            edit.className = "right";
            edit.href="";

            remove.addEventListener('click', function(e) {
                e.preventDefault();
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.open("DELETE", "/api/articles/" + e.target.childNodes[1].value, true);
                xmlHttp.onerror = function(e) {
                    console.error(xmlHttp.statusText)
                }
                xmlHttp.send(null);
            })

            edit.addEventListener('click', function(e) {
                e.preventDefault();
                var form = document.getElementById('edit-container');
                var editTitleField = document.getElementById('editTitleField');

                console.log(e.target.nextSibling.innerHTML)
                form.style.display = form.style.display == "block" ? "none" : "block";
                editTitleField.innerHTML = e.target.nextSibling.innerHTML
            })

            div.appendChild(remove);
            div.appendChild(edit);
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
