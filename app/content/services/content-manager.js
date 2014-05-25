(function (S, I) {

    I.ContentManager = ["$q", function ($q) {

        var mainArticles = [{
            Id: 0,
            title: "title0",
            brief: "bfdmj dfl lkgfdl klfks;le k sldkgl; k sdglkglfj o jhdfjkhd kjg dfhdfjksji ",
            ImageUrl: "app/common/img/pic1.jpg"
        }, {
            Id: 1,
            title: "title1",
            brief: "bfdmj dfl lkgfdl klfks;le k sldkgl; k sdglkglfj o jhdfjkhd kjg dfhdfjksji ",
            ImageUrl: "app/common/img/pic2.jpg"
        }, {
            Id: 2,
            title: "title2",
            brief: "bfdmj dfl lkgfdl klfks;le k sldkgl; k sdglkglfj o jhdfjkhd kjg dfhdfjksji ",
            ImageUrl: "app/common/img/pic3.jpg"
        }];

        function mapArticles(articles) {
            return _.map(articles, function (article) {
                var mappedArticles = {
                    Id: article.Id,
                    title: article.title,
                    brief: article.brief,
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
                title: "title2",
                brief: "bfdmj dfl lkgfdl klfks;le k sldkgl; k sdglkglfj o jhdfjkhd kjg dfhdfjksji ",
                content: "Authorities said the 22-year-old lone gunman, Elliot Rodger — the son of a director who worked on the — carried out his attacks Friday night in the beach community of Isla Vista near the University of California, Santa Barbara. The rampage happened hours after he looked into a video camera and warned in a disturbing Internet video that he would slaughter those with a good life — especially women who shunned him, authorities said. " +
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
        

        return {
            getMainArticles: getMainArticles,
            getArticle:getArticle,
            getRecentTitles: getRecentTitles
        };
    }];

})(Simple, IsraelHayom);