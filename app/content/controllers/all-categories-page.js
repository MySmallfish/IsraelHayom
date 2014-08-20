(function (S, I) {
    I.AllCategoriesPageController = ["$scope", "$q", "contentService", "userProfileService", function ($scope, $q, contentService, userProfileService) {

        function load() {
            userProfileService.saveUserProfile({ RecentArticle: null, RecentArticleLocation: 0 });
            
            contentService.getCategories().then(function (items) {
                $scope.categories = _.map(items, function (item) {
                    return _.extend(item, { Url: "#/Category/" + encodeURIComponent(item.name) });
                });
            });
        }

        load();

    }];
})(Simple, IsraelHayom);