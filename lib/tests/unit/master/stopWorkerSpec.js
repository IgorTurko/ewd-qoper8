var sinon = require('sinon');
var qoper8 = require('../../../ewd-qoper8');
var masterProcess = null;

describe("stopWorker", function () {
    beforeEach(function () {
        masterProcess = new qoper8.masterProcess();
    });

    it("should send message with type qoper8-exit", function () {
        var pid = "123";
        var process = {
            send: function() {}  
        };
        var processSpy = sinon.spy(process, "send");
        
        masterProcess.worker.process[pid] = process;

        var result = masterProcess.stopWorker(pid);
        
        expect(processSpy.withArgs({type: 'qoper8-exit'}).calledOnce);
    });
    
    it("should delete current process", function () {
        var pid = "123";
        var process = {
            send: function() {}  
        };
        var processSpy = sinon.spy(process, "send");
        
        masterProcess.worker.process[pid] = process;

        var result = masterProcess.stopWorker(pid);
        
        expect(masterProcess.worker.process[pid]).toBeUndefined();
    });
    
    it("should put all other pids to process list", function () {
        var pid1 = "1";
        var pid2 = "2";
        var process = {
            send: function() {}  
        };
        var processSpy = sinon.spy(process, "send");
        
        masterProcess.worker.process[pid1] = process;
        masterProcess.worker.process[pid2] = process;

        var result = masterProcess.stopWorker(pid1);
        
        expect(masterProcess.worker.list[0]).toEqual(pid2);
        expect(masterProcess.worker.list.length).toEqual(1);
    });

    it("should throw exception if pid not found", function () {
        expect(function() { masterProcess.stopWorker("321") }).toThrow();
    });
});