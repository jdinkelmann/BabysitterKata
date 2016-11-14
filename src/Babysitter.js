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
        },
        isValidStartTime: function() {
            return this.getStartTime().getHours() >= 17;
        },
        isValidEndTime: function () {
            var startDay = this.getStartTime().getDay();
            var endTime = this.getEndTime().getHours();
            var endDay = this.getEndTime().getDay();
            return ((endDay - startDay === 1)  && endTime === 4);
        },
        getTotalHoursWorked: function() {
            var hoursWorked = 0;
            if(this.isValidStartTime() && this.isValidEndTime()) {
                hoursWorked = (this.getEndTime().getTime() - this.getStartTime().getTime())/3600000;
            }
            return hoursWorked;
        }
    }
};