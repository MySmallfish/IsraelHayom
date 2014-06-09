(function (S, I) {

    I.MenuDirective = [
        function () {
            return {
                restrict: 'E',
                templateUrl: 'app/common/directives/menu-directive/menu-directive.html',
                scope: {
                    commands: "=",
                    execute: "&"
                }
            };
        }];

})(Simple, IsraelHayom);