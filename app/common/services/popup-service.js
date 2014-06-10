(function (S, I) {

    I.PopupService = ["$q", "$ionicPopup", function ($q, $ionicPopup) {


        function openPopup(popupObject) {
            return $ionicPopup.show(popupObject);
        }


        return {
            openPopup: openPopup
        };
    }];

})(Simple, IsraelHayom);