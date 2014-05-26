(function (S, I) {
    I.EntryPageController = ["$scope", "$q", "$location", function ($scope, $q, $location) {

        $scope.openProfile = function() {
            $location.path("/Profile");
        };

        //function load() {

        //}

        //load();

    }];
})(Simple, IsraelHayom);