(function (S, I) {
    I.WeatherController = ["$scope", "$q", "contentManager", function ($scope, $q, contentManager) {


        function load() {
            contentManager.getApiWeather().then(function(items) {
                $scope.weather = items;
            });
        }

        load();

    }];
})(Simple, IsraelHayom);