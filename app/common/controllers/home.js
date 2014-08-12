(function (S, I) {
    I.HomeController = ["$scope", "$q", "$location", "$timeout", "geoLocation", "contentService", "userProfileService",
        function ($scope, $q, $location, $timeout, geoLocation, contentService, userProfileService) {
            userProfileService.getUserProfile();

            contentService.getApiNewsflash().then(function (items) {
                $scope.newsflash = items;
            });
            
            $scope.newsIndex = 0;
            $scope.newsCount = 10;

            function switchNewsflash() {
                $scope.newsIndex++;
                $scope.newsIndex = $scope.newsIndex % $scope.newsCount;
                $timeout(switchNewsflash, 3000);
            };

            $timeout(switchNewsflash, 3000);

            $scope.isPointSelected = function (pointIndex) {
                var result = false;
                if (pointIndex === $scope.articleIndex) {
                    result = true;
                }

                return result;
            };

            $scope.openNewsflash = function () {
                $location.path("/Newsflash");
            };

            $scope.selectArticle = function (pointIndex) {
                $scope.articleIndex = pointIndex;
                $scope.switchArticle(pointIndex);
            };

            $scope.isSelected = function (article) {
                return $scope.selectedArticle === article;
            };

            $scope.switchArticle = function (index) {
                $scope.selectedArticle = $scope.mainArticles[index];
            };

            $scope.next = function () {

                $scope.articleIndex = $scope.articleIndex >= $scope.mainArticles.length - 1 ? 0 : ++$scope.articleIndex;
                $scope.switchArticle($scope.articleIndex);
            };

            $scope.back = function () {

                $scope.articleIndex = $scope.articleIndex <= 0 ? $scope.mainArticles.length - 1 : --$scope.articleIndex;
                $scope.switchArticle($scope.articleIndex);
            };

            $scope.openArticle = function (article) {
                $location.path("/Article/" + article.Id);
            };

            function load() {

                contentService.getMainArticles().then(function (items) {
                    $scope.mainArticles = items;
                    $scope.articleIndex = 0;
                    $scope.selectedArticle = $scope.mainArticles[$scope.articleIndex];
                    $scope.points = _.range($scope.mainArticles.length);
                });

                contentService.getRecentTitles().then(function (items) {
                    $scope.recentTitles = items;
                });

                geoLocation.get().then(function (items) {
                    $scope.weatherLocation = items;
                });

            }

            load();

        }];
})(Simple, IsraelHayom);