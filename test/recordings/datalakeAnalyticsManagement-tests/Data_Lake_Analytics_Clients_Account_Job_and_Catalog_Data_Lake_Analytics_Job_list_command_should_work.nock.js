// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadla9247.azuredatalakeanalytics.net:443')
  .get('/Jobs?api-version=2016-11-01')
  .reply(200, "{\"value\":[{\"jobId\":\"4438f47f-8cba-4e3c-b377-9d63f742ab4b\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2016-11-11T00:40:39.345921+00:00\",\"startTime\":\"2016-11-11T00:41:08.7076271+00:00\",\"endTime\":\"2016-11-11T00:41:12.5827019+00:00\",\"state\":\"Ended\",\"result\":\"Succeeded\"},{\"jobId\":\"db73299e-582b-47bc-9a80-ce453e84c243\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2016-11-11T00:41:49.7251299+00:00\",\"endTime\":\"2016-11-11T00:41:50.3815412+00:00\",\"state\":\"Ended\",\"result\":\"Cancelled\"}]}", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '11e1b40e-103e-401a-8b82-f51dd065d27f',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 11 Nov 2016 00:41:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla9247.azuredatalakeanalytics.net:443')
  .get('/Jobs?api-version=2016-11-01')
  .reply(200, "{\"value\":[{\"jobId\":\"4438f47f-8cba-4e3c-b377-9d63f742ab4b\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2016-11-11T00:40:39.345921+00:00\",\"startTime\":\"2016-11-11T00:41:08.7076271+00:00\",\"endTime\":\"2016-11-11T00:41:12.5827019+00:00\",\"state\":\"Ended\",\"result\":\"Succeeded\"},{\"jobId\":\"db73299e-582b-47bc-9a80-ce453e84c243\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2016-11-11T00:41:49.7251299+00:00\",\"endTime\":\"2016-11-11T00:41:50.3815412+00:00\",\"state\":\"Ended\",\"result\":\"Cancelled\"}]}", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '11e1b40e-103e-401a-8b82-f51dd065d27f',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 11 Nov 2016 00:41:50 GMT',
  connection: 'close' });
 return result; }]];