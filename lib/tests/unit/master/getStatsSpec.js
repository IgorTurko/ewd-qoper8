var sinon = require('sinon');
var qoper8 = require('../../../ewd-qoper8');
var masterProcess = null;

describe("getStats", function () {
    beforeEach(function () {
        masterProcess = new qoper8.masterProcess();
    });

    it("should return correct process id", function () {
        var result = masterProcess.getStats();
        expect(result.pid).toEqual(process.pid);
    });

    it("should return correct memory rss", function () {
        var mem = process.memoryUsage();
        
        var result = masterProcess.getStats();

        expect(result.memory.rss).toEqual((mem.rss /1024 /1024).toFixed(2));
    });

    it("should return correct heap total", function () {
        var mem = process.memoryUsage();
        
        var result = masterProcess.getStats();

        expect(result.memory.heapTotal).toEqual((mem.heapTotal /1024 /1024).toFixed(2));
    });

    it("should return correct heap used", function () {
        var mem = process.memoryUsage();
        
        var result = masterProcess.getStats();

        expect(result.memory.heapUsed).toEqual((mem.heapUsed /1024 /1024).toFixed(2));
    });

    it("should return correct upTime", function () {
        var upTime = sinon.stub(masterProcess, "upTime");
        var fakedTime = "123";
        upTime.returns(fakedTime);
        
        var result = masterProcess.getStats();
        
        expect(result.uptime).toEqual(fakedTime);
    });

    it("should return correct worker process", function () {
        var getWorkerPids = sinon.stub(masterProcess, "getWorkerPids");
        var fakedWorkerProcesses = [1, 2, 3];
        getWorkerPids.returns(fakedWorkerProcesses);
        
        var result = masterProcess.getStats();
        
        expect(result.workerProcesses).toEqual(fakedWorkerProcesses);
    });

    it("should return correct queue length", function () {
        var fakedQueue = [1, 2, 3];
        masterProcess.queue = fakedQueue;
        
        var result = masterProcess.getStats();
        
        expect(result.queueLength).toEqual(fakedQueue.length);
    });
});