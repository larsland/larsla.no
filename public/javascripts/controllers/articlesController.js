angular.module("larsla").controller("ArticlesController", ["$scope", "$http", function($scope, $http) {

    $scope.showPostArticleForm = false;

    $scope.loadArticles = function() {
        $http.get("/api/articles").then(function(res) {
            $scope.articles = res.data
        });
    }

    $scope.togglePostArticleForm = function() {
        $scope.showPostArticleForm = !$scope.showPostArticleForm;
    }

    $scope.deleteArticle = function(id) {
        var assuranceCheck = window.prompt("Are you sure you want to delete this article?" + '\n\n' + "Type 'yes' for deletion")
        if (assuranceCheck === "yes") {
            $http.delete("/api/articles/" + id).then(function(res) {
                $scope.loadArticles();
            })
        }
    }

    $scope.postArticle = function() {
        var article = {
            title: $scope.title,
            ingress: $scope.ingress,
            content: $scope.content
        }
        $http.post("/api/articles", article).then(function(res) {
            $scope.loadArticles();
        });
    }

}]);
