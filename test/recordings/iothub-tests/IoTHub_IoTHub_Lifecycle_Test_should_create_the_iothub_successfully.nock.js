// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_SUBSCRIPTION_ID'] = '91d12660-3dec-467a-be2a-213b5544ddc0';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourcegroups/nodetestrg?api-version=2016-02-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourceGroups/nodetestrg\",\"name\":\"nodetestrg\",\"location\":\"eastus\",\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '173',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '764ac357-f50e-46df-a058-5e6f57d3a576',
  'x-ms-correlation-request-id': '764ac357-f50e-46df-a058-5e6f57d3a576',
  'x-ms-routing-request-id': 'WESTUS:20160715T184214Z:764ac357-f50e-46df-a058-5e6f57d3a576',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 15 Jul 2016 18:42:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourcegroups/nodetestrg?api-version=2016-02-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourceGroups/nodetestrg\",\"name\":\"nodetestrg\",\"location\":\"eastus\",\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '173',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '764ac357-f50e-46df-a058-5e6f57d3a576',
  'x-ms-correlation-request-id': '764ac357-f50e-46df-a058-5e6f57d3a576',
  'x-ms-routing-request-id': 'WESTUS:20160715T184214Z:764ac357-f50e-46df-a058-5e6f57d3a576',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 15 Jul 2016 18:42:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub?api-version=2016-02-03', '*')
  .reply(201, "{\"id\":\"/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub\",\"name\":\"nodeTestHub\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"eastus\",\"tags\":{},\"subscriptionid\":\"91d12660-3dec-467a-be2a-213b5544ddc0\",\"resourcegroup\":\"nodetestrg\",\"properties\":{\"state\":\"Activating\",\"provisioningState\":\"Accepted\",\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"operationsMonitoringProperties\":{\"events\":{\"C2DCommands\":\"Error\",\"DeviceTelemetry\":\"Error\",\"DeviceIdentityOperations\":\"Error\",\"Connections\":\"Error, Information\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":2}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '821',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/ODQ0MTM5N2EtZjFjNS00NjFkLTgxYjAtNDQyOGE1OWE0ODMz?api-version=2016-02-03&asyncinfo',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '4999',
  'x-ms-request-id': '481ffec7-1777-4eb4-9eb8-aca95e303945',
  'x-ms-correlation-request-id': '481ffec7-1777-4eb4-9eb8-aca95e303945',
  'x-ms-routing-request-id': 'WESTUS:20160715T184216Z:481ffec7-1777-4eb4-9eb8-aca95e303945',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 15 Jul 2016 18:42:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub?api-version=2016-02-03', '*')
  .reply(201, "{\"id\":\"/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub\",\"name\":\"nodeTestHub\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"eastus\",\"tags\":{},\"subscriptionid\":\"91d12660-3dec-467a-be2a-213b5544ddc0\",\"resourcegroup\":\"nodetestrg\",\"properties\":{\"state\":\"Activating\",\"provisioningState\":\"Accepted\",\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"operationsMonitoringProperties\":{\"events\":{\"C2DCommands\":\"Error\",\"DeviceTelemetry\":\"Error\",\"DeviceIdentityOperations\":\"Error\",\"Connections\":\"Error, Information\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":2}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '821',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/ODQ0MTM5N2EtZjFjNS00NjFkLTgxYjAtNDQyOGE1OWE0ODMz?api-version=2016-02-03&asyncinfo',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '4999',
  'x-ms-request-id': '481ffec7-1777-4eb4-9eb8-aca95e303945',
  'x-ms-correlation-request-id': '481ffec7-1777-4eb4-9eb8-aca95e303945',
  'x-ms-routing-request-id': 'WESTUS:20160715T184216Z:481ffec7-1777-4eb4-9eb8-aca95e303945',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 15 Jul 2016 18:42:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/ODQ0MTM5N2EtZjFjNS00NjFkLTgxYjAtNDQyOGE1OWE0ODMz?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14810',
  'x-ms-request-id': '2bddecc9-301b-42f2-b83f-1dede0eda66c',
  'x-ms-correlation-request-id': '2bddecc9-301b-42f2-b83f-1dede0eda66c',
  'x-ms-routing-request-id': 'WESTUS:20160715T184246Z:2bddecc9-301b-42f2-b83f-1dede0eda66c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 15 Jul 2016 18:42:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/ODQ0MTM5N2EtZjFjNS00NjFkLTgxYjAtNDQyOGE1OWE0ODMz?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14810',
  'x-ms-request-id': '2bddecc9-301b-42f2-b83f-1dede0eda66c',
  'x-ms-correlation-request-id': '2bddecc9-301b-42f2-b83f-1dede0eda66c',
  'x-ms-routing-request-id': 'WESTUS:20160715T184246Z:2bddecc9-301b-42f2-b83f-1dede0eda66c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 15 Jul 2016 18:42:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/ODQ0MTM5N2EtZjFjNS00NjFkLTgxYjAtNDQyOGE1OWE0ODMz?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14888',
  'x-ms-request-id': 'b5043002-e542-42db-85dc-035507f942af',
  'x-ms-correlation-request-id': 'b5043002-e542-42db-85dc-035507f942af',
  'x-ms-routing-request-id': 'WESTUS:20160715T184317Z:b5043002-e542-42db-85dc-035507f942af',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 15 Jul 2016 18:43:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/ODQ0MTM5N2EtZjFjNS00NjFkLTgxYjAtNDQyOGE1OWE0ODMz?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14888',
  'x-ms-request-id': 'b5043002-e542-42db-85dc-035507f942af',
  'x-ms-correlation-request-id': 'b5043002-e542-42db-85dc-035507f942af',
  'x-ms-routing-request-id': 'WESTUS:20160715T184317Z:b5043002-e542-42db-85dc-035507f942af',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 15 Jul 2016 18:43:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/ODQ0MTM5N2EtZjFjNS00NjFkLTgxYjAtNDQyOGE1OWE0ODMz?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14895',
  'x-ms-request-id': '309253b8-9e90-436d-8852-633902af98e0',
  'x-ms-correlation-request-id': '309253b8-9e90-436d-8852-633902af98e0',
  'x-ms-routing-request-id': 'WESTUS:20160715T184347Z:309253b8-9e90-436d-8852-633902af98e0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 15 Jul 2016 18:43:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/ODQ0MTM5N2EtZjFjNS00NjFkLTgxYjAtNDQyOGE1OWE0ODMz?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14895',
  'x-ms-request-id': '309253b8-9e90-436d-8852-633902af98e0',
  'x-ms-correlation-request-id': '309253b8-9e90-436d-8852-633902af98e0',
  'x-ms-routing-request-id': 'WESTUS:20160715T184347Z:309253b8-9e90-436d-8852-633902af98e0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 15 Jul 2016 18:43:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/ODQ0MTM5N2EtZjFjNS00NjFkLTgxYjAtNDQyOGE1OWE0ODMz?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14806',
  'x-ms-request-id': '52b9db2b-1e36-40b2-9b53-429b7cd1879f',
  'x-ms-correlation-request-id': '52b9db2b-1e36-40b2-9b53-429b7cd1879f',
  'x-ms-routing-request-id': 'WESTUS:20160715T184417Z:52b9db2b-1e36-40b2-9b53-429b7cd1879f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 15 Jul 2016 18:44:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/ODQ0MTM5N2EtZjFjNS00NjFkLTgxYjAtNDQyOGE1OWE0ODMz?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14806',
  'x-ms-request-id': '52b9db2b-1e36-40b2-9b53-429b7cd1879f',
  'x-ms-correlation-request-id': '52b9db2b-1e36-40b2-9b53-429b7cd1879f',
  'x-ms-routing-request-id': 'WESTUS:20160715T184417Z:52b9db2b-1e36-40b2-9b53-429b7cd1879f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 15 Jul 2016 18:44:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/ODQ0MTM5N2EtZjFjNS00NjFkLTgxYjAtNDQyOGE1OWE0ODMz?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': '2fc072da-3574-4e5d-bcc8-5881ab0365fa',
  'x-ms-correlation-request-id': '2fc072da-3574-4e5d-bcc8-5881ab0365fa',
  'x-ms-routing-request-id': 'CENTRALUS:20160715T184448Z:2fc072da-3574-4e5d-bcc8-5881ab0365fa',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 15 Jul 2016 18:44:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/ODQ0MTM5N2EtZjFjNS00NjFkLTgxYjAtNDQyOGE1OWE0ODMz?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': '2fc072da-3574-4e5d-bcc8-5881ab0365fa',
  'x-ms-correlation-request-id': '2fc072da-3574-4e5d-bcc8-5881ab0365fa',
  'x-ms-routing-request-id': 'CENTRALUS:20160715T184448Z:2fc072da-3574-4e5d-bcc8-5881ab0365fa',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 15 Jul 2016 18:44:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/ODQ0MTM5N2EtZjFjNS00NjFkLTgxYjAtNDQyOGE1OWE0ODMz?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-request-id': '1508fe9a-143c-4a5b-b5f0-444cea26808e',
  'x-ms-correlation-request-id': '1508fe9a-143c-4a5b-b5f0-444cea26808e',
  'x-ms-routing-request-id': 'CENTRALUS:20160715T184519Z:1508fe9a-143c-4a5b-b5f0-444cea26808e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 15 Jul 2016 18:45:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/ODQ0MTM5N2EtZjFjNS00NjFkLTgxYjAtNDQyOGE1OWE0ODMz?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-request-id': '1508fe9a-143c-4a5b-b5f0-444cea26808e',
  'x-ms-correlation-request-id': '1508fe9a-143c-4a5b-b5f0-444cea26808e',
  'x-ms-routing-request-id': 'CENTRALUS:20160715T184519Z:1508fe9a-143c-4a5b-b5f0-444cea26808e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 15 Jul 2016 18:45:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/ODQ0MTM5N2EtZjFjNS00NjFkLTgxYjAtNDQyOGE1OWE0ODMz?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14881',
  'x-ms-request-id': 'c9d00562-10d4-4d66-b33a-9b299a2ba0fa',
  'x-ms-correlation-request-id': 'c9d00562-10d4-4d66-b33a-9b299a2ba0fa',
  'x-ms-routing-request-id': 'WESTUS:20160715T184549Z:c9d00562-10d4-4d66-b33a-9b299a2ba0fa',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 15 Jul 2016 18:45:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/ODQ0MTM5N2EtZjFjNS00NjFkLTgxYjAtNDQyOGE1OWE0ODMz?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14881',
  'x-ms-request-id': 'c9d00562-10d4-4d66-b33a-9b299a2ba0fa',
  'x-ms-correlation-request-id': 'c9d00562-10d4-4d66-b33a-9b299a2ba0fa',
  'x-ms-routing-request-id': 'WESTUS:20160715T184549Z:c9d00562-10d4-4d66-b33a-9b299a2ba0fa',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 15 Jul 2016 18:45:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/ODQ0MTM5N2EtZjFjNS00NjFkLTgxYjAtNDQyOGE1OWE0ODMz?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14821',
  'x-ms-request-id': '14949bfe-9922-4bf2-b568-97e5fcf419b8',
  'x-ms-correlation-request-id': '14949bfe-9922-4bf2-b568-97e5fcf419b8',
  'x-ms-routing-request-id': 'WESTUS:20160715T184619Z:14949bfe-9922-4bf2-b568-97e5fcf419b8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 15 Jul 2016 18:46:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/ODQ0MTM5N2EtZjFjNS00NjFkLTgxYjAtNDQyOGE1OWE0ODMz?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14821',
  'x-ms-request-id': '14949bfe-9922-4bf2-b568-97e5fcf419b8',
  'x-ms-correlation-request-id': '14949bfe-9922-4bf2-b568-97e5fcf419b8',
  'x-ms-routing-request-id': 'WESTUS:20160715T184619Z:14949bfe-9922-4bf2-b568-97e5fcf419b8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 15 Jul 2016 18:46:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/ODQ0MTM5N2EtZjFjNS00NjFkLTgxYjAtNDQyOGE1OWE0ODMz?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-request-id': 'a6d210a9-c553-44a2-9b76-316d846e15b7',
  'x-ms-correlation-request-id': 'a6d210a9-c553-44a2-9b76-316d846e15b7',
  'x-ms-routing-request-id': 'CENTRALUS:20160715T184650Z:a6d210a9-c553-44a2-9b76-316d846e15b7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 15 Jul 2016 18:46:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/operationResults/ODQ0MTM5N2EtZjFjNS00NjFkLTgxYjAtNDQyOGE1OWE0ODMz?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-request-id': 'a6d210a9-c553-44a2-9b76-316d846e15b7',
  'x-ms-correlation-request-id': 'a6d210a9-c553-44a2-9b76-316d846e15b7',
  'x-ms-routing-request-id': 'CENTRALUS:20160715T184650Z:a6d210a9-c553-44a2-9b76-316d846e15b7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 15 Jul 2016 18:46:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub?api-version=2016-02-03')
  .reply(200, "{\"id\":\"/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub\",\"name\":\"nodeTestHub\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"eastus\",\"tags\":{},\"subscriptionid\":\"91d12660-3dec-467a-be2a-213b5544ddc0\",\"resourcegroup\":\"nodetestrg\",\"etag\":\"AAAAAABFtWA=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"hostName\":\"nodeTestHub.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":4,\"partitionIds\":[\"0\",\"1\",\"2\",\"3\"],\"path\":\"nodeTestHub\",\"endpoint\":\"sb://iothub-ns-nodetesthu-52686-43f7d9c1b5.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":4,\"partitionIds\":[\"0\",\"1\",\"2\",\"3\"],\"path\":\"nodeTestHub-operationMonitoring\",\"endpoint\":\"sb://iothub-ns-nodetesthu-52686-43f7d9c1b5.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"operationsMonitoringProperties\":{\"events\":{\"C2DCommands\":\"Error\",\"DeviceTelemetry\":\"Error\",\"DeviceIdentityOperations\":\"Error\",\"Connections\":\"Error, Information\",\"None\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":2}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1585',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': 'e1e26d24-c86c-4288-9dc8-51e68c90c33e',
  'x-ms-correlation-request-id': 'e1e26d24-c86c-4288-9dc8-51e68c90c33e',
  'x-ms-routing-request-id': 'CENTRALUS:20160715T184650Z:e1e26d24-c86c-4288-9dc8-51e68c90c33e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 15 Jul 2016 18:46:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub?api-version=2016-02-03')
  .reply(200, "{\"id\":\"/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub\",\"name\":\"nodeTestHub\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"eastus\",\"tags\":{},\"subscriptionid\":\"91d12660-3dec-467a-be2a-213b5544ddc0\",\"resourcegroup\":\"nodetestrg\",\"etag\":\"AAAAAABFtWA=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"hostName\":\"nodeTestHub.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":4,\"partitionIds\":[\"0\",\"1\",\"2\",\"3\"],\"path\":\"nodeTestHub\",\"endpoint\":\"sb://iothub-ns-nodetesthu-52686-43f7d9c1b5.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":4,\"partitionIds\":[\"0\",\"1\",\"2\",\"3\"],\"path\":\"nodeTestHub-operationMonitoring\",\"endpoint\":\"sb://iothub-ns-nodetesthu-52686-43f7d9c1b5.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"operationsMonitoringProperties\":{\"events\":{\"C2DCommands\":\"Error\",\"DeviceTelemetry\":\"Error\",\"DeviceIdentityOperations\":\"Error\",\"Connections\":\"Error, Information\",\"None\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":2}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1585',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': 'e1e26d24-c86c-4288-9dc8-51e68c90c33e',
  'x-ms-correlation-request-id': 'e1e26d24-c86c-4288-9dc8-51e68c90c33e',
  'x-ms-routing-request-id': 'CENTRALUS:20160715T184650Z:e1e26d24-c86c-4288-9dc8-51e68c90c33e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 15 Jul 2016 18:46:49 GMT',
  connection: 'close' });
 return result; }]];