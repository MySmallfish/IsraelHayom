(function (S, I) {
    I.AllCategoriesPageController = ["$scope", "$q", "contentService", function ($scope, $q, contentService) {


        function load() {
            contentService.getCategories().then(function (items) {
                $scope.categories = _.map(items, function (item) {
                    return _.extend(item, { Url: "#/Category/" + encodeURIComponent(item.Title) });
                });
                console.log("111", $scope.categories);
            });

            //contentService.getTopRatedCategoryArticles().then(function (items) {
            //    $scope.topCategories = items;
            //    console.log("222", $scope.topCategories);
            //});
        }

        load();

    }];
})(Simple, IsraelHayom);