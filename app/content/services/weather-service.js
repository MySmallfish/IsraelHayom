(function (S, I) {

    I.WeatherService = ["$q", "contentApi", function ($q, contentApi) {

        var iconsUrl = {
            "מעונן חלקית": "http://www.israelhayom.co.il/sites/default/files/partly%20cloudy.gif",
            "גשום": "http://www.israelhayom.co.il/sites/default/files/rainy.gif",
            "בהיר": "http://www.israelhayom.co.il/sites/default/files/bright.gif",
            "מעונן": "http://www.israelhayom.co.il/sites/default/files/cloudy.gif",
            "חם": "http://www.israelhayom.co.il/sites/default/files/hot.gif",
            "חם ויבש": "http://www.israelhayom.co.il/sites/default/files/hot%20and%20dry.gif",
        };

        function getIconsUrl() {
            var result = $q.defer();
            result.resolve(iconsUrl);
            return result.promise;
        }

        function getDailyWeather() {
            return contentApi.getWeather();
        }

        function getWeeklyWeather() {
            return contentApi.getWeather(true);
        }


        return {
            getDailyWeather: getDailyWeather,
            getWeeklyWeather: getWeeklyWeather,
            getIconsUrl: getIconsUrl
        };
    }];

})(Simple, IsraelHayom);
