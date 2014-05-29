(function (S, I) {
    I.ArticleController = ["$scope", "$q", "$location", "contentService", "userProfileManager", function ($scope, $q, $location, contentService, userProfileManager) {

        
        function load() {
            contentService.getArticle(articleId).then(function (item) {
                $scope.article = item;
            });
            
            userProfileManager.getArticleProfile(articleId).then(function (items) {
                $scope.articleProfile = items;
            });
        }

        $scope.openRating = function (id) {
            $location.path("/Rating/"+ id);
        };
        
        var articleId = 2;
        
        load();

    }];
})(Simple, IsraelHayom);