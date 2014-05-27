(function (S, I) {

    var simplyLogModule = angular.module("IsraelHayom");
    simplyLogModule.run(function (textResource) {
        textResource.load("he-IL", {
            "Name": "שם",
            "Title": "כותרת",
            "Content": "תוכן",
            "Cancel": "בטל",
            "Send": "שלח",
            "Talkback": "תגובה",
            "NewTalkback": "תגובה חדשה",
        });
    });

})(Simple, IsraelHayom);