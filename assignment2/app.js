(function(){
    'use strict';

    var items = [

        { name: "cookies", quantity: 12 },
        { name: "coke", quantity: 14 },
        { name: "doughnut", quantity: 15 },
        { name: "candies", quantity: 7 },
        { name: "chocolate", quantity: 5 }

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

