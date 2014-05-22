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

        function getArticles() {
            return getApiArticles().then(mapArticles);
        }

        return {
            getArticles: getArticles
        };
    }];

})(Simple, IsraelHayom);