(function (S, I) {
    I.ScrollTracker = [
        function () {
            return {
                restrict: 'E',
                templateUrl: 'app/content/directives/scroll-tracker/scroll-tracker.html',
                scope: {
                    scrollPosition: "=",
                    wrapperClass: "="
                },
                transclude: true,
                link: function (scope, element) {

                    
                    function onScroll() {
                        console.log("scrolllll");
                    };

                    //var scrolled = $("div.scrollable").scrollTop();

                    var scrolled = $("div.scrollable");
                    scrolled.onscroll = onScroll;

                    
                }
            };
        }];

})(Simple, IsraelHayom);