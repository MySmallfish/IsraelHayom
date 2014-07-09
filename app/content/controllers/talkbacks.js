(function (S, I) {
    I.TalkbacksController = ["$scope", "$location", "$filter", "$routeParams", "popupService", "contentService",
        function ($scope, $location, $filter, $routeParams, popupService, contentService) {

            $scope.articleId = $routeParams.articleId;

        function load() {
            contentService.getTalkbacks(articleId).then(function (items) {
                $scope.talkbacks = items;
            });

            
        }
        
        $scope.newTalkback = function () {

            popupService.openPopup({
                templateUrl: 'app/content/views/new-talkback.html',
                title: 'תגובה חדשה',
                scope: $scope,
                buttons: [
                    {
                        text: $filter("l10n")("Send"),
                        type: 'button-positive',
                        onTap: function (e) {

                        }
                    },
                  { text: $filter("l10n")("Cancel")}
                  
                ]
            });
        };

        var articleId = 2;

        load();

    }];
})(Simple, IsraelHayom);






