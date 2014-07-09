(function (S, I) {
    I.ArticleController = [
        "$scope",
        "$q",
        "$location",
        "contentService",
        "userProfileManager",
        "popupService",
        "$routeParams",
        "$sanitize",
        "$sce",
        function ($scope, $q, $location, contentService, userProfileManager, popupService, $routeParams, $sanitize, $sce) {

        
        function load() {
            contentService.getArticle(articleId).then(function (item) {
                $scope.article = _.clone(item);
                $scope.article.Content = $sce.trustAsHtml($sanitize($scope.article.Content));
                
            });
            
            userProfileManager.getArticleProfile(articleId).then(function (items) {
                $scope.articleProfile = items;
                console.log("??", items);

            });
        }
        
        $scope.openRating = function (id) {
            menuPopup = popupService.openPopup({
                templateUrl: 'app/content/views/rating.html',
                scope: $scope
            });
        };
        
        var articleId = $routeParams.id;
        
        load();

    }];
})(Simple, IsraelHayom);