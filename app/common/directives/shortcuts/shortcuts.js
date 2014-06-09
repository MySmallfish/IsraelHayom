(function (S, I) {

    I.ShortcutsDirective = [
        function () {
            return {
                restrict: 'E',
                //replace: true,
                templateUrl: 'app/common/directives/shortcuts/shortcuts.html',
                scope: true,
                link: function (scope) {
                    // bind clicks...            
                }
            };
        }];

})(Simple, IsraelHayom);