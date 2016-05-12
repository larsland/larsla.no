var httpDelete = function(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("DELETE", url, true);
    xmlHttp.onerror = function(e) {
        console.error(xmlHttp.statusText)
    }
    xmlHttp.send(null);
}
