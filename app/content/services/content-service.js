(function (S, I) {

    I.ContentService = ["$q", function ($q) {

        var mainArticles = [{
            Id: 0,
            Title: '"כנראה יש ידיים מכוונות"',
            Brief: "המירוץ לנשיאות מידרדר לשפל חדש ויו\"ר הכנסת רומז שזה לא מקרי • יקיים דיון מיוחד, כולל במחלוקת אם לדחות את הבחירות • ח\"כ בן־אליעזר שפרש בשל החקירה נגדו: \"למה התחילו לחקור רק ימים ספורים לפני ההתמודדות?\"",
            ImageUrl: "app/common/img/pic1.jpg"
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
                Title: '"כנראה יש ידיים מכוונות"',
                Brief: 'המירוץ לנשיאות מידרדר לשפל חדש ויו"ר הכנסת רומז שזה לא מקרי • יקיים דיון מיוחד, כולל במחלוקת אם לדחות את הבחירות • ח"כ בן־אליעזר שפרש בשל החקירה נגדו: "למה התחילו לחקור רק ימים ספורים לפני ההתמודדות?"',
                Content: 'המירוץ לנשיאות מגיע לשפל חדש. בעקבות פרישת ח"כ בנימין (פואד) בן־אליעזר מהמירוץ לנשיאות, יקיים היום יו"ר הכנסת יולי אדלשטיין דיון בלשכתו עם היועץ המשפטי לכנסת עו"ד איל ינון ועם גורמים נוספים באשר "למצב החדש שנוצר" ובשאלה אם לדחות את הבחירות שאמורות להתקיים מחרתיים.' +
                    'אתמול רמז יו"ר הכנסת שאולי יש יד מכוונת מאחורי האירועים האחרונים במירוץ לנשיאות. "אני לא מספיק נאיבי לחשוב שפתאום אנשים, ש־30 שנה נמצאים במערכת הציבורית ומילאו תפקידים הכי בכירים, דווקא בשלושת השבועות האלה נופלים עליהם כל מיני חומרים. אז כנראה יש כאן ידיים מכוונות. לא יודע של מי, אבל יש ידיים מכוונות ואני, באמת, בזיעה קרה חושב מה יקרה אם אנחנו נבחר נשיא או נשיאה ולאחר כמה שנים מתברר שכן מישהו מסביבם הפעיל חוקרים פרטיים". אדלשטיין אמר את הדברים בראיון לתוכנית "המטה" בערוץ 10. לדבריו, "זה נורא. תפקיד הנשיא בישראל נחשב בעל ערך לא בגלל הסמכויות הרבות שמעניק לו החוק, אלא הנשיא מהווה אוטוריטה. אי אפשר להתכחש לעובדה שלפרס יש אוטוריטה. תאר לך שבבחירות ייבחר מישהו ולאחר שנתיים יתפרסמו עליו פרטים עובדתיים שהוא עמד או שמקורביו עמדו מאחורי סיכולים ממוקדים. אילו היו לי הוכחות שאחד המועמדים עשה סיכול ממוקד הייתי הולך ליועמ"ש או לקצין הכנסת, ואח"כ למשטרה ומגיש את החומר".' +
                    '"ריח של חיסול חשבונות"' +
                    'גם סגן יו"ר הכנסת, חבר הכנסת יוני שטבון (הבית היהודי), אמר אתמול: "הרפש הבלתי פוסק העולה כרונית במירוץ לנשיאות מדיף ריח רע של סיכולים ממוקדים וחיסולי חשבונות. אוי לנו שכך מתנהל המירוץ למשרה הרמה ביותר בציבוריות הישראלית. מרגיש כאילו בוחרים סנדק ולא נשיא".' +
                    'אתמול הודיע ח"כ בנימין בן־אליעזר כי הוא פורש מההתמודדות בשל החקירה המשטרתית המתנהלת נגדו. בהודעה מיוחדת שפירסם בסוף השבוע אמר: "השבתי על כל מה שנשאלתי ואף התחייבתי לשוב ולגבות את דבריי במסמכים ובהוכחות. כל שקל ששולם לקניית הדירה שקוף וידוע. ב־24 השעות האחרונות חשבתי והתלבטתי האם להיכנע ולתת למי שעומד מאחורי הדבר הזה את מבוקשם? ויש גם מי שיגידו שהפרישה היא הודאה באשמה, דבר שאין בכוונתי לעשות. להפך, אין לי ספק כי בזמן הקרוב האמת תצא לאור. אלחם על כך שייבדקו כל השאלות החשובות: כמה זמן היה המידע בידי רשויות המדינה השונות? מדוע הוחלט להתחיל בחקירה דווקא עכשיו, ימים ספורים לפני סוף ההתמודדות, כאשר אני מתגורר בדירתי כבר למעלה משנה? כמי שנלחם כל חייו, אין בכוונתי להפסיק גם הפעם, עד שאביא לחקר האמת. ואולי המקרה הזה יוביל לחשבון נפש ולהפסקת התרבות הקלוקלת של, שהפכו חלק משיגרת חיינו והתנהלותנו כמדינה".',
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

        function getApiTalkbacks(articleId) {

            var result = $q.defer();

            result.resolve(apiTalkbacks);

            return result.promise;
        }
        
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

        function getApiCategoryArticles(articleId) {

            var result = $q.defer();

            result.resolve(categoryArticles);

            return result.promise;
        }


        return {
            getMainArticles: getMainArticles,
            getArticle: getArticle,
            getRecentTitles: getMainArticles,
            getApiWeather: getApiWeather,
            getApiNewsflash: getApiNewsflash,
            getApiArticleRating: getApiArticleRating,
            getTalkbacks: getApiTalkbacks,
            getCategoryArticles: getApiCategoryArticles,
            getCategories: getApiCategoryArticles
        };
    }];

})(Simple, IsraelHayom);