(function (S, I) {
    I.RatingController = ["$scope", "$q", "contentService", function ($scope, $q, contentService) {


        function load() {
            contentService.getApiArticleRating().then(function (items) {
                $scope.articleRating = translate(items);

                $scope.ratersNumber = $scope.articleRating[0].value + $scope.articleRating[1].value;
            });
            
        }

        function translate(items) {
            return _.map(items, function (item) {
                var mappedItem = {
                    title: item.title,
                    value: item.value
                };
                return mappedItem;
            });
        }

        load();

    }];
})(Simple, IsraelHayom);