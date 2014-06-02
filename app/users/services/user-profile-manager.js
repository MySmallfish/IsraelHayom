(function (S, I) {

    I.UserProfileManager = ["$q", function ($q) {

        function getUserProfile() {

            var result = $q.defer();

            result.resolve();

            return result.promise;
        }

        function getShortcuts() {
            var result = $q.defer();

            result.resolve();

            return result.promise;
        }

        function getArticleProfile(articleId) {
            var articleProfile = {
                Authors: ["Author1", "Author2"],
                Date: new Date("1/1/2014")
            };

            var result = $q.defer();

            result.resolve(articleProfile);

            return result.promise;
        }
        
        function getRecentArticle() {
            var article = {
                ArticleId: 123,
                Position: "news"
            };

            var result = $q.defer();

            result.resolve(article);

            return result.promise;
        }
        
        return {
            getUserProfile: getUserProfile,
            getShortcuts: getShortcuts,
            getArticleProfile: getArticleProfile,
            getRecentArticle: getRecentArticle
        };
    }];

})(Simple, IsraelHayom);