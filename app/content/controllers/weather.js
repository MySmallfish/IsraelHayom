(function (S, I) {
    I.WeatherController = ["$scope", "$q", "weatherService", function ($scope, $q, weatherService) {


        function load() {
            weatherService.getDailyWeather().then(function (items) {
                $scope.weather = items;
            });
        }

        load();

    }];
})(Simple, IsraelHayom);