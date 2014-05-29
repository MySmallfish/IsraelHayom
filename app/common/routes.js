
var app = angular.module("IsraelHayom");
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", { templateUrl: "app/common/views/home.html", controller: "HomeCtrl" })
        .when("/Article/:id", { templateUrl: "app/content/views/article.html", controller: "ArticleCtrl" })
        .when("/Weather", { templateUrl: "app/content/views/weather.html", controller: "WeatherCtrl" })
        .when("/Newsflash", { templateUrl: "app/content/views/newsflash.html", controller: "NewsflashCtrl" })
        .when("/Entry", { templateUrl: "app/users/views/entry-page.html", controller: "EntryPageCtrl" })
        //.when("/Login", { templateUrl: "app/common/views/login.html", controller: "LoginCtrl" })
        .when("/Profile", { templateUrl: "app/users/views/profile.html", controller: "ProfileCtrl" })
        .when("/Rating/:id", { templateUrl: "app/content/views/rating.html", controller: "RatingCtrl" })
        .when("/Category/:categoryId", { templateUrl: "app/content/views/category-page.html", controller: "CategoryPageCtrl" })
        .when("/Categories", { templateUrl: "app/content/views/all-categories-page.html", controller: "AllCategoriesPageCtrl" })
        .when("/Talkbacks/:articleId", { templateUrl: "app/content/views/talkbacks.html", controller: "TalkbacksCtrl" })

        .otherwise({ redirectTo: "/" });
});
