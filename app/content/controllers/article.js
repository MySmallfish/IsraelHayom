(function (S, I) {
    I.ArticleController = ["$scope", "$q", "$location", "contentManager", "userProfileManager", function ($scope, $q, $location, contentManager, userProfileManager) {

        
        function load() {
            contentManager.getArticle(articleId).then(function(item) {
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