(function (S, I) {

    I.AppHeaderDirective = [
        function () {
            return {
                restrict: 'E',
                templateUrl: 'app/common/directives/app-header/app-header.html',
                scope: true,
                controller: ["$scope", "$location", "$ionicPopup", function ($scope, $location, $ionicPopup) {

                    $scope.openMenu = function () {
                        console.log("COMMANDS ", $scope.contextMenuCommands);
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

                    //$scope.openEntryPage = function () {
                    //    $location.path("/Entry");
                    //};

                    //$scope.openAboutPage = function () {

                    //    var myPopup = $ionicPopup.show({
                    //        templateUrl: 'app/common/views/about.html',
                    //        title: 'אודות',
                    //        scope: $scope,
                    //        buttons: [
                    //          { text: 'סגור' }
                    //        ]
                    //    });
                    //    myPopup.then(function (res) {
                    //        console.log('Tapped!', res);
                    //    });

                    //};
                    console.log("com",$scope);
                    $scope.setupContextMenuCommands();

                }],
                link: function (scope) {
                    // bind clicks...     

                }
            };
        }];

})(Simple, IsraelHayom);