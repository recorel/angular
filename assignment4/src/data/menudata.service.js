(function () {
    'use strict;'
    
    angular.module('data')
    .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http'];
    function MenuDataService($http){

        var service = this;

        service.getAllCategories = function () {
            console.log("MenuDataService.getAllCategories has run");
            return $http({
                method: 'GET',
                url: 'https://davids-restaurant.herokuapp.com/categories.json'
            });
        };

        service.getItemsForCategory = function (categoryShortName) {
            console.log("MenuDataService.getItemsForCategory has run");
            console.log(('https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName));
            return $http({
                method: 'GET',
                url: ('https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName)
            });
        }


    }
    
})();