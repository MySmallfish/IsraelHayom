(function (S, I) {
    I.NewsflashController = ["$scope", "$q", "contentManager", function ($scope, $q, contentManager) {


        function load() {
            contentManager.getApiNewsflash().then(function (items) {
                $scope.newsflash = items;
            });
        }

        load();

    }];
})(Simple, IsraelHayom);