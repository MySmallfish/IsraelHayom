(function (S, I) {

    var simplyLogModule = angular.module("IsraelHayom");
    simplyLogModule.run(function (textResource) {
        textResource.load("he-IL", {
            "Name": "שם",
            "Title": "כותרת",
            "Content": "תוכן",
            "Cancel": "בטל",
            "Send": "שלח",
            "Close":"סגור",
            "Talkback": "תגובה",
            "NewTalkback": "תגובה חדשה",
            "AllCategories": "כל הקטגוריות",
            "Profile": "פרופיל",
            "Login": "התחבר",
            "Terms": "תנאי שימוש",
            "About": "אודות",
            "CategoriesRating": "דירוג קטגוריות",
            "FontSize": "גודל גופן",
            "Version": "גרסה",
            "LastUpdate": "עדכון אחרון",
            "Talkbacks": "תגובות",
            "BackToArticle":  "חזרה לכתבה"
        });
    });

})(Simple, IsraelHayom);