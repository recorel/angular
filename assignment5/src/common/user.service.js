(function () {

"use strict";

angular.module('common')
.service('UserService', UserService);



function UserService() {
  var service = this;

  service.saveUserPref = function (pref) {
    service.pref = pref;
    console.log("Saved: ", pref);
  };

  service.getUserPref = function() {
    console.log("Get user's preferences: ", service.pref);
    return service.pref;
  }


}

})();
