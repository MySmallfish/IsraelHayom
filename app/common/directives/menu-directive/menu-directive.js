﻿(function (S, I) {

    I.MenuDirective = [
        function () {
            return {
                restrict: 'E',
                templateUrl: 'app/common/directives/menu-directive/menu-directive.html',
                scope: {
                    commands: "=",
                    execute: "&"
                },
                controller: ["$scope", "$location", "$ionicPopup", function ($scope, $location, $ionicPopup) {

                    console.log("menu??", $scope);

                }],
                link: function (scope) {
                    // bind clicks...     

                }
            };
        }];

})(Simple, IsraelHayom);