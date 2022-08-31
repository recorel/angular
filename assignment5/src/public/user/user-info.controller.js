(function () {

"use strict";

angular.module('public')
.controller('UserInfoController', UserInfoController);


UserInfoController.$inject = ['userPref', 'ApiPath'];
function UserInfoController(userPref, ApiPath) {
    var $ctrl = this;

    $ctrl.userPref = userPref;
    if ($ctrl.userPref){
    $ctrl.imgUrl = ApiPath + "/images/" + $ctrl.userPref.menuItem.short_name + ".jpg";
    }
}
    
})();