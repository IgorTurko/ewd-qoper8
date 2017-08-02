var qoper8 = require('../../../ewd-qoper8');
var masterProcess = null;

describe("version", function () {
    beforeEach(function () {
        masterProcess = new qoper8.masterProcess();
    });

    it("should show module name, build and date", function () {
        masterProcess.moduleName = "Test";
        masterProcess.build.no = "123";
        masterProcess.build.date = "12/12/12"
        var result = masterProcess.version();
        expect(result).toEqual(masterProcess.moduleName + ' Build ' + masterProcess.build.no + '; ' + masterProcess.build.date);
    });
});