(function (S, I) {
    I.ArticleController = [
        "$scope",
        "$q",
        "$filter",
        "$location",
        "$timeout",
        "contentService",
        "userProfileManager",
        "userProfileService",
        "popupService",
        "$routeParams",
        "$sanitize",
        "$sce",
        function ($scope, $q, $filter, $location, $timeout, contentService, userProfileManager, userProfileService, popupService, $routeParams, $sanitize, $sce) {

            function load() {
                userProfileService.getUserProfile().then(function (item) {
                    if (item.RecentArticle == articleId) {
                        $scope.scrollPosition = item.RecentArticleLocation;
                    }
                }).then(function() {
                    userProfileService.saveUserProfile({ RecentArticle: articleId });
                });
                
                contentService.getArticle(articleId).then(function (item) {
                    $scope.article = _.clone(item);
                    $scope.article.Content = $sce.trustAsHtml($sanitize($scope.article.Content));
                });

                userProfileManager.getArticleProfile(articleId).then(function (items) {
                    $scope.articleProfile = items;
                });

                contentService.getArticleRating(1).then(function (items) {
                    $scope.articleRating = translate(items);
                    $scope.ratersNumber = $scope.articleRating[0].value + $scope.articleRating[1].value;
                });
            }

            function translate(items) {
                return _.map(items, function (item) {
                    var mappedItem = {
                        title: item.title,
                        value: item.value
                    };
                    return mappedItem;
                });
            }

            $scope.like = function () {
                console.log("like");
                $scope.ratingPopup.close();
            };

            $scope.unLike = function() {
                console.log("unLike");
                $scope.ratingPopup.close();
            };

            $scope.openRating = function () {
                $scope.ratingPopup = popupService.openPopup({
                    templateUrl: 'app/content/views/rating.html',
                    scope: $scope
                });
            };
            
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
                      { text: $filter("l10n")("Cancel") }]
                });
            };

            var articleId = $routeParams.id;

            load();

        }];
})(Simple, IsraelHayom);