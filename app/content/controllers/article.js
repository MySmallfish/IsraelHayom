(function (S, I) {
    I.ArticleController = [
        "$scope",
        "$q",
        "$location",
        "$timeout",
        "contentService",
        "userProfileManager",
        "userProfileService",
        "popupService",
        "$routeParams",
        "$sanitize",
        "$sce",
        function ($scope, $q, $location, $timeout, contentService, userProfileManager, userProfileService, popupService, $routeParams, $sanitize, $sce) {

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

            var articleId = $routeParams.id;

            load();

        }];
})(Simple, IsraelHayom);