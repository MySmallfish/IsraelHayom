(function (S, I) {
    I.CategoryPageController = ["$scope", "$q", "contentService", function ($scope, $q, contentService) {

        function load() {
            contentService.getCategoryArticles().then(function (items) {
                $scope.categoryArticles = items;
            });
        }

        load();

    }];
})(Simple, IsraelHayom);