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
            var endHour = this.getEndTime().getHours();
            var endMinutes = this.getEndTime().getMinutes();
            var endDay = this.getEndTime().getDay();
            return ((endDay - startDay === 1)  && endHour <= 4) && endHour === 4? (endMinutes === 0):true;
        },
        getTotalHoursWorked: function() {
            var hoursWorked = 0;
            if(this.isValidStartTime() && this.isValidEndTime()) {
                hoursWorked = Math.floor((this.getEndTime().getTime() - this.getStartTime().getTime())/3600000);
            }
            return hoursWorked;
        },
        getPreBedTimeHours: function () {
            var preHours = 0;
            if(typeof this.getBedTime() !== 'undefined') {
                preHours = Math.floor((this.getBedTime().getTime() - this.getStartTime().getTime())/3600000);
            }
            return preHours;
        },
        getUntilMidnightHours: function () {
            var hoursWorked = 0;
            if(typeof this.getBedTime() !== 'undefined') {
                hoursWorked = Math.floor(24 - this.getBedTime().getHours());
            }
           return hoursWorked;
        },
        getPostMidnightHours: function () {
            var hoursWorked = 0;
            var startDay = this.getStartTime().getDay();
            var endDay = this.getEndTime().getDay();
            if((endDay - startDay === 1)) {
               hoursWorked = this.getEndTime().getHours();
            }
            return hoursWorked;
        },
        calculateNightlyCharge: function () {
            var preBed = this.getPreBedTimeHours() * this.getPreBedTimeRate();
            var preMidnight = this.getUntilMidnightHours() * this.getUntilMidnightRate();
            var postMidnight = this.getPostMidnightHours() * this.getPostMidnightRate();
            return preBed + preMidnight + postMidnight;
        }
    };
};