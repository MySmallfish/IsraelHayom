(function (S,I) {
    I.HomeController = ["$scope", "$q", "$location", "contentManager", function ($scope, $q, $location, contentManager) {

        $scope.isPointSelected = function(pointIndex) {
            var result = false;
            if (pointIndex === $scope.articleIndex) {
                result = true;
            }
            
            return result;
        };

        $scope.selectArticle = function (pointIndex) {
            $scope.articleIndex = pointIndex;
            $scope.switchArticle(pointIndex);
        };

        $scope.isSelected = function(article) {
            return $scope.selectedArticle === article;
        };

        $scope.switchArticle = function (index) {
            $scope.selectedArticle = $scope.mainArticles[index];
        };

        $scope.next = function() {

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

            contentManager.getMainArticles().then(function (items) {
                $scope.mainArticles = items;
                $scope.articleIndex = 0;
                $scope.selectedArticle = $scope.mainArticles[$scope.articleIndex];
                $scope.points = _.range($scope.mainArticles.length);
            });

        }

        load();

    }];
})(Simple, IsraelHayom);