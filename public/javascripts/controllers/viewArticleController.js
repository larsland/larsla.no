angular.module("larsla").controller("ViewArticleController", ["$scope", "$http", "$location", function($scope, $http, $location) {

    $scope.showEditArticleForm = false;

    $scope.toggleEditArticleForm = function() {
        $scope.showEditArticleForm = !$scope.showEditArticleForm;
    }

    $scope.fillEditArticleForm = function(id) {
        $http.get("/api/articles/" + id).then(function(res) {
            $scope.title = res.data.title;
            $scope.ingress = res.data.ingress;
            $scope.content = res.data.content;
        })
    }

    $scope.renderMarkdown = function() {
        $scope.article.content = marked($scope.article.content);
        var comments = $scope.article.comments;

        for (var i = 0; i < comments.length; i++) {
            comments[i].text = marked(comments[i].text);
        }
    }

    $scope.highLightCode = function() {
        marked.setOptions({
            highlight: function (code) {
                return hljs.highlightAuto(code).value;
            }
        });
        marked.defaults.langPrefix = "hljs lang-"
    }

    $scope.updateArticle = function(id) {
        $http.get("/api/articles/" + id).then(function(res) {
            $scope.article = res.data;
            $scope.renderMarkdown($scope.initHighlight);
        })
    }

    $scope.postComment = function(id) {
        var comment = {
            text: $scope.commentText,
            postedBy: "me",
            timePosted: Date.now()
        }
        $http.post("/api/articles/" + id + "/comments", comment).then(function(res) {
            $scope.updateArticle(id);
            $scope.commentText = "";
        })
    }

    $scope.editArticle = function(id) {
        updatedArticle = {
            title: $scope.title,
            ingress: $scope.ingress,
            content: $scope.content
        }

        $http.put("/api/articles/" + id, updatedArticle).then(function(res) {
            $scope.updateArticle(id);
        })
    }

    $scope.removeArticle = function(id) {
        var assuranceCheck = window.prompt("Are you sure you want to delete this article?" + '\n\n' + "Type 'yes' for deletion")
        if (assuranceCheck === "yes") {
            $http.delete("/api/articles/" + id).then(function(res) {
                window.location = "/news";
            });
        }
    }

}]);
