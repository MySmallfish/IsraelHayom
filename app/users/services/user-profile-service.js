(function (S, I) {

    I.UserProfileService = ["$q", "storageService", function ($q, storageService) {

        function saveUserProfile(userName, profile) {
            var result;
            
            if (profile) {
                if (!userName) {
                    result = storageService.prefix("IsraelHayom").local("storedProfile", profile);
                } else {
                    result = storageService.prefix("IsraelHayom").local("specificUserProfile::" + userName, profile);
                }
            }
            return result;
        }

        var defaultProfile = {
            FontSize: 12,
            PreferredCategories: [],
            RecentArticle: null,
            RecentArticleLocation: 0
        };

        function getUserProfile(userName) {
            var result;

            if (storageService.prefix("IsraelHayom").local("specificUserProfile::" + userName)) {
                result = storageService.prefix("IsraelHayom").local("specificUserProfile::" + userName);
            }
            else if (storageService.prefix("IsraelHayom").local("storedProfile")) {
                result = storageService.prefix("IsraelHayom").local("storedProfile");
            }
            else {
                result = $q.when(defaultProfile);
            }
            return result;
        }

        function removeProfile(userName) {
            
        }
        
        return {
            saveUserProfile: saveUserProfile,
            getUserProfile: getUserProfile,
            removeProfile: removeProfile
        };
    }];

})(Simple, IsraelHayom);