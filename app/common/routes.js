
    var app = angular.module("IsraelHayom");
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", { templateUrl: "app/common/views/home.html", controller: "HomeCtrl" })
        //.when("/Login", { templateUrl: "app/common/views/login.html", controller: "LoginCtrl" })
        .otherwise({ redirectTo: "/" });
});
