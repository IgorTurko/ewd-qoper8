var sinon = require('sinon');
var qoper8 = require('../../../ewd-qoper8');
var workerProcess, message, type, socketId, process = null;

describe("sendMessage", function () {
    beforeEach(function () {
        workerProcess = new qoper8.workerProcess();
        process = {
             send: sinon.stub()
        };
        
        message = {
            type: 'qoper8-test',
            messageNo: 1,
            time: new Date().getTime(),
            contents: {
                hello: 'world',
                a: 12345
            }
        };
        type = "a";
        socketId = 123;
    });

    it("should send message", function () {
        process = {
            send: sinon.mock()
        };
        
        workerProcess.sendMessage(type, message, socketId);

        assertTrue(process.send.called);
    })
});