(function (S, I) {
    I.profileController = ["$scope", "$q", "$filter", "userProfileService", "contentService", function ($scope, $q, $filter, userProfileService, contentService) {

        function load() {

            userProfileService.getUserProfile().then(function (item) {
                if (!$scope.data) {
                    $scope.data = {};
                }
                $scope.data.fontSize = item.FontSize;

                contentService.getCategories().then(function (items) {
                    $scope.categories = items;

                    
                });

            });
        }

        $scope.saveFontSize = function () {
            userProfileService.saveUserProfile({ FontSize: $scope.data.fontSize });
        };

        $scope.savePreferredCategories = function () {
            var rankings = {};
            _.each($scope.categories, function (item, index) {
                rankings[item.name] = index + 1;
            });
            
            userProfileService.saveUserProfile({ PreferredCategories: rankings });
        };

        $scope.moveItem = function (item, fromIndex, toIndex) {
            $scope.categories.splice(fromIndex, 1);
            $scope.categories.splice(toIndex, 0, item);

            $scope.savePreferredCategories();
        };

        load();

    }];
})(Simple, IsraelHayom);