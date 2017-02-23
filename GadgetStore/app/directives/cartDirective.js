var storeCart = angular.module('storeCart', []);


storeCart.directive("cartDetails", function (cart) {
    return {
        restrict: "E",
        templateUrl: "/app/partials/cartDetails.html",
        controller: function ($scope) {
            var cartData = cart.getProducts();
       

            $scope.total = function () {
                var total = 0;
                for (var i = 0; i < cartData.length; i++) {
                    total += (cartData[i].Price * cartData[i].count);
                }
                return total;
            }
            $scope.itemCount = function () {
                var total = 0;
                for (var i = 0; i < cartData.length; i++) {
                    total += cartData[i].count;
                }
                return total;
            }
        }
    };
});