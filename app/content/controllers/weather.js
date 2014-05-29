(function (S, I) {
    I.WeatherController = ["$scope", "$q", "contentService", function ($scope, $q, contentService) {


        function load() {
            contentService.getApiWeather().then(function (items) {
                $scope.weather = items;
            });
        }

        load();

    }];
})(Simple, IsraelHayom);