(function (S, I) {
    I.TalkbacksController = ["$scope", "$location", "$filter", "$routeParams", "popupService", "contentService", "userProfileService",
        function ($scope, $location, $filter, $routeParams, popupService, contentService, userProfileService) {
            
            $scope.articleId = $routeParams.articleId;

            function load() {
                contentService.getTalkbacks($scope.articleId).then(function (items) {
                    $scope.talkbacks = items;
                });

                contentService.getArticle($scope.articleId).then(function (item) {
                    $scope.article = item;
                });

                userProfileService.getUserProfile().then(function (item) {
                    if (!$scope.data) {
                        $scope.data = {};
                    }
                    $scope.data.fontSize = item.FontSize;
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
                                userProfileService.saveUserProfile({ FontSize: $scope.data.fontSize });
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






