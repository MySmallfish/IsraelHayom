
var app = angular.module("IsraelHayom");
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", { templateUrl: "app/common/views/home.html", controller: "HomeCtrl" })
        .when("/Article/:id", { templateUrl: "app/content/views/article.html", controller: "ArticleCtrl" })
        .when("/Weather", { templateUrl: "app/content/views/weather.html", controller: "WeatherCtrl" })
        .when("/Newsflash", { templateUrl: "app/content/views/newsflash.html", controller: "NewsflashCtrl" })
        .when("/Entry", { templateUrl: "app/users/views/entry-page.html", controller: "EntryPageCtrl" })
        //.when("/Login", { templateUrl: "app/common/views/login.html", controller: "LoginCtrl" })
        //.when("/Profile/:id", { templateUrl: "app/users/views/profile.html", controller: "ProfileCtrl" })
        //.when("/Rating/:id", { templateUrl: "app/content/views/rating.html", controller: "RatingCtrl" })

        .otherwise({ redirectTo: "/" });
});
