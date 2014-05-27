(function (S, I) {

    I.ContentManager = ["$q", function ($q) {

        var mainArticles = [{
            Id: 0,
            Title: "title0",
            Brief: "bfdmj dfl lkgfdl klfks;le k sldkgl; k sdglkglfj o jhdfjkhd kjg dfhdfjksji ",
            ImageUrl: "app/common/img/pic1.jpg"
        }, {
            Id: 1,
            Title: "title1",
            Brief: "bfdmj dfl lkgfdl klfks;le k sldkgl; k sdglkglfj o jhdfjkhd kjg dfhdfjksji ",
            ImageUrl: "app/common/img/pic2.jpg"
        }, {
            Id: 2,
            Title: "title2",
            Brief: "bfdmj dfl lkgfdl klfks;le k sldkgl; k sdglkglfj o jhdfjkhd kjg dfhdfjksji ",
            ImageUrl: "app/common/img/pic3.jpg"
        }];

        function mapArticles(articles) {
            return _.map(articles, function (article) {
                var mappedArticles = {
                    Id: article.Id,
                    Title: article.Title,
                    Brief: article.Brief,
                    ImageUrl: article.ImageUrl
                };
                return mappedArticles;
            });
        }

        function getApiArticles() {

            var result = $q.defer();

            result.resolve(mainArticles);

            return result.promise;
        }

        function getMainArticles() {
            return getApiArticles().then(mapArticles);
        }

        function getArticle(articleId) {
            var article = {
                Id: 2,
                Title: "title2",
                Brief: "bfdmj dfl lkgfdl klfks;le k sldkgl; k sdglkglfj o jhdfjkhd kjg dfhdfjksji ",
                Content: "Authorities said the 22-year-old lone gunman, Elliot Rodger — the son of a director who worked on the — carried out his attacks Friday night in the beach community of Isla Vista near the University of California, Santa Barbara. The rampage happened hours after he looked into a video camera and warned in a disturbing Internet video that he would slaughter those with a good life — especially women who shunned him, authorities said. " +
                    "Deputies wounded him during two separate shootouts as he sped through Isla Vista, leaving a trail of bloodshed that ended with Rodger apparently shooting himself in the head before crashing his black BMW into a parked car, Santa Barbara County Sheriff Bill Brown said. " +
                    "Thirteen people were injured — eight from gunshot wounds, four from being hit by his car and one who suffered a minor injury whose exact cause was not clear yet, Brown said. " +
                    "Deputies found three semi-automatic handguns with 400 unspent rounds in his black BMW. All were purchased legally." +
                    "Authorities had had three contacts with Rodgers in the past year, including one case in which he claimed to be beaten but deputies suspected he was the aggressor. On April 30, officials went to his Isla Vista apartment again to check on him at the request of his family. But deputies reported back that the Santa Barbara community college student was shy, polite and having a difficult social life but did not need to be taken in for mental health reasons, Brown said.",
                ImageUrl: "app/common/img/pic3.jpg"
            };

            var result = $q.defer();

            result.resolve(article);

            return result.promise;
        }

        function getRecentTitles() {
            var result = $q.defer();

            result.resolve();

            return result.promise;
        }

        var weather = [{
            city: "תל אביב",
            FromDegree: 15,
            ToDegree: 25,
            status: "מעונן"
        }, {
            city: "ירושלים",
            FromDegree: 20,
            ToDegree: 30,
            status: "יבש"
        }, {
            city: "ראשון לציון",
            FromDegree: 5,
            ToDegree: 15,
            status: "גשום"
        }];

        function getApiWeather() {

            var result = $q.defer();

            result.resolve(weather);

            return result.promise;
        }

        var newsflash = [{
            Date: new Date(),
            Title: "חדרה: 4 עובדים זרים מתבצרים על עגורן",
            By: "סוכנות ידיעות"
        }, {
            Date: new Date(),
            Title: "האפיפיור פרנסיסקוס ביד ושם",
            By: "סוכנות ידיעות"
        }, {
            Date: new Date(),
            Title: "גבר כבן 70 טבע בבריכה במלון באילת; מצבו קשה מאוד",
            By: "סוכנות ידיעות"
        }];

        function getApiNewsflash() {

            var result = $q.defer();

            result.resolve(newsflash);

            return result.promise;
        }

        var articleRating = [
            { title: "אהבו", value: 555 },
            { title: "לא אהבו", value: 666 }
        ];

        function getApiArticleRating() {

            var result = $q.defer();

            result.resolve(articleRating);

            return result.promise;
        }

        var apiTalkbacks = [
            {
                Number: 1,
                Title: "תגובה 1",
                Text: "ךלחלךחכגגכס כבכ ככ חלחךל",
                Name: "מגיב 1",
                Date: new Date()
            }, {
                Number: 2,
                Title: "תגובה 2",
                Text: "",
                Name: "מגיב 2",
                Date: new Date()
            }, {
                Number: 3,
                Title: "תגובה 3",
                Text: "ךלחלךחכגגכס כבכ ככ חלחךל",
                Name: "מגיב 3",
                Date: new Date()
            }, {
                Number: 4,
                Title: "תגובה 4",
                Text: "ךלחלךחכגגכס כבכ ככ חלחךל",
                Name: "מגיב 4",
                Date: new Date()
            }
        ];

        function getApiTalkbacks(articleId) {

            var result = $q.defer();

            result.resolve(apiTalkbacks);

            return result.promise;
        }


        return {
            getMainArticles: getMainArticles,
            getArticle: getArticle,
            getRecentTitles: getMainArticles,
            getApiWeather: getApiWeather,
            getApiNewsflash: getApiNewsflash,
            getApiArticleRating: getApiArticleRating,
            getTalkbacks: getApiTalkbacks
        };
    }];

})(Simple, IsraelHayom);