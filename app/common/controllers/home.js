(function (S, I) {
    I.HomeController = ["$scope", "$q", "$location", "$filter", "$timeout", "geoLocation", "contentService", "userProfileService",
        function ($scope, $q, $location, $filter, $timeout, geoLocation, contentService, userProfileService) {

            //userProfileService.saveUserProfile({FontSize:7, RecentArticleLocation:7}, "shir");


            function load() {

                userProfileService.getUserProfile().then(function (item) {
                    var firstEntryIndicator = userProfileService.getFirstEntryIndicator();
                    if (firstEntryIndicator) {
                        if (item.RecentArticle) {
                            var id = parseInt(item.RecentArticle);
                            $location.path("/Article/" + id);
                        }
                    } else {
                        userProfileService.saveUserProfile({ RecentArticle: null, RecentArticleLocation: 0 });
                    }
                });

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

                contentService.getCategories().then(function (items) {
                    $scope.categories = $filter('limitTo')(_.map(items, function (item) {
                        return _.extend(item, { Url: "#/Category/" + encodeURIComponent(item.name) });
                    }), 6);
                });

                contentService.getApiNewsflash().then(function (items) {
                    $scope.newsflash = items;
                });

            }


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



            load();

        }];
})(Simple, IsraelHayom);