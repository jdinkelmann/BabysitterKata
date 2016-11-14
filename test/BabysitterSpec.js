describe('Babysitter Kata', function () {

    it('should define the Babysitter', function () {
        var babysitter = new Babysitter();
        expect(babysitter).toBeDefined();
    });

    it('should return a start time given a valid start time', function () {
        var today = new Date();
        var babysitter = new Babysitter(today);
        expect(babysitter.getStartTime()).toEqual(today);
    });
});