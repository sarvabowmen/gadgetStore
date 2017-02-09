
angular.module('storeCart').factory('cart', function () {
    var cartData = [];

    return {
        addProduct: function (id, name, price, category) {
            var addedToExistingItem = false;
            for (var i = 0; i < cartData.length; i++) {
                if (cartData[i].GadgetID == id) {
                    cartData[i].count++;
                    addedToExistingItem = true;
                    break;
                }
            }
            if (!addedToExistingItem) {
                cartData.push({
                    count: 1, GadgetID: id, Price: price, Name: name, CategoryID: category
                });
            }
        },
        removeProduct: function (id) {
            for (var i = 0; i < cartData.length; i++) {
                if (cartData[i].GadgetID == id) {
                    cartData.splice(i, 1);
                    break;
                }
            }
        },
        getProducts: function () {
            return cartData;
        }
    };
});