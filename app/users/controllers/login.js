(function (S, I) {
    I.LoginController = ["$scope", "$q", "$location", function ($scope, $q, $location) {

        $scope.openProfile = function() {
            $location.path("/Profile");
        };

    }];
})(Simple, IsraelHayom);