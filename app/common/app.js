(function(S, I){
    var app = angular.module("IsraelHayom", ["ngRoute", "ngTouch", "Simple"]);

    app.service("configuration", S.Configuration);
    //app.service("contentManager", I.ContentManager);


	app.controller("AppCtrl", I.AppController);
	app.controller("LoginCtrl", I.LoginController);
	app.controller("HomeCtrl", I.HomeController);
	app.directive("appHeader", I.AppHeaderDirective);

})(Simple, IsraelHayom);