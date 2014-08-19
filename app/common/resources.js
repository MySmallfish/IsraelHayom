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
            "BackToArticle": "חזרה לכתבה",
            "Raters": "מדרגים",
            "Save": "שמור",
            "auto": "רכב",
            "real estate": 'נדל"ן',
            "economy": "כלכלה",
            "caricatures": "קריקטורת היום",
            "books": "ספרים",
            "crime": "פלילים",
            "consumer news": "צרכנות",
            "culture": "תרבות",
            "education": "חינוך",
            "fashion": "אופנה",
            "gossip": "רכילות",
            "lifestyle": "לייף סטייל",
            "legal": "משפט",
            "news": "חדשות",
            "travel": "טיולים",
            "health and wellness": "בריאות וכושר",
            "internet": "אינטרנט",
            
        });
    });

})(Simple, IsraelHayom);