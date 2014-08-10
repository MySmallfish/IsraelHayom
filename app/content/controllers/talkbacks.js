(function (S, I) {
    I.TalkbacksController = ["$scope", "$location", "$filter", "$routeParams", "popupService", "contentService",
        function ($scope, $location, $filter, $routeParams, popupService, contentService) {
            
            $scope.articleId = $routeParams.articleId;

            function load() {
                contentService.getTalkbacks($scope.articleId).then(function (items) {
                    $scope.talkbacks = items;
                });

                contentService.getArticle($scope.articleId).then(function (item) {
                    $scope.article = item;
                });
            }

            $scope.openFontRuler = function () {

                if (!$scope.data) {
                    $scope.data = {};
                } 
                
                popupService.openPopup({
                    templateUrl: 'app/users/views/font-ruler.html',
                    scope: $scope,
                    buttons: [
                        { text: $filter("l10n")("Cancel") },
                        {
                            text: $filter("l10n")("Save"),
                            type: 'button-positive',
                            onTap: function (e) {
                                console.log("???", $scope.data.fontSize, e);
                                return $scope.data.fontSize;
                            }
                        }
                    ]
                });
            };

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
                      { text: $filter("l10n")("Cancel") }

                    ]
                });
            };

            load();

        }];
})(Simple, IsraelHayom);






