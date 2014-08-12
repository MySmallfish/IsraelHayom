(function (S, I) {

    I.UserProfileService = ["$q", "storageService", function ($q, storageService) {

        function saveUserProfile(profile, userName) {
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
                    console.log("getDefaultProfile", profile);
                });
            }

            function getStoredProfile() {
                storageService.prefix("IsraelHayom").local("storedProfile")
                    .then(function (item) {
                        profile = _.defaults(item, profile);
                        console.log("getStoredProfile", profile);
                    });
            }

            function getSpecificUserProfile() {
                storageService.prefix("IsraelHayom").local("specificUserProfile::" + userName)
                    .then(function (item) {
                        profile = _.defaults(item, profile);
                        console.log("getSpecificUserProfile", profile);
                    });
            }

            var profile = {};

            return getDefaultProfile()
               .then(getStoredProfile)
               //.then(getSpecificUserProfile)
               .then(function () {
                    console.log("PRO", profile);
                    return profile;
            });

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