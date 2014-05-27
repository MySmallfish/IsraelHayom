(function (S, I) {
    I.TalkbacksController = ["$scope", "contentManager", function ($scope, contentManager) {


        function load() {
            contentManager.getTalkbacks(articleId).then(function (items) {
                $scope.talkbacks = items;
            });

        }

        var articleId = 2;

        load();

    }];
})(Simple, IsraelHayom);