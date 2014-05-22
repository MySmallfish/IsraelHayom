(function (S,I) {
    I.HomeController = ["$scope", "$q", function ($scope, $q) {

        var mainArticles = [{
            Id: 0,
            title: "title0",
            brief:"bfdmj dfl lkgfdl klfks;le k sldkgl; k sdglkglfj o jhdfjkhd kjg dfhdfjksji ",
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


        $scope.isSelected = function(article) {
            return $scope.selectedArticle === article;
        };

        $scope.switchArticle = function (index) {
            $scope.selectedArticle = $scope.mainArticles[index];
            console.log("switch", index);
        };

        $scope.next = function() {
            console.log("NEXT!", $scope.articleIndex);

            $scope.articleIndex = $scope.articleIndex >= $scope.mainArticles.length - 1 ? 0 : ++$scope.articleIndex;
            $scope.switchArticle($scope.articleIndex);
        };

        $scope.back = function() {
            console.log("BACK!", $scope.articleIndex);
            
            $scope.articleIndex = $scope.articleIndex <= 0 ? $scope.mainArticles.length - 1 : --$scope.articleIndex;
            $scope.switchArticle($scope.articleIndex);
        };

        function load() {

            getArticles().then(function(items) {
                $scope.mainArticles = items;
                $scope.articleIndex = 0;
                $scope.selectedArticle = $scope.mainArticles[$scope.articleIndex];
                $scope.points = _.range($scope.mainArticles.length);
            });

        }

        load();

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

    }
    ];
})(Simple, IsraelHayom);