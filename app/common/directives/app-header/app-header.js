(function (S, I) {

    I.AppHeaderDirective = [
        function() {
            return {
                restrict: 'E',
                templateUrl: 'app/common/directives/app-header/app-header.html',
                scope: true,
                controller: ["$scope", "$location", function ($scope, $location) {

                    $scope.openWeather = function () {
                        $location.path("/Weather");
                    };

                    $scope.openNewsflash = function () {
                        $location.path("/Newsflash");
                    };

                    $scope.openEntryPage = function () {
                        $location.path("/Entry");
                    };

                }],
                link: function(scope) {
                    // bind clicks...     
                    
                }
            };
        }];

})(Simple, IsraelHayom);