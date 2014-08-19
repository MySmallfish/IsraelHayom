(function (S, I) {

    I.WeatherService = ["$q", "contentApi", function ($q, contentApi) {

        function getDailyWeather() {
            return contentApi.getWeather();
        }

        function getWeeklyWeather() {
            return contentApi.getWeather(true);
        }


        return {
            getDailyWeather: getDailyWeather,
            getWeeklyWeather: getWeeklyWeather
        };
    }];

})(Simple, IsraelHayom);
