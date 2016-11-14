describe('Babysitter Kata', function () {
    var babysitter, startTime,endTime, bedTime;
    beforeEach(function () {
        startTime = new Date(2016,10,13,17,0);
        endTime = new Date(2016,10,14,4,0);
        bedTime = new Date(2016,10,13,21,0);

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

    it('should be valid if end time is prior to midnight', function () {
        var newEndTime = new Date(2016,10,13,23,15);
        var preMidnight = new Babysitter(startTime,newEndTime,bedTime);
        expect(preMidnight.isValidStartTime()).toBeTruthy();
        expect(preMidnight.isValidEndTime()).toBeTruthy();
        expect(preMidnight.getTotalHoursWorked()).toBe(6);
    });

    it('should validate that the current end time is OK', function () {
        expect(babysitter.isValidEndTime()).toBeTruthy();
    });

    it('should reject an invalid start time', function () {
        var tooEarly = new Date(2016,10,13,9,0);
        var badBabysitter = new Babysitter(tooEarly,endTime,bedTime);
        expect(badBabysitter.isValidStartTime()).toBeFalsy();
    });

    it('should return false if the end date is past 4am', function () {
        var tooLate = new Date(2016,10,14,4,1);
        var badBabysitter = new Babysitter(startTime,tooLate,bedTime);
        expect(badBabysitter.isValidEndTime()).toBeFalsy();
    });


    it('should give me total hours worked', function () {
        expect(babysitter.getTotalHoursWorked()).toBe(11);
    });

    it('should return my pre-bedtime hours', function () {
        expect(babysitter.getPreBedTimeHours()).toBe(4);
    });

    it('should return my post-bedtime/pre-midnight hours',function () {
       expect(babysitter.getUntilMidnightHours()).toBe(3);
    });

    it('should my post-midnight hours', function () {
        expect(babysitter.getPostMidnightHours()).toBe(4);
    });

    it('should give me th total amount of money I should receive', function () {
        expect(babysitter.calculateNightlyCharge()).toBe(136);
    });

    it('should only pay me for the full hours I work', function () {
        var startPartial = new Date(2016,10,13,19,13);
        var endPartial = new Date(2016,10,14,3,59);
        var halfBabysitter  = new Babysitter(startPartial, endPartial, bedTime);
        expect(halfBabysitter.getTotalHoursWorked()).toBe(8);
    });

    describe('testing some conditional routes', function () {
        it('should return a rate just for pre and post midnight work, did not put the kids to bed', function () {
            var start = new Date(2016,11,31,17,0);
            var end = new Date(2017,0,1,4,0);
            var newYearsEve = new Babysitter(start,end);

            expect(newYearsEve.getBedTime()).not.toBeDefined();
            expect(newYearsEve.isValidStartTime()).toBeTruthy();
            expect(newYearsEve.isValidEndTime()).toBeTruthy();
            expect(newYearsEve.getUntilMidnightHours()).toBe(0);
            expect(newYearsEve.getPostMidnightHours()).toBe(4);
            expect(newYearsEve.getPreBedTimeHours()).toBe(7);
            expect(newYearsEve.calculateNightlyCharge()).toBe(148);
        });

        it('should return 0 if my start or end times are invalid', function () {
            var start = new Date(2016,11,31,14,0);
            var end = new Date(2017,0,1,4,0);
            var newYearsEve = new Babysitter(start,end);

            expect(newYearsEve.getTotalHoursWorked()).toBe(0);
            expect(newYearsEve.calculateNightlyCharge()).toBe(0);
        })
    })

});