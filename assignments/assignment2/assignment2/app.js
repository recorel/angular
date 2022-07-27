(function(){
    'use strict';

    var items = [

        { name: "cookies", quantity: 10 },
        { name: "coke", quantity: 10 },
        { name: "doughnut", quantity: 10 },
        { name: "candies", quantity: 10 },
        { name: "chocolate", quantity: 10 }

    ]

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];

    function ToBuyController ($scope, ShoppingListCheckOffService){

        var toBuy = this;
        toBuy.list = ShoppingListCheckOffService.getToBuyItems();
        toBuy.purchaseItem = function(itemIndex) {
            ShoppingListCheckOffService.purchaseItem(itemIndex);
        }
        
        

    }

    AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];

    function AlreadyBoughtController ($scope, ShoppingListCheckOffService){
        var bought = this;
        bought.list = ShoppingListCheckOffService.getBoughtItems();

    }

    function ShoppingListCheckOffService() {
        var service = this;

        var toBuyItems = items;
        var boughtItems = [];

        service.getToBuyItems = function(){
            return toBuyItems;
        }

        service.purchaseItem = function (itemIndex) {
            boughtItems.push(toBuyItems[itemIndex]);
            toBuyItems.splice(itemIndex, 1);
        };


        service.getBoughtItems = function(){
            return boughtItems;
        }
    }

})();



// (function () {
//     'use strict';
    
//     angular.module('ControllerAsApp', [])
//     .controller('ShoppingListController1', ShoppingListController1)
//     .controller('ShoppingListController2', ShoppingListController2)
//     .factory('ShoppingListFactory', ShoppingListFactory);
    
//     // LIST #1 - controller
//     ShoppingListController1.$inject = ['ShoppingListFactory'];
//     function ShoppingListController1(ShoppingListFactory) {
//       var list1 = this;
    
//       // Use factory to create new shopping list service
//       var shoppingList = ShoppingListFactory();
    
//       list1.items = shoppingList.getItems();
    
//       list1.itemName = "";
//       list1.itemQuantity = "";
    
//       list1.addItem = function () {
//         shoppingList.addItem(list1.itemName, list1.itemQuantity);
//       }
    
//       list1.purchaseItem = function (itemIndex) {
//         shoppingList.removeItem(itemIndex);
//       };
//     }
    
    
//     // LIST #2 - controller
//     ShoppingListController2.$inject = ['ShoppingListFactory'];
//     function ShoppingListController2(ShoppingListFactory) {
//       var list2 = this;
    
//       // Use factory to create new shopping list service
//       var shoppingList = ShoppingListFactory(3);
    
//       list2.items = shoppingList.getItems();
    
//       list2.itemName = "";
//       list2.itemQuantity = "";
    
//       list2.addItem = function () {
//         try {
//           shoppingList.addItem(list2.itemName, list2.itemQuantity);
//         } catch (error) {
//           list2.errorMessage = error.message;
//         }
    
//       }
    
//       list2.removeItem = function (itemIndex) {
//         shoppingList.removeItem(itemIndex);
//       };
//     }
    
    
//     // If not specified, maxItems assumed unlimited
//     function ShoppingListService(maxItems) {
//       var service = this;
    
//       // List of shopping items
//       var items = [];
    
//       service.addItem = function (itemName, quantity) {
//         if ((maxItems === undefined) ||
//             (maxItems !== undefined) && (items.length < maxItems)) {
//           var item = {
//             name: itemName,
//             quantity: quantity
//           };
//           items.push(item);
//         }
//         else {
//           throw new Error("Max items (" + maxItems + ") reached.");
//         }
//       };
    
//       service.removeItem = function (itemIndex) {
//         items.splice(itemIndex, 1);
//       };
    
//       service.getItems = function () {
//         return items;
//       };
//     }
    
    
//     function ShoppingListFactory() {
//       var factory = function (maxItems) {
//         console.log(maxItems);
//         return new ShoppingListService(maxItems);
//       };
    
//       return factory;
//     }
    
//     })();
    