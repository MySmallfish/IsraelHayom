(function (S, I) {
    I.ScrollTracker = ["userProfileService", function (userProfileService) {
            return {
                restrict: 'E',
                templateUrl: 'app/content/directives/scroll-tracker/scroll-tracker.html',
                scope: {
                    scrollPosition: "=",
                    wrapperClass: "="
                },
                transclude: true,
                link: function (scope, element) {

                    scope.$watch("scrollPosition", function(newValue) {
                        $("div.scrollable").animate({ scrollTop: scope.scrollPosition }, 'slow');
                    });
                    
                    
                    var throttled = _.throttle(onScroll, 500);
                    $("div.scrollable").on('scroll', throttled);
                    
                    function onScroll() {
                        var scrolled = $("div.scrollable").scrollTop();
                        
                        userProfileService.saveUserProfile({ RecentArticleLocation: scrolled });
                    };

                    
                }
            };
        }];

})(Simple, IsraelHayom);