( function() {

    'use strict';

    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com')
    .directive('foundItems', FoundItems);

    NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService){
        var ctrl = this;
            

        ctrl.getMenuItems = function () {

            if (!ctrl.searchText) {
                ctrl.found = [];
                return;
            }

            MenuSearchService.getMatchedMenuItems(ctrl.searchText)
            .then(function (response) {
                ctrl.found = response;
            })
            .catch(function (error){
                console.log(error);
            })
        }

        ctrl.removeItem = function (index) {
            ctrl.found.splice(index, 1);
            if (ctrl.found.length === 0){
                ctrl.found = null;
            }
        }
    }

    function FoundItems() {
        var ddo = {
          templateUrl: 'foundItems.html',
          restrict: 'E',
          scope: {
            list: '<foundItems',
            onRemove: '&'
          }
        };
      
        return ddo;
      }
      
    MenuSearchService.$inject = ['$http', 'ApiBasePath']
    function MenuSearchService($http, ApiBasePath){

        var service = this;

        service.getMatchedMenuItems = function(searchTerm) {
            return $http(
                {
                    method: 'GET',
                    url: (ApiBasePath + '/menu_items.json'),
                    params: {
                        description: searchTerm
                    }
                }
            )
            .then(function (response) {
                var foundItems = response.data['menu_items']
                .filter(e => e.description.toLowerCase().includes(searchTerm.toLowerCase()));

                return foundItems;
            })
            .catch(function (error){
                console.log(error);
            })

        }

    }


})();