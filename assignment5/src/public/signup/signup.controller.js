(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignUpController', SignUpController);
    

    SignUpController.$inject = ['$scope', 'MenuService', 'UserService'];
    function SignUpController($scope, MenuService, UserService) {
      var $ctrl = this;
      $ctrl.submitted = false;

      $ctrl.submit = function () {

        MenuService.getMenuItem($ctrl.user.menu_number)
        .then(function (response) {
            $ctrl.user.menuItem =  response.data;
            // Save user's preferences using service
            UserService.saveUserPref($ctrl.user);
            $ctrl.submitted = true;
            $ctrl.menuItemError = false;
            // Clear the form
            $ctrl.user = null;
            $scope.signupForm.$setPristine();
            $scope.signupForm.$setUntouched();

          })
        .catch(function (error) {
            $ctrl.menuItemError = true;
            $ctrl.submitted = false;
            $ctrl.menuItemNumberIncorrect = $ctrl.user.menu_number;
        });
          

      };
    }
    
    })();