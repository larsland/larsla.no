var menuBtn = document.getElementById('menu-btn');
var menuTab = document.getElementById('menu-tab');
var allMenuLinks = menuTab.childNodes;

var toggleMenu = function() {
    menuTab.style.height = menuTab.style.height == "400px" ? "0px" : "400px";
    var counter = 1;
    for (var i = 0; i < allMenuLinks.length; i++) {

        if (counter % 2 === 0) {
            console.log(allMenuLinks[i])
            allMenuLinks[i].style.opacity = allMenuLinks[i].style.opacity == "1" ? "0" : "1";
        }
        counter += 1

    }
}
