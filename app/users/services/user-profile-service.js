(function (S, I) {

    I.UserProfileService = ["$q", "storageService", function ($q, storageService) {

        var firstEntryIndicator = true;
        
        function getFirstEntryIndicator() {
            var result = true;
            if (firstEntryIndicator) {
                firstEntryIndicator = false;
            } else {
                result = false;
            }
            
            return result;
        }

        function saveUserProfile(profile, userName) {
            var result;

            if (profile) {
                if (!userName) {
                    storageService.prefix("IsraelHayom").local("storedProfile").then(function (item) {
                        if (item) {
                            profile = _.defaults(profile, item);
                        }
                        result = storageService.prefix("IsraelHayom").local("storedProfile", profile);
                    });
                    
                } else {
                    storageService.prefix("IsraelHayom").local("specificUserProfile::" + userName)
                    .then(function (item) {
                        if (item && userName) {
                            profile = _.defaults(profile, item);
                        }
                        result = storageService.prefix("IsraelHayom").local("specificUserProfile::" + userName, profile);
                    });
                }
            }
            return result;
        }

        var defaultProfile = {
            FontSize: 12,
            PreferredCategories: {},
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
                        if (item) {
                            profile = _.defaults(item, profile);
                        }
                    });
            }

            function getSpecificUserProfile() {
                storageService.prefix("IsraelHayom").local("specificUserProfile::" + userName)
                    .then(function (item) {
                        if (item && userName) {
                            profile = _.defaults(item, profile);
                        }
                    });
            }

            var profile = {};

            return getDefaultProfile()
               .then(getStoredProfile)
               .then(getSpecificUserProfile)
               .then(function () {
                    return profile;
            });

        }

        function removeProfile(userName) {

        }

        return {
            saveUserProfile: saveUserProfile,
            getUserProfile: getUserProfile,
            removeProfile: removeProfile,
            getFirstEntryIndicator: getFirstEntryIndicator
        };
    }];

})(Simple, IsraelHayom);