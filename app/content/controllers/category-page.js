(function (S, I) {
    I.CategoryPageController = ["$scope", "$q", "contentService", "$routeParams", function ($scope, $q, contentService, $routeParams) {
        $scope.categoryName = decodeURIComponent($routeParams.categoryId);
        function load() {
            contentService.getCategoryArticles($scope.categoryName).then(function (items) {
                $scope.categoryArticles = items;
            });
        }

        load();

    }];
})(Simple, IsraelHayom);