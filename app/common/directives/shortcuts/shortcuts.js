(function (S, I) {

    I.ShortcutsDirective = [
        function () {
            return {
                restrict: 'E',
                //replace: true,
                templateUrl: 'app/common/directives/shortcuts/shortcuts.html',
                scope: {
                    categories: "="
                },
                link: function (scope) {
                    // bind clicks...  
                    console.log("shorts", scope.categories);
                }
            };
        }];

})(Simple, IsraelHayom);