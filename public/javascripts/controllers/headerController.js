// For highlighting current page in navigation menu
var url = window.location.href.split('/').slice(-1)[0];
var homeBtn = document.getElementById('nav1');
var newsBtn = document.getElementById('nav2');

if (url == 'news') {
    newsBtn.className = "navBtnCurrent"
}
else if (url == '') {
    homeBtn.className = "navBtnCurrent"
}
else {
    newsBtn.className = "navBtnCurrent"
}

// For toggling navigation menu on phones
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
