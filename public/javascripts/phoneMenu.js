var menuBtn = document.getElementById('menu-btn');
var menuTab = document.getElementById('menu-tab');
var allMenuLinks = menuTab.childNodes;

var toggleMenu = function() {
    menuTab.style.height = menuTab.style.height == "400px" ? "0px" : "400px";
    var counter = 1;
    for (var i = 0; i < allMenuLinks.length; i++) {
        if (counter % 2 === 0) {
            allMenuLinks[i].style.display = allMenuLinks[i].style.display == "block" ? "none" : "block";
        }
        counter += 1
    }
}
