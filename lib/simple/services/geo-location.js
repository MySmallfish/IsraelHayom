(function (S) {
    S.GeoLocationService = function($q, $rootScope) {

        function getLocation() {
            var result = $q.defer();
            navigator.geolocation.getCurrentPosition(function (geoPosition) {
                result.resolve(geoPosition.coords);
            }, result.reject);
            // simulate
            //result.resolve({ latitude: 52.44033234, longitude: 34.544432 });
            return result.promise;
        }

        return {
            get: getLocation
        };
    };
})(Simple);