(function (S, I) {

    I.AppHeaderDirective = [
        function () {
            return {
                restrict: 'E',
                templateUrl: 'app/common/directives/app-header/app-header.html',
                scope: true,
                controller: ["$scope", "$location", "$ionicPopup", function ($scope, $location, $ionicPopup) {

                    var menuPopup, execute = $scope.executeCommand;
                    $scope.executeCommand = function(command, args) {
                        if (menuPopup) {
                            menuPopup.close();
                            execute(command, args);
                        }
                    };
                   

                    $scope.openMenu = function () {
                        menuPopup = $ionicPopup.show({
                            templateUrl: 'app/common/views/menu.html',
                            scope: $scope
                        });
                        menuPopup.then(function (res) {
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