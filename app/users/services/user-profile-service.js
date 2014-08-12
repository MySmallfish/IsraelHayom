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

            function getDefaultProfile() {
                return $q.when(defaultProfile).then(function (item) {
                    profile = item;
                    
                });
            }

            function getStoredProfile() {
                storageService.prefix("IsraelHayom").local("storedProfile")
                    .then(function (item) {
                        profile = _.defaults(item, profile);
                    });
            }

            function getSpecificUserProfile() {
                storageService.prefix("IsraelHayom").local("specificUserProfile::" + userName)
                    .then(function (item) {
                        profile = _.defaults(item, profile);
                    });
            }

            var profile = {};

            getDefaultProfile()
                .then(getStoredProfile)
                .then(getSpecificUserProfile);

            return profile;
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