describe('Babysitter Kata', function () {
    var babysitter, startTime,endTime, bedTime;
    beforeEach(function () {
        startTime = new Date("November 13, 2016 15:00:00");
        endTime = new Date("November 14, 2016 03:59:59");
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
});