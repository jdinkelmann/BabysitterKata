describe('Babysitter Kata', function () {
    var babysitter, startTime,endTime, bedTime;
    beforeEach(function () {
        startTime = new Date("November 13, 2016 17:00:00");
        endTime = new Date("November 14, 2016 04:00:00");
        bedTime = new Date("November 13, 2016 21:00:00");

        babysitter = new Babysitter(startTime,endTime, bedTime);
    });
    it('should define the Babysitter', function () {
        expect(babysitter).toBeDefined();
    });

    it('should return a start time given a valid start time', function () {
        expect(babysitter.getStartTime()).toEqual(startTime);
    });

    it('should retrun the end time if one is passed', function () {
        expect(babysitter.getEndTime()).toEqual(endTime);
    });

    it('should return the bed time if one is passed', function () {
        expect(babysitter.getBedTime()).toEqual(bedTime);
    });

    it('should get pre-bedtime hourly rate', function () {
        expect(babysitter.getPreBedTimeRate()).toBe(12)
    });

    it('should get the to midnight hourly rate', function () {
        expect(babysitter.getUntilMidnightRate()).toBe(8);
    });

    it('should get the post midnight rate', function () {
        expect(babysitter.getPostMidnightRate()).toEqual(16);
    });

    it('should validate that the current start time is OK', function () {
        expect(babysitter.isValidStartTime()).toBeTruthy();
    });

    it('should validate that the current end time is OK', function () {
        expect(babysitter.isValidEndTime()).toBeTruthy();
    });

    it('should reject an invalid start time', function () {
        var tooEarly = new Date("November 13, 2016 09:00:00")
        var badBabysitter = new Babysitter(tooEarly,endTime,bedTime);
        expect(badBabysitter.isValidStartTime()).toBeFalsy();
    });

    it('should return false if the end date is past 4am', function () {
        var tooLate = new Date("November 14, 2016 05:00:00");
        var badBabysitter = new Babysitter(startTime,tooLate,bedTime);
        expect(badBabysitter.isValidEndTime()).toBeFalsy();
    });


    it('should give me total hours worked', function () {
        expect(babysitter.getTotalHoursWorked()).toBe(11);
    });



});