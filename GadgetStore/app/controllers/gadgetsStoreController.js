angular.module('gadgetsStore')
    .constant('gadgetsUrl', 'http://localhost:59780/api/gadgets')
    .constant('ordersUrl', 'http://localhost:59780/api/orders')
    .constant('categoriesUrl', 'http://localhost:59780/api/categories')
    .controller('gadgetStoreCtrl', function ($scope, $http, $location, gadgetsUrl, categoriesUrl, ordersUrl, cart, gadgetStoreService) {

        $scope.data = {};

        gadgetStoreService.getGadgets()
            .then(function (data) {
                $scope.data.gadgets = data.data;
            })
            .catch(function (error) {
                $scope.data.error = error;
            });

        gadgetStoreService.getCategories()
        .then(function (data) {
            $scope.data.categories = data.data;
        })
        .catch(function (error) {
            $scope.data.error = error;
        });

        $scope.sendOrder = function (shippingDetails) {
            var order = angular.copy(shippingDetails);
            order.gadgets = cart.getProducts();
            gadgetStoreService.sendOrder(order)
            .then(function (data) {
                $scope.data.OrderLocation = data.headers('Location');
                $scope.data.OrderID = data.data.OrderID;
                cart.getProducts().length = 0;
            })
            .catch(function (error) {
                $scope.data.orderError = error;
            }).finally(function () {
                $location.path("/complete");
            });
        }

        $scope.showFilter = function () {
            return $location.path() == '';
        }

        $scope.checkoutComplete = function () {
            return $location.path() == '/complete';
        }

    });