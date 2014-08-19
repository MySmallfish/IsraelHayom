(function (S, I) {
    I.CategoryPageController = ["$scope", "$q", "contentService", "$routeParams", function ($scope, $q, contentService, $routeParams) {
        
        $scope.categoryName = decodeURIComponent($routeParams.categoryId);
        
        function load() {
            contentService.getCategoryArticles($scope.categoryName).then(function (items) {
                $scope.categoryArticles = items;
            });
            
            contentService.getCategories().then(function (items) {
                $scope.categories = items;
                var category = _.find($scope.categories, function(iten) { return iten.name === $scope.categoryName });
                $scope.categoryTitle = category.title;
                console.log("??", category, $scope.categories);
            });
        }

        load();

    }];
})(Simple, IsraelHayom);