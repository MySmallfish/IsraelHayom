(function (S, I) {
    I.ArticleController = ["$scope", "$q", "contentManager", "userProfileManager", function ($scope, $q, contentManager, userProfileManager) {

        
        function load() {
            contentManager.getArticle(articleId).then(function(item) {
                $scope.article = item;
            });
            
            userProfileManager.getArticleProfile(articleId).then(function (items) {
                $scope.articleProfile = items;
            });
        }

        var articleId = 2;
        
        load();

    }];
})(Simple, IsraelHayom);