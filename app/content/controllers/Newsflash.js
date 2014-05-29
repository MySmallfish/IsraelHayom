(function (S, I) {
    I.NewsflashController = ["$scope", "$q", "contentService", function ($scope, $q, contentService) {


        function load() {
            contentService.getApiNewsflash().then(function (items) {
                $scope.newsflash = items;
            });
        }

        load();

    }];
})(Simple, IsraelHayom);