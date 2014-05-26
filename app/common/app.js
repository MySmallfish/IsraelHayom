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
	app.controller("RatingCtrl", I.RatingController);
    

	app.directive("appHeader", I.AppHeaderDirective);
	app.directive("shortcuts", I.ShortcutsDirective);
	//app.directive("navigation", I.Navigation);


	app.directive("donut", function () {
	    return {
	        restrict: "E",
	        scope: {
	            id: "@",
	            data: "="
	        },
	        template: "<div class='chart-area'></div>",
	        replace: true,
	        link: function (scope, element, attrs) {

	            var width = element.width(), height = element.height(), radius = Math.min(width, height) / 2;

	            var color = d3.scale.ordinal()
                    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

	            var arc = d3.svg.arc()
                    .outerRadius(radius - 10)
                    .innerRadius(radius - 70);

	            var pie = d3.layout.pie()
                    .sort(null)
                    .value(function (d) { return d.value; });

	            var svg = d3.select("#" + attrs.id).append("svg")
                    .attr("width", width)
                    .attr("height", height)
                    .append("g")
                    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
	            scope.$watch("data", function (data) {
	                if (data) {
	                    var g = svg.selectAll(".arc")
                            .data(pie(data))
                            .enter().append("g")
                            .attr("class", "arc");

	                    g.append("path")
                            .attr("d", arc)
                            .style("fill", function (d) { return color(d.data.title); });

	                    g.append("text")
                            .attr("transform", function (d) { return "translate(" + arc.centroid(d) + ")"; })
                            .attr("dy", ".35em")
                            .style("text-anchor", "middle")
                            .text(function (d) { return d.data.title; });
	                }
	            });
	        }
	    };

	});

})(Simple, IsraelHayom);