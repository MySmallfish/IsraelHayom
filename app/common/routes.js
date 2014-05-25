
    var app = angular.module("IsraelHayom");
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", { templateUrl: "app/common/views/home.html", controller: "HomeCtrl" })
        .when("/Article/:id", { templateUrl: "app/content/views/article.html", controller: "ArticleCtrl" })
        //.when("/Login", { templateUrl: "app/common/views/login.html", controller: "LoginCtrl" })
        .otherwise({ redirectTo: "/" });
});
