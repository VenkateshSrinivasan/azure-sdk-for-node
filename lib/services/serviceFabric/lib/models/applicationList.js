/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the ApplicationList class.
 * @constructor
 * The list of the application
 * @member {string} [continuationToken]
 * 
 * @member {array} [items]
 * 
 */
function ApplicationList() {
}

/**
 * Defines the metadata of ApplicationList
 *
 * @returns {object} metadata of ApplicationList
 *
 */
ApplicationList.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ApplicationList',
    type: {
      name: 'Composite',
      className: 'ApplicationList',
      modelProperties: {
        continuationToken: {
          required: false,
          serializedName: 'ContinuationToken',
          type: {
            name: 'String'
          }
        },
        items: {
          required: false,
          serializedName: 'Items',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'ApplicationElementType',
                type: {
                  name: 'Composite',
                  className: 'Application'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = ApplicationList;
