(function () {
    'use strict';
    
    angular.module('MenuApp')
    .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
    
      // Default redirect
      $urlRouterProvider.otherwise('/');
    
      // *** Set up UI states ***
      $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'src/menuapp/templates/home.template.html'
      })
   
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/menuapp/templates/main-categories.template.html',
        controller: 'CategoriesController as catCtrl',
        resolve: {
          items: ['MenuDataService', function (MenuDataService) {
            console.log("Resolving");   
            return MenuDataService.getAllCategories()
                .then(function (response) {
                    console.log("Response data:");
                    console.log(response.data);
                    return response.data;
                })
                .catch(function (error){
                    console.log(error);
                });
          }]
        }
      })

      .state('items', {
        url: '/items/{itemId}',
        templateUrl: 'src/menuapp/templates/main-items.template.html',
        controller: 'ItemsController as itemsCtrl',
        resolve: {
            items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
                console.log("Resolving Category for:");
                console.log($stateParams.itemId);
                return MenuDataService.getItemsForCategory($stateParams.itemId)
                    .then(function (response) {
                        return response.data;
                    })
                    .catch(function (error){
                        console.log(error);
                    });
            }]
        }
      });
  
    }
    
})();
    