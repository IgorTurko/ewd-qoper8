var qoper8 = require('../../../ewd-qoper8');
var masterProcess = null;

describe("upTime", function () {
    beforeEach(function () {
        masterProcess = new qoper8.masterProcess();
    });

    it("should show 1 second", function () {
        masterProcess.startTime = new Date().getTime() - 1000;
        var result = masterProcess.upTime();
        expect(result).toEqual("0 days 0:00:01");
    });

    it("should show 12 minutes and 1 second", function () {
        masterProcess.startTime = new Date().getTime() - 1000 * 60 * 12 - 1000;
        var result = masterProcess.upTime();
        expect(result).toEqual("0 days 0:12:01");
    });

    it("should show 1 day 12 minutes and 1 second", function () {
        masterProcess.startTime = new Date().getTime() - 1000 * 60 * 60 * 24 - 1000  * 60 * 12 - 1000;
        var result = masterProcess.upTime();
        expect(result).toEqual("1 days 0:12:01");
    });

    //todo: Rob we need to fix this, to show 0 for future time
    it("should show -1 days -1:0-1:0-1'", function () {
        masterProcess.startTime = new Date().getTime() + 1000;
        var result = masterProcess.upTime();
        expect(result).toEqual("-1 days -1:0-1:0-1");
    });
});