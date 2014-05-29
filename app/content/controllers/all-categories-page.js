(function (S, I) {
    I.AllCategoriesPageController = ["$scope", "$q", "contentService", function ($scope, $q, contentService) {


        function load() {
            contentService.getCategories().then(function (items) {
                $scope.categories = items;
            });
        }

        load();

    }];
})(Simple, IsraelHayom);