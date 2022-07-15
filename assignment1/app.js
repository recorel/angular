
(function () {
    angular.module("ItemsCheckApp", [])
    .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['$scope'];

    function ItemsController($scope) {
        $scope.items = "";
        $scope.msg = "";
        $scope.warning = "";
        $scope.inputStyle = "";
        $scope.msgStyle = "";
        var itemsList = [];

        $scope.checkItems = function () {

            itemsList = $scope.items.split(',')
            $scope.msg = "";
            $scope.warning = "";

            if ($scope.items === "") {
                $scope.msg += "Please enter data first";
                $scope.msgStyle = setNgStyle("red", "");
                $scope.inputStyle = setNgStyle("", "red");
                return;
            }

            if (itemsList.indexOf('') !== -1) {
                itemsList  = itemsList.filter(e => e !=='')
                $scope.warning = "Empty elements are not counted!";
            }

            if (itemsList.length === 0 ) {
                return;
            }
            if (itemsList.length <= 3 ) {
                $scope.msg = "Enjoy";
                $scope.msgStyle = setNgStyle("green", "");
                $scope.inputStyle = setNgStyle("", "green");
            } else {
                $scope.msg = "Too much!";
                $scope.msgStyle = setNgStyle("green", "");
                $scope.inputStyle = setNgStyle("", "green");
            }

        }

        function setNgStyle(colorFont, colorBorder) {
            return {
                "border-color": colorBorder,
                "color": colorFont
            }
        };

    }

})();


