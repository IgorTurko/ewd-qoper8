var sinon = require('sinon');
var qoper8 = require('../../../ewd-qoper8');
var masterProcess = null;

describe("stopWorker", function () {
    beforeEach(function () {
        masterProcess = new qoper8.masterProcess();
    });
    
    it("should send message with type qoper8-exit and specified id", function () {
        var pid = "123", id = "321";
        var process = {
            send: function() {}  
        };
        var processSpy = sinon.spy(process, "send");
        
        masterProcess.worker.process[pid] = process;

        var result = masterProcess.getWorkerStats(pid, id);
        
        expect(processSpy.withArgs({type: 'qoper8-getStats', id: id}).calledOnce);
    });

    it("should throw exception if pid not found", function () {
        expect(function() { masterProcess.getWorkerStats("1") }).toThrow();
    });
});