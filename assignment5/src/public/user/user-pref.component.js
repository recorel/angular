(function () {
    "use strict";
    
angular.module('public')
.component('userPref', {
  templateUrl: 'src/public/user/user-pref.html',
  bindings: {
    firstname: '<',
    lastname: '<',
    phone: '<',
    email: '<',
    favItemTitle: '<',
    favItemName: '<',
    favItemDesc: '<',
    favItemImgUrl: '<'
  }
});
    
})();
    