var qoper8 = require('../../../ewd-qoper8');
var masterProcess = null;

describe("getWorkerPids", function () {
    beforeEach(function () {
        masterProcess = new qoper8.masterProcess();
    });

    it("should no show Pids", function () {
        var result = masterProcess.getWorkerPids();
        expect(result.length).toEqual(0);
    });

    it("should show Pids", function () {
        masterProcess.worker.list = [1, 2, 3];
        var result = masterProcess.getWorkerPids();
        expect(result.length).toEqual(3);
        expect(result[2]).toEqual(3);
    });
});