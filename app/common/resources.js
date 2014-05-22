(function (S, I) {

    var simplyLogModule = angular.module("IsraelHayom");
    simplyLogModule.run(function (textResource) {
        textResource.load("he-IL", {

        });
    });

})(Simple, IsraelHayom);