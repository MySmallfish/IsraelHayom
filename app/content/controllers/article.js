(function (S, I) {
    I.ArticleController = [
        "$scope",
        "$q",
        "$location",
        "contentService",
        "userProfileManager",
        "$routeParams",
        "$sanitize",
        "$sce",
        function ($scope, $q, $location, contentService, userProfileManager, $routeParams, $sanitize, $sce) {

        
        function load() {
            contentService.getArticle(articleId).then(function (item) {
                $scope.article = _.clone(item);
                $scope.article.Content = $sce.trustAsHtml($sanitize($scope.article.Content));
            });
            
            userProfileManager.getArticleProfile(articleId).then(function (items) {
                $scope.articleProfile = items;
            });
        }

        $scope.openRating = function (id) {
            $location.path("/Rating/"+ id);
        };
        
        var articleId = $routeParams.id;
        
        load();

    }];
})(Simple, IsraelHayom);