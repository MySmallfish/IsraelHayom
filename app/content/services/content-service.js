(function (S, I) {

    I.ContentService = ["$q", "contentApi", function ($q, contentApi) {

        var builtinCategories = [
            { rank: 14, name: "auto", title: "רכב", iconCssClass: "ion-model-s", backgroundCssClass: "auto" },
            { rank: 17, name: "real estate", title: 'נדל"ן', iconCssClass: "fa fa-home", backgroundCssClass: "real-estate" },
            { rank: 3, name: "economy", title: "כלכלה", iconCssClass: "fa fa-usd", backgroundCssClass: "economy" },
            { rank: 4, name: "caricatures", title: "קריקטורת היום", iconCssClass: "fa fa-smile-o", backgroundCssClass: "caricatures" },
            { rank: 5, name: "ספרים", title: "ספרים", iconCssClass: "ion-android-book", backgroundCssClass: "books" },
            { rank: 6, name: "crime", title: "פלילים", iconCssClass: "fa fa-link", backgroundCssClass: "crime" },
            { rank: 7, name: "consumer news", title: "צרכנות", iconCssClass: "ion-ios7-cart", backgroundCssClass: "consumer-news" },
            { rank: 8, name: "culture", title: "תרבות", iconCssClass: "fa fa-question-circle", backgroundCssClass: "culture" },
            { rank: 9, name: "education", title: "חינוך", iconCssClass: "ion-ios7-glasses-outline", backgroundCssClass: "education" },
            { rank: 10, name: "fashion", title: "אופנה", iconCssClass: "ion-woman", backgroundCssClass: "fashion" },
            { rank: 11, name: "gossip", title: "רכילות", iconCssClass: "ion-person-stalker", backgroundCssClass: "gossip" },
            { rank: 12, name: "lifestyle", title: "לייף סטייל", iconCssClass: "fa fa-glass", backgroundCssClass: "lifestyle" },
            { rank: 13, name: "legal", title: "משפט", iconCssClass: "fa fa-gavel", backgroundCssClass: "legal" },
            { rank: 2, name: "news", title: "חדשות", iconCssClass: "fa fa-question-circle", backgroundCssClass: "news" },
            { rank: 1, name: "ביטחוני", title: "ביטחוני", iconCssClass: "fa fa-question-circle", backgroundCssClass: "security" },
            { rank: 16, name: "travel", title: "טיולים", iconCssClass: "fa fa-globe", backgroundCssClass: "travel" },
            { rank: 15, name: "health and wellness", title: "בריאות וכושר", iconCssClass: "fa fa-stethoscope", backgroundCssClass: "health-and-wellness" },
            { rank: 18, name: "internet", title: "אינטרנט", iconCssClass: "fa fa-laptop", backgroundCssClass: "internet" }
        ];

        var articlesCache = {};
        function cacheArticle(article) {
            articlesCache[article.Id] = article;
            return article;
        }
        function cacheArticles(articles) {
            _.defer(function () {
                _.each(articles, cacheArticle);
            });
            return articles;
        }

        function getMainArticles() {
            return getTopRatedCategoryArticles(3, 1);
        }

        function getTopRatedCategoryArticles(upToRank, limit) {
            var topCategories = _.sortBy(_.filter(builtinCategories, function (item) {
                return item.rank && item.rank <= upToRank;
            }), "rank");

            var promises = _.map(topCategories, function (category) {
                return getCategoryArticles(category.name, limit);
            });

            return $q.all(promises).then(function (results) {
                var allArticles = [];
                _.each(results, function (result) {
                    allArticles = _.union(allArticles, result);
                });


                return cacheArticles(allArticles);
            });
        }

        function getRecentTitles() {
            return getTopRatedCategoryArticles(5, 5);
        }

        function getArticle(articleId) {
            if (articlesCache[articleId]) {
                return $q.when(articlesCache[articleId]);
            } else {
                return contentApi.getArticle(articleId).then(cacheArticle);
            }
        }

        function getWeather() {

            var result = $q.defer();

            result.resolve(weather);

            return result.promise;
        }


        function getCategories() {

            builtinCategories = _.sortBy(builtinCategories, "rank");

            var categories = _.map(builtinCategories, function (builtinCategory) {
                return {
                    name: builtinCategory.name,
                    title: builtinCategory.title,
                    rank: builtinCategory.rank,
                    iconCssClass: builtinCategory.iconCssClass,
                    backgroundCssClass: builtinCategory.backgroundCssClass
                };
            });

            return $q.when(categories);

            //return contentApi.getCategories().then(function (categories) {
            //    var keys = _.keys(categories);
            //    var items = _.map(keys, function (key) {
            //        console.log("!!", categories[key]);
            //        return {
            //            Id: categories[key].code,
            //            Title: key
            //        };
            //    });
            //    console.log("categories??", items);
            //    return items;
            //});
        }

        function getNewsflash() {
            return contentApi.getNewsFlashItems().then(function (items) {
                return _.map(items, function (item) {
                    var newsflashItem = {
                        Title: item.content.title,
                        Date: new Date(item.date.timestamp * 1000),
                        By: item
                    };
                    return newsflashItem;
                });
            });
        }

        var articleRating = [
            { title: "אהבו", value: 555 },
            { title: "לא אהבו", value: 666 }
        ];

        function getArticleRating(articleId) {
            return $q.when(articleRating);
        }

        function getTalkbacks(articleId) {
            return contentApi.getComments(articleId);
        }

        function getCategoryArticles(categoryId, limit) {
            limit = limit || 200;
            return contentApi.getCategoryArticles(categoryId, limit);
        }


        return {
            getMainArticles: getMainArticles,
            getArticle: getArticle,
            getRecentTitles: getRecentTitles,
            getApiWeather: getWeather,
            getApiNewsflash: getNewsflash,
            getArticleRating: getArticleRating,
            getTalkbacks: getTalkbacks,
            getCategoryArticles: getCategoryArticles,
            getCategories: getCategories
        };
    }];

})(Simple, IsraelHayom);