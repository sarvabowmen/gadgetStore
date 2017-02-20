angular.module('gadgetsStore').factory('gadgetStoreService', ['$http', 'gadgetsUrl', 'ordersUrl', 'categoriesUrl', function ($http, gadgetsUrl, ordersUrl, categoriesUrl) {

    return {
        getGadgets: function () {
            return $http.get(gadgetsUrl);
            
        },
        getCategories: function () {
            return $http.get(categoriesUrl);

        },
        sendOrder: function (order) {
            return $http.post(ordersUrl, order);

        }

    }


}]);