﻿(function (S, I) {
    I.WeatherController = ["$scope", "$q", "weatherService", "userProfileService", function ($scope, $q, weatherService, userProfileService) {

        function load() {
            userProfileService.saveUserProfile({ RecentArticle: null, RecentArticleLocation: 0 });

            weatherService.getIconsUrl().then(function (items) {
                $scope.icons = items;
            }).then(weatherService.getDailyWeather).then(function (items) {
                $scope.weather = items;
            });

            //weatherService.getDailyWeather().then(function (items) {
            //    $scope.weather = items;
            //});
        }

        load();

    }];
})(Simple, IsraelHayom);