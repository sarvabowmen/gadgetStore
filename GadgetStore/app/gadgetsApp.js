/// <reference path="partials/gadgets.html" />
/// <reference path="partials/gadgets.html" />
angular.module("gadgetsStore", ["storeFilters", "storeCart", "ngRoute"])
            .config(function ($routeProvider, $locationProvider) {
                $routeProvider.when("/gadgets", {
                    templateUrl: "app/partials/gadgets.html"
                });
                $routeProvider.when("/checkout", {
                    templateUrl: "app/partials/checkout.html"
                });
                $routeProvider.when("/submitorder", {
                    templateUrl: "app/partials/submitOrder.html"
                });
                $routeProvider.when("/complete", {
                    templateUrl: "app/partials/orderSubmitted.html"
                });
                $routeProvider.when("Home/ViewOrder/:id", {
                    templateUrl: function (params) { return "Home/ViewOrder/" + params.id; } 
                });
                $routeProvider.otherwise({
                    templateUrl: "app/partials/gadgets.html"
                });

                $locationProvider.html5Mode(true);
            });