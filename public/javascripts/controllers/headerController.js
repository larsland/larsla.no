angular.module("larsla").controller("HeaderController", ["$scope", function($scope) {

    $scope.showMobileMenu = false;

    $scope.highlightCurrentNavButton = function() {
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
    }

    $scope.toggleMobileMenu = function() {
        $scope.showMobileMenu = !$scope.showMobileMenu;
    }
}]);
