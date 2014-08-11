(function (S, I) {

    I.AppHeaderDirective = [
        function () {
            return {
                restrict: 'E',
                templateUrl: 'app/common/directives/app-header/app-header.html',
                scope: true,
                controller: ["$scope", "$location", "popupService", function ($scope, $location, popupService) {

                    var menuPopup, execute = $scope.executeCommand;
                    $scope.executeCommand = function (command, args) {
                        if (menuPopup) {
                            menuPopup.close();
                            execute(command, args);
                        }
                    };

                    $scope.closeMenu = function() {
                        menuPopup.close();
                    };

                    $scope.openMenu = function () {
                        menuPopup = popupService.openPopup({
                            templateUrl: 'app/common/views/menu.html',
                            scope: $scope
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