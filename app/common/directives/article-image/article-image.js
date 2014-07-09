(function (S, I) {

    I.ArticleImageDirective = [
        function() {
            return {
                restrict: 'E',
                template: "<div class='article-image'><img ng-src='{{image.Url}}' alt='{{image.Title}} ({{image.Credit}})'/><div class='article-image-title-back'></div><div class='article-image-title'><span class='article-image-title-text'>{{image.Title}}</span> <span class='article-image-credit'>{{image.Credit}}</span></div></div>",
                scope: {
                    image:"="
                }
            };
        }
    ];
})(Simple, IsraelHayom);