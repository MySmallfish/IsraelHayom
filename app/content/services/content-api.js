﻿(function(S, I) {

    I.ContentApiService = ["$http","$q", function($http, $q) {

        return {
            getNewsFlashItems: getNewsFlashItems,
            getCategories: getCategories,
            getCategoryArticles: getCategoryArticles,
            getWeather: getWeather,
            getArticle: getArticle
        };


        function getRequestInfo(relativeUrl, args) {
            // get base url from config...
            // "api.app.israelhayom.co.il"
            return $q.when({
                url: ["http://",
                    "localhost/IsraelHayomProxy", relativeUrl].join("/"),
                args: _.extend(args || {}, { key: "920129nhuf" })
            });
        }

        function run(relativeUrl, args, method) {
            return getRequestInfo(relativeUrl, args).then(function(info) {
                var httpOptions = { method: method || "GET", url: info.url };
                if (method == "POST") {
                    httpOptions.data = info.args;
                } else {
                    httpOptions.params = info.args;
                }
                
                return $http(httpOptions);
            });
        }

        function convertImagePath(path) {
            return "http://www.israelhayom.co.il/" + path.replace("[DEFAULT]", "566x349");
        }
        function mapArticle(article) {
            var mappedArticles = {
                Id: article.nid,
                Title: article.content.title,
                Brief: article.content.intro,
                Images: _.map(article.images, function (image) {
                    return {
                        Url: convertImagePath(image.path),
                        Title: image.caption,
                        Credit: image.credit
                    }
                }),
                Date: moment(article.date.formatted, "dd/MM/yyyy").toDate(),
                Content: article.content.raw.body
            };
            return mappedArticles;
        }
        function filterArticle(article) { return article.content; }
        function mapArticles(articles) {
            return _.map(_.filter(articles, filterArticle), mapArticle);
        }



        function getCategoryArticles(categoryId, limit) {
            return run("category/" + categoryId, {limit: limit}).then(function (results) {
                return results.data;
            }).then(mapArticles);

        }

        function getNewsFlashItems() {
            return run("content/newsflash").then(function(results) {
                return results.data;
            });
        }
        function getWeather(weekly) {
            return run("content/weather/" + (weekly ? "week" : "day")).then(function(results) {
                return results.data;
            });
        }
        function getCategories() {
            return run("category").then(function(results) {
                return results.data;
            });
        }
        function getArticle(articleId) {
            return run("content/article/" + articleId).then(function(results) {
                return results.data;
            }).then(mapArticle);
        }

    }];


})(Simple, IsraelHayom);