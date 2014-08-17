(function (S, I) {
    I.AllCategoriesPageController = ["$scope", "$q", "contentService", function ($scope, $q, contentService) {

        function load() {
            contentService.getCategories().then(function (items) {
                $scope.categories = _.map(items, function (item) {
                    return _.extend(item, { Url: "#/Category/" + encodeURIComponent(item.Title) });
                });
            });
        }

        load();

    }];
})(Simple, IsraelHayom);