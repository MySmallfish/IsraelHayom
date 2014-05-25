(function (S, I) {

    I.Navigation = [
        function () {
            return {
                restrict: 'E',
                templateUrl: 'app/common/directives/navigation/navigation.html',
                scope: {
                    tems: "=",
                    current: "=",
                    limit: "="
                },
                link: function (scope) {
                    // bind clicks...            
                }
            };
        }];

})(Simple, IsraelHayom);