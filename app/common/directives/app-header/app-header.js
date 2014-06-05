(function (S, I) {

    I.AppHeaderDirective = [
        function () {
            return {
                restrict: 'E',
                templateUrl: 'app/common/directives/app-header/app-header.html',
                scope: true,
                controller: ["$scope", "$location", "$ionicPopup", function ($scope, $location, $ionicPopup) {

                    $scope.openMenu = function () {
                        var myPopup = $ionicPopup.show({
                            templateUrl: 'app/common/views/menu.html',
                            title: 'תפריט',
                            scope: $scope,
                            buttons: [
                              { text: 'סגור' }
                            ]
                        });
                        myPopup.then(function (res) {
                            console.log('Tapped!', res);
                        });
                    };

                    $scope.openWeather = function () {
                        $location.path("/Weather");
                    };

                    $scope.openNewsflash = function () {
                        $location.path("/Newsflash");
                    };

                    $scope.setupContextMenuCommands();

                }],
                link: function (scope) {
                    // bind clicks...     

                }
            };
        }];

})(Simple, IsraelHayom);