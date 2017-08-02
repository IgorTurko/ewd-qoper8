var qoper8 = require('../../../ewd-qoper8');
var masterProcess, message = null;

describe("addToQueue", function () {
    beforeEach(function () {
        masterProcess = new qoper8.masterProcess();
        message = {
            type: 'qoper8-test',
            messageNo: 1,
            time: new Date().getTime(),
            contents: {
                hello: 'world',
                a: 12345
            }
        };
    });

    it("should add message to queue", function () {
        spyOn(masterProcess, 'emit').and.returnValue(null);

        masterProcess.addToQueue(message);
        expect(masterProcess.queue.length).toEqual(1);
    })

    it("should process Queue", function () {
        spyOn(masterProcess, 'emit').and.returnValue(null);
        spyOn(masterProcess, 'processQueue');

        masterProcess.addToQueue(message);
        expect(masterProcess.processQueue.calls.count()).toEqual(1);
    })

    it("should not add message to queue", function () {
        spyOn(masterProcess, 'emit').and.returnValue({});

        masterProcess.addToQueue(message);
        expect(masterProcess.queue.length).toEqual(0);
    })

    it("should not process Queue", function () {
        spyOn(masterProcess, 'emit').and.returnValue({});
        spyOn(masterProcess, 'processQueue');

        masterProcess.addToQueue(message);
        expect(masterProcess.processQueue.calls.count()).toEqual(0);
    })
});