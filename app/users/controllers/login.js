(function (S, I) {
    I.LoginController = ["$scope", "$q", "$location", function ($scope, $q, $location) {

        $scope.openProfile = function () {
            $location.path("/Profile");
        };

        $scope.alertLogin = function (item) {
            alert("התחברת עם " + item);

            $location.path("/");

        };

    }];
})(Simple, IsraelHayom);