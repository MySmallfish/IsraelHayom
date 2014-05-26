(function(S, I){
    var app = angular.module("IsraelHayom", ["ngRoute", "ngTouch", "Simple"]);

    app.service("configuration", S.Configuration);
    app.service("contentManager", I.ContentManager);
    app.service("userProfileManager", I.UserProfileManager);


	app.controller("AppCtrl", I.AppController);
	app.controller("LoginCtrl", I.LoginController);
	app.controller("HomeCtrl", I.HomeController);
	app.controller("ArticleCtrl", I.ArticleController);
	app.controller("WeatherCtrl", I.WeatherController);
	app.controller("NewsflashCtrl", I.NewsflashController);
	app.controller("EntryPageCtrl", I.EntryPageController);
	app.controller("ProfileCtrl", I.profileController);
    

	app.directive("appHeader", I.AppHeaderDirective);
	app.directive("shortcuts", I.ShortcutsDirective);
	//app.directive("navigation", I.Navigation);

})(Simple, IsraelHayom);