var Babysitter = function (startTime, endTime, bedTime) {
    this.startTime = startTime;
    this.endTime = endTime;
    this.bedTime = bedTime;

    Babysitter.prototype = {
        getStartTime: function () {
            return this.startTime;
        },
        getEndTime: function () {
            return this.endTime;
        },
        getBedTime: function () {
            return this.bedTime;
        },
        getPreBedTimeRate: function () {
            return 12;
        },
        getUntilMidnightRate: function () {
            return 8;
        },
        getPostMidnightRate: function() {
            return 16;
        }
    }
};