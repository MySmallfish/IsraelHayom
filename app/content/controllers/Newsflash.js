(function (S, I) {
    I.NewsflashController = ["$scope", "$q", "contentService", function ($scope, $q, contentService) {


        function load() {
            contentService.getApiNewsflash().then(function (items) {
                $scope.newsflash = items;
                console.log("!!!", $scope.newsflash);
            });
        }

        load();

    }];
})(Simple, IsraelHayom);