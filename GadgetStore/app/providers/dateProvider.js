angular.module('storeCart').provider('getDate', function () {

    this.timeZone = 0;

    this.setTimeZone = function (zone) {
        this.timeZone = zone;
    }

    this.$get = function () {
        var zone = this.timeZone;
        return {
            getTime: function () {
                var date = new Date();
                var localTime = date.getTime();
                var localOffset = date.getTimezoneOffset() * 60000;
                var utcTime = localTime + localOffset;
                var targetTime = utcTime + (3600000 * zone);
                var targetDate = new Date(targetTime);
                return targetDate.getDate() + "/" + (targetDate.getMonth() + 1) + "/" + targetDate.getFullYear() + ":" + targetDate.getHours() + ":" + targetDate.getMinutes() + ":" + targetDate.getSeconds();

            }

        }

    }
    


});