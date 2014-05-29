(function (S, I) {

    I.MenuDirective = [
        function () {
            return {
                restrict: 'E',
                templateUrl: 'app/common/directives/menu/menu.html',
                scope: {
                    commands:"="
                },
                controller: ["$scope", "$location", "$ionicPopup", function ($scope, $location, $ionicPopup) {

                    

                }],
                link: function (scope) {
                    // bind clicks...     

                }
            };
        }];

})(Simple, IsraelHayom);