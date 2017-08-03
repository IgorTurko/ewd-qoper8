Here is description of how this tests works.

Tests folder contains two types of tests: integration and unit tests.
In this part of job we try to work only with unit test. Integration test must be added later.

We use Jasmine as a testing framework and sinon as a framework for stub and mocks.
We have configuration for unit tests inside tests/unit/config.
To run test just run: "npm run test"

I try to create tests for this masterProcess. I take all functions from top to buttom:

proto.version = require('./master/proto/version');
proto.upTime = require('./master/proto/upTime');
proto.getWorkerPids = require('./master/proto/getWorkerPids');
proto.getStats = require('./master/proto/getStats');
proto.start = require('./master/proto/start');
proto.stop = require('./master/proto/stop');
proto.startWorker = require('./master/proto/startWorker');
proto.stopWorker = require('./master/proto/stopWorker');
proto.getWorkerStats = require('./master/proto/getWorkerStats');
proto.getAllWorkerStats = require('./master/proto/getAllWorkerStats');
proto.getWorkerAvailability = require('./master/proto/getWorkerAvailability');
proto.addToQueue = require('./master/proto/addToQueue');
proto.processQueue = require('./master/proto/processQueue');
proto.getWorker = require('./master/proto/getWorker');
proto.sendRequestToWorker = require('./master/proto/sendRequestToWorker');
proto.toggleLogging = require('./master/proto/toggleLogging');
proto.setWorkerPoolSize = require('./master/proto/setWorkerPoolSize');
proto.setWorkerIdleLimit = require('./master/proto/setWorkerIdleLimit');
proto.handleMessage = require('./master/proto/handleMessage');
proto.handleStats = require('./master/proto/handleStats');

As we agreed with Tony we are not create tests for large files, only for small. That is why I create tests for:
proto.version = require('./master/proto/version');
proto.upTime = require('./master/proto/upTime');
proto.getWorkerPids = require('./master/proto/getWorkerPids');
proto.getStats = require('./master/proto/getStats');
proto.stopWorker = require('./master/proto/stopWorker');
proto.getWorkerStats = require('./master/proto/getWorkerStats');
proto.addToQueue = require('./master/proto/addToQueue');

During testing I found several bugs that we can fix.
1) upTime - should return 0 if startTime > then current time;
2) getWorkerStats - can throw exception if process does not exists by pid;
3) stopWorker - can throw exception if process does not exists by pid;