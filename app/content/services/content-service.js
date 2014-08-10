(function (S, I) {

    I.ContentService = ["$q", "contentApi", function ($q, contentApi) {

        var mainArticles = [{
            Id: 0,
            Title: '"כנראה יש ידיים מכוונות"',
            Brief: "המירוץ מידרדר לשפל חדש ויו\"ר הכנסת רומז שזה לא מקרי • יקיים דיון מיוחד, כולל במחלוקת אם לדחות את הבחירות?\"",
            ImageUrl: "app/common/img/car.png"
        }, {
            Id: 1,
            Title: '"החקירה שהתחילה בנמל הובילה לפואד"',
            Brief: 'ההסתבכות: אנשי רשות המסים מצאו כי נניקשווילי, שותף בחברת "שמן", העביר 400 אלף דולר לפואד, שלא דיווח על כך לרשויות • החשד האפשרי: קבלת שוחד',
            ImageUrl: "app/common/img/pic2.jpg"
        }, {
            Id: 2,
            Title: 'אלון חסן הורחק מנמל אשדוד ל־90 יום',
            Brief: 'שוחרר למעצר בית והודה בפייסבוק לתומכיו: "האמת תצא לאור" • ח"כ יחימוביץ: "שחיתות היא שחיתות, בריונות היא בריונות"',
            ImageUrl: "app/common/img/pic3.jpg"
        }, {
            Id: 2,
            Title: 'אלון חסן הורחק מנמל אשדוד ל־90 יום',
            Brief: 'שוחרר למעצר בית והודה בפייסבוק לתומכיו: "האמת תצא לאור" • ח"כ יחימוביץ: "שחיתות היא שחיתות, בריונות היא בריונות"',
            ImageUrl: "app/common/img/pic3.jpg"
        }, {
            Id: 1,
            Title: '"החקירה שהתחילה בנמל הובילה לפואד"',
            Brief: 'ההסתבכות: אנשי רשות המסים מצאו כי נניקשווילי, שותף בחברת "שמן", העביר 400 אלף דולר לפואד, שלא דיווח על כך לרשויות • החשד האפשרי: קבלת שוחד',
            ImageUrl: "app/common/img/pic2.jpg"
        }, {
            Id: 2,
            Title: 'אלון חסן הורחק מנמל אשדוד ל־90 יום',
            Brief: 'שוחרר למעצר בית והודה בפייסבוק לתומכיו: "האמת תצא לאור" • ח"כ יחימוביץ: "שחיתות היא שחיתות, בריונות היא בריונות"',
            ImageUrl: "app/common/img/pic3.jpg"
        }, {
            Id: 2,
            Title: 'אלון חסן הורחק מנמל אשדוד ל־90 יום',
            Brief: 'שוחרר למעצר בית והודה בפייסבוק לתומכיו: "האמת תצא לאור" • ח"כ יחימוביץ: "שחיתות היא שחיתות, בריונות היא בריונות"',
            ImageUrl: "app/common/img/pic3.jpg"
        }, {
            Id: 2,
            Title: 'אלון חסן הורחק מנמל אשדוד ל־90 יום',
            Brief: 'שוחרר למעצר בית והודה בפייסבוק לתומכיו: "האמת תצא לאור" • ח"כ יחימוביץ: "שחיתות היא שחיתות, בריונות היא בריונות"',
            ImageUrl: "app/common/img/pic3.jpg"
        }, {
            Id: 1,
            Title: '"החקירה שהתחילה בנמל הובילה לפואד"',
            Brief: 'ההסתבכות: אנשי רשות המסים מצאו כי נניקשווילי, שותף בחברת "שמן", העביר 400 אלף דולר לפואד, שלא דיווח על כך לרשויות • החשד האפשרי: קבלת שוחד',
            ImageUrl: "app/common/img/pic2.jpg"
        }, {
            Id: 2,
            Title: 'אלון חסן הורחק מנמל אשדוד ל־90 יום',
            Brief: 'שוחרר למעצר בית והודה בפייסבוק לתומכיו: "האמת תצא לאור" • ח"כ יחימוביץ: "שחיתות היא שחיתות, בריונות היא בריונות"',
            ImageUrl: "app/common/img/pic3.jpg"
        }, {
            Id: 2,
            Title: 'אלון חסן הורחק מנמל אשדוד ל־90 יום',
            Brief: 'שוחרר למעצר בית והודה בפייסבוק לתומכיו: "האמת תצא לאור" • ח"כ יחימוביץ: "שחיתות היא שחיתות, בריונות היא בריונות"',
            ImageUrl: "app/common/img/pic3.jpg"
        }];

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

        var someArticle = {
            Id: 2,
            Title: '"כנראה יש ידיים מכוונות"',
            Brief: 'המירוץ לנשיאות מידרדר לשפל חדש ויו"ר הכנסת רומז שזה לא מקרי • יקיים דיון מיוחד, כולל במחלוקת אם לדחות את הבחירות • ח"כ בן־אליעזר שפרש בשל החקירה נגדו: "למה התחילו לחקור רק ימים ספורים לפני ההתמודדות?"',
            Content: 'המירוץ לנשיאות מגיע לשפל חדש. בעקבות פרישת ח"כ בנימין (פואד) בן־אליעזר מהמירוץ לנשיאות, יקיים היום יו"ר הכנסת יולי אדלשטיין דיון בלשכתו עם היועץ המשפטי לכנסת עו"ד איל ינון ועם גורמים נוספים באשר "למצב החדש שנוצר" ובשאלה אם לדחות את הבחירות שאמורות להתקיים מחרתיים.' +
                'אתמול רמז יו"ר הכנסת שאולי יש יד מכוונת מאחורי האירועים האחרונים במירוץ לנשיאות. "אני לא מספיק נאיבי לחשוב שפתאום אנשים, ש־30 שנה נמצאים במערכת הציבורית ומילאו תפקידים הכי בכירים, דווקא בשלושת השבועות האלה נופלים עליהם כל מיני חומרים. אז כנראה יש כאן ידיים מכוונות. לא יודע של מי, אבל יש ידיים מכוונות ואני, באמת, בזיעה קרה חושב מה יקרה אם אנחנו נבחר נשיא או נשיאה ולאחר כמה שנים מתברר שכן מישהו מסביבם הפעיל חוקרים פרטיים". אדלשטיין אמר את הדברים בראיון לתוכנית "המטה" בערוץ 10. לדבריו, "זה נורא. תפקיד הנשיא בישראל נחשב בעל ערך לא בגלל הסמכויות הרבות שמעניק לו החוק, אלא הנשיא מהווה אוטוריטה. אי אפשר להתכחש לעובדה שלפרס יש אוטוריטה. תאר לך שבבחירות ייבחר מישהו ולאחר שנתיים יתפרסמו עליו פרטים עובדתיים שהוא עמד או שמקורביו עמדו מאחורי סיכולים ממוקדים. אילו היו לי הוכחות שאחד המועמדים עשה סיכול ממוקד הייתי הולך ליועמ"ש או לקצין הכנסת, ואח"כ למשטרה ומגיש את החומר".' +
                '"ריח של חיסול חשבונות"' +
                'גם סגן יו"ר הכנסת, חבר הכנסת יוני שטבון (הבית היהודי), אמר אתמול: "הרפש הבלתי פוסק העולה כרונית במירוץ לנשיאות מדיף ריח רע של סיכולים ממוקדים וחיסולי חשבונות. אוי לנו שכך מתנהל המירוץ למשרה הרמה ביותר בציבוריות הישראלית. מרגיש כאילו בוחרים סנדק ולא נשיא".' +
                'אתמול הודיע ח"כ בנימין בן־אליעזר כי הוא פורש מההתמודדות בשל החקירה המשטרתית המתנהלת נגדו. בהודעה מיוחדת שפירסם בסוף השבוע אמר: "השבתי על כל מה שנשאלתי ואף התחייבתי לשוב ולגבות את דבריי במסמכים ובהוכחות. כל שקל ששולם לקניית הדירה שקוף וידוע. ב־24 השעות האחרונות חשבתי והתלבטתי האם להיכנע ולתת למי שעומד מאחורי הדבר הזה את מבוקשם? ויש גם מי שיגידו שהפרישה היא הודאה באשמה, דבר שאין בכוונתי לעשות. להפך, אין לי ספק כי בזמן הקרוב האמת תצא לאור. אלחם על כך שייבדקו כל השאלות החשובות: כמה זמן היה המידע בידי רשויות המדינה השונות? מדוע הוחלט להתחיל בחקירה דווקא עכשיו, ימים ספורים לפני סוף ההתמודדות, כאשר אני מתגורר בדירתי כבר למעלה משנה? כמי שנלחם כל חייו, אין בכוונתי להפסיק גם הפעם, עד שאביא לחקר האמת. ואולי המקרה הזה יוביל לחשבון נפש ולהפסקת התרבות הקלוקלת של, שהפכו חלק משיגרת חיינו והתנהלותנו כמדינה".',
            ImageUrl: "app/common/img/pic3.jpg"
        };

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
     }, {
         Number: 5,
         Title: "תגובה 5",
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


        var categoryArticles = [{
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

        var builtinCategories = [
            { name: "auto", title: "רכב", iconCssClass: "fa fa-car"},
            { name: "real estate", title: 'נדל"ן', iconCssClass: "fa fa-home"},
            { rank: 3, name: "economy", title: "כלכלה", iconCssClass: "fa fa-car" },
            { name: "caricatures", title: "קריקטורה", iconCssClass: "fa fa-car" },
            { name: "books", title: "רכב", iconCssClass: "fa fa-car"},
            { name: "crime", title: "רכב", iconCssClass: "fa fa-car" },
            { name: "consumer news", title: "רכב", iconCssClass: "fa fa-car" },
            { name: "culture", title: "רכב", iconCssClass: "fa fa-car" },
            { rank:5, name: "education", title: "רכב", iconCssClass: "fa fa-car" },
            { name: "environment", title: "רכב", iconCssClass: "fa fa-car" },
            { name: "fashion", title: "רכב", iconCssClass: "fa fa-car" },
            { name: "gossip", title: "רכב", iconCssClass: "fa fa-car" },
            { name: "lifestyle", title: "רכב", iconCssClass: "fa fa-car" },
            { name: "legal", title: "רכב", iconCssClass: "fa fa-car" },
            { rank: 1, name: "news", title: "רכב", iconCssClass: "fa fa-car" },
            { rank: 2, name: "ביטחוני", title: "ביטחוני", iconCssClass: "fa fa-car" },
            { rank: 4, name: "ספורט", title: "ספורט", iconCssClass: "fa fa-car" },
            { rank: 4, name: "travel", title: "טיולים", iconCssClass: "fa fa-car" }
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
            return getTopRatedCategoryArticles(3,1);
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
            return getTopRatedCategoryArticles(5,5);
        }

        function getArticle(articleId) {
            if (articlesCache[articleId]) {
                console.log("if");
                return $q.when(articlesCache[articleId]);
            } else {
                console.log("else");
                return contentApi.getArticle(articleId).then(cacheArticle);
            }
        }

        function getWeather() {

            var result = $q.defer();

            result.resolve(weather);

            return result.promise;
        }


        function getCategories() {
            return contentApi.getCategories().then(function (categories) {
                var keys = _.keys(categories);
                var items = _.map(keys, function (key) {
                    return {
                        Id: categories[key].code,
                        Title: key
                    };

                });
                return items;
            });
        }
        function getNewsflash() {
            return contentApi.getNewsFlashItems().then(function (items) {
                return _.map(items, function (item) {
                    var newsflashItem = {
                        Title: item.content.title,
                        Date: moment(item.date.formatted, "dd/MM/yyyy").toDate()
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
            console.log("getArticleRating", articleId);
            return $q.when(articleRating);
        }

        function getTalkbacks(articleId) {

            var result = $q.defer();

            result.resolve(apiTalkbacks);

            return result.promise;
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