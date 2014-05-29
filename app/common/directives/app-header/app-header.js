﻿(function (S, I) {

    I.AppHeaderDirective = [
        function() {
            return {
                restrict: 'E',
                templateUrl: 'app/common/directives/app-header/app-header.html',
                scope: true,
                controller: ["$scope", "$location", "$ionicPopup", function ($scope, $location, $ionicPopup) {

                    $scope.openWeather = function () {
                        $location.path("/Weather");
                    };

                    $scope.openNewsflash = function () {
                        $location.path("/Newsflash");
                    };

                    $scope.openEntryPage = function () {
                        $location.path("/Entry");
                    };
                    
                    $scope.openAboutPage = function () {
                        $location.path("/About");
                    };
                    
                    $scope.openAboutPage = function () {

                        var myPopup = $ionicPopup.show({
                            templateUrl: 'app/common/views/about.html',
                            title: 'אודות',
                            scope: $scope,
                            buttons: [
                              { text: 'סגור' }
                            ]
                        });
                        myPopup.then(function (res) {
                            console.log('Tapped!', res);
                        });

                    };
                    
                }],
                link: function(scope) {
                    // bind clicks...     
                    
                }
            };
        }];

})(Simple, IsraelHayom);