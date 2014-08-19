(function(S, I) {

    I.ContentApiService = ["$http","$q", function($http, $q) {

        return {
            getNewsFlashItems: getNewsFlashItems,
            getCategories: getCategories,
            getCategoryArticles: getCategoryArticles,
            getWeather: getWeather,
            getArticle: getArticle,
            getComments: getComments
        };


        function getRequestInfo(relativeUrl, args) {
            // get base url from config...
            // "api.app.israelhayom.co.il"
            return $q.when({
                url: ["http://",
                    "me.simpl.co.il/IsraelHayomProxy", relativeUrl].join("/"),
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

        function getRootPath() {
            return "http://www.israelhayom.co.il/";
        }

        function convertImagePath(path) {
            return getRootPath() + path.replace("[DEFAULT]", "566x349");
        }
        
        function mapArticle(article) {
            var mappedArticles = {
                Id: article.nid,
                Title: article.content.title,
                Author: { Name: article.author.name, Id: article.author.name},
                Brief: article.content.intro,
                Images: _.map(article.images, function (image) {
                    return {
                        Url: convertImagePath(image.path),
                        Title: image.caption,
                        Credit: image.credit
                    };
                }),
                Date: new Date(article.date.timestamp * 1000),
                Content:article.content.raw.body.replace(/src="(.*?)"/gi, 'src="' + getRootPath() + '$1"')// article.content.raw.body
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
        
        function mapComments(comments) {
            return _.map(comments.comments, function (comment) {
                var mappedComment = {
                    Title: comment.subject,
                    Text: comment.body,
                    Name: comment.author.name,
                    Date: new Date(comment.date.timestamp * 1000)
                };
                return mappedComment;
            });
        }

        function getComments(articleId) {
            return run("comment/" + articleId).then(function(results) {
                return results.data;
            }).then(mapComments);
        }

    }];


})(Simple, IsraelHayom);