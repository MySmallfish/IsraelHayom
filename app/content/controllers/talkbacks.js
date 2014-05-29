(function (S, I) {
    I.TalkbacksController = ["$scope", "$location", "$ionicPopup", "contentService", function ($scope, $location, $ionicPopup, contentService) {


        function load() {
            contentService.getTalkbacks(articleId).then(function (items) {
                $scope.talkbacks = items;
            });
        }
        
        $scope.newTalkback = function () {

            var myPopup = $ionicPopup.show({
                templateUrl: 'app/content/views/new-talkback.html',
                title: 'תגובה חדשה',
                scope: $scope,
                buttons: [
                  { text: 'Cancel' },
                  {
                      text: '<b>Save</b>',
                      type: 'button-positive',
                      onTap: function (e) {

                      }
                  }
                ]
            });
            myPopup.then(function (res) {
                console.log('Tapped!', res);
            });

        };

        var articleId = 2;

        load();

    }];
})(Simple, IsraelHayom);






