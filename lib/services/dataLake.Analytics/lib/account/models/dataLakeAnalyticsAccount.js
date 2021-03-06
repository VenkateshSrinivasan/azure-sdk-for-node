/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the DataLakeAnalyticsAccount class.
 * @constructor
 * A Data Lake Analytics account object, containing all information associated
 * with the named Data Lake Analytics account.
 *
 * @member {string} [provisioningState] the provisioning status of the Data
 * Lake Analytics account. Possible values include: 'Failed', 'Creating',
 * 'Running', 'Succeeded', 'Patching', 'Suspending', 'Resuming', 'Deleting',
 * 'Deleted'
 * 
 * @member {string} [state] the state of the Data Lake Analytics account.
 * Possible values include: 'Active', 'Suspended'
 * 
 * @member {string} defaultDataLakeStoreAccount the default data lake storage
 * account associated with this Data Lake Analytics account.
 * 
 * @member {number} [maxDegreeOfParallelism] the maximum supported degree of
 * parallelism for this account. Default value: 30 .
 * 
 * @member {number} [queryStoreRetention] the number of days that job metadata
 * is retained. Default value: 30 .
 * 
 * @member {number} [maxJobCount] the maximum supported jobs running under the
 * account at the same time. Default value: 3 .
 * 
 * @member {number} [systemMaxDegreeOfParallelism] the system defined maximum
 * supported degree of parallelism for this account, which restricts the
 * maximum value of parallelism the user can set for the account..
 * 
 * @member {number} [systemMaxJobCount] the system defined maximum supported
 * jobs running under the account at the same time, which restricts the maximum
 * number of running jobs the user can set for the account.
 * 
 * @member {array} dataLakeStoreAccounts the list of Data Lake storage accounts
 * associated with this account.
 * 
 * @member {array} [storageAccounts] the list of Azure Blob storage accounts
 * associated with this account.
 * 
 * @member {date} [creationTime] the account creation time.
 * 
 * @member {date} [lastModifiedTime] the account last modified time.
 * 
 * @member {string} [endpoint] the full CName endpoint for this account.
 * 
 */
function DataLakeAnalyticsAccount() {
  DataLakeAnalyticsAccount['super_'].call(this);
}

util.inherits(DataLakeAnalyticsAccount, models['Resource']);

/**
 * Defines the metadata of DataLakeAnalyticsAccount
 *
 * @returns {object} metadata of DataLakeAnalyticsAccount
 *
 */
DataLakeAnalyticsAccount.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'DataLakeAnalyticsAccount',
    type: {
      name: 'Composite',
      className: 'DataLakeAnalyticsAccount',
      modelProperties: {
        id: {
          required: false,
          readOnly: true,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        name: {
          required: false,
          readOnly: true,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        type: {
          required: false,
          readOnly: true,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        location: {
          required: true,
          serializedName: 'location',
          type: {
            name: 'String'
          }
        },
        tags: {
          required: false,
          serializedName: 'tags',
          type: {
            name: 'Dictionary',
            value: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        },
        provisioningState: {
          required: false,
          readOnly: true,
          serializedName: 'properties.provisioningState',
          type: {
            name: 'Enum',
            allowedValues: [ 'Failed', 'Creating', 'Running', 'Succeeded', 'Patching', 'Suspending', 'Resuming', 'Deleting', 'Deleted' ]
          }
        },
        state: {
          required: false,
          readOnly: true,
          serializedName: 'properties.state',
          type: {
            name: 'Enum',
            allowedValues: [ 'Active', 'Suspended' ]
          }
        },
        defaultDataLakeStoreAccount: {
          required: true,
          serializedName: 'properties.defaultDataLakeStoreAccount',
          type: {
            name: 'String'
          }
        },
        maxDegreeOfParallelism: {
          required: false,
          serializedName: 'properties.maxDegreeOfParallelism',
          defaultValue: 30,
          constraints: {
            InclusiveMinimum: 1
          },
          type: {
            name: 'Number'
          }
        },
        queryStoreRetention: {
          required: false,
          serializedName: 'properties.queryStoreRetention',
          defaultValue: 30,
          constraints: {
            InclusiveMaximum: 180,
            InclusiveMinimum: 1
          },
          type: {
            name: 'Number'
          }
        },
        maxJobCount: {
          required: false,
          serializedName: 'properties.maxJobCount',
          defaultValue: 3,
          constraints: {
            InclusiveMinimum: 1
          },
          type: {
            name: 'Number'
          }
        },
        systemMaxDegreeOfParallelism: {
          required: false,
          readOnly: true,
          serializedName: 'properties.systemMaxDegreeOfParallelism',
          type: {
            name: 'Number'
          }
        },
        systemMaxJobCount: {
          required: false,
          readOnly: true,
          serializedName: 'properties.systemMaxJobCount',
          type: {
            name: 'Number'
          }
        },
        dataLakeStoreAccounts: {
          required: true,
          serializedName: 'properties.dataLakeStoreAccounts',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'DataLakeStoreAccountInfoElementType',
                type: {
                  name: 'Composite',
                  className: 'DataLakeStoreAccountInfo'
                }
            }
          }
        },
        storageAccounts: {
          required: false,
          serializedName: 'properties.storageAccounts',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'StorageAccountInfoElementType',
                type: {
                  name: 'Composite',
                  className: 'StorageAccountInfo'
                }
            }
          }
        },
        creationTime: {
          required: false,
          readOnly: true,
          serializedName: 'properties.creationTime',
          type: {
            name: 'DateTime'
          }
        },
        lastModifiedTime: {
          required: false,
          readOnly: true,
          serializedName: 'properties.lastModifiedTime',
          type: {
            name: 'DateTime'
          }
        },
        endpoint: {
          required: false,
          readOnly: true,
          serializedName: 'properties.endpoint',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = DataLakeAnalyticsAccount;
