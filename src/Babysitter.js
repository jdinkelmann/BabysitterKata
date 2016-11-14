var Babysitter = function (startTime, endTime, bedTime) {
    this.startTime = startTime;

    Babysitter.prototype = {
        getStartTime: function () {
            return this.startTime;
        }
    }
};