(function (S, I) {

    I.UserProfileService = ["$q", "storageService", function ($q, storageService) {

        function saveUserProfile(userName, profile) {
            
            return storageService.prefix("IsraelHayom").local("specificUserProfile::" + userName, profile);
        }
        
        function getUserProfile(userName) {
            var result;
            
            if (storageService.prefix("IsraelHayom").local("specificUserProfile::" + userName, value)) {
                result = storageService.prefix("IsraelHayom").local("specificUserProfile", value);
            } else if (storageService.prefix("IsraelHayom").local("storedProfile", value)) {
                result = storageService.prefix("IsraelHayom").local("storedProfile", value);
            } else {
                result = storageService.prefix("IsraelHayom").local("defaultProfile", value);
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