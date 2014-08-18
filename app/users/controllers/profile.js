(function (S, I) {
    I.profileController = ["$scope", "$q", "$filter", "userProfileService", "contentService", function ($scope, $q, $filter, userProfileService, contentService) {

        contentService.getCategories().then(function (items) {
            $scope.categories = items;
        });

        userProfileService.getUserProfile().then(function (item) {
            if (!$scope.data) {
                $scope.data = {};
            }
            $scope.data.fontSize = item.FontSize;
        });

        $scope.saveFontSize = function () {
            userProfileService.saveUserProfile({ FontSize: $scope.data.fontSize });
        };

        //$scope.categories = [{
        //    Id: 1,
        //    Name: 'נדל"ן',
        //    Icon: "icon fa fa-home"
        //}, {
        //    Id: 2,
        //    Name: "כלכלה",
        //    Icon: "icon fa fa-usd"

        //}, {
        //    Id: 3,
        //    Name: "הייטק",
        //    Icon: "icon ion-monitor"
        //}, {
        //    Id: 4,
        //    Name: "תקשורת",
        //    Icon: "icon ion-ios7-telephone-outline"
        //}, {
        //    Id: 5,
        //    Name: "בעולם",
        //    Icon: "icon ion-earth"
        //}, {
        //    Id: 6,
        //    Name: "סלבריקט",
        //    Icon: "icon ion-person-stalker"
        //}];

        $scope.reorderItem = function (item, fromIndex, toIndex) {
            $scope.categories.splice(fromIndex, 1);
            $scope.categories.splice(toIndex, 0, item);
        };

        $scope.moveItem = function (item, fromIndex, toIndex) {
            $scope.items.splice(fromIndex, 1);
            $scope.items.splice(toIndex, 0, item);
        };

    }];
})(Simple, IsraelHayom);