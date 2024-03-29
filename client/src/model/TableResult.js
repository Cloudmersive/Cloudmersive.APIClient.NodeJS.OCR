/**
 * ocrapi
 * The powerful Optical Character Recognition (OCR) APIs let you convert scanned images of pages into recognized text.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/FormTableDefinition', 'model/TableRowResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FormTableDefinition'), require('./TableRowResult'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveOcrApiClient) {
      root.CloudmersiveOcrApiClient = {};
    }
    root.CloudmersiveOcrApiClient.TableResult = factory(root.CloudmersiveOcrApiClient.ApiClient, root.CloudmersiveOcrApiClient.FormTableDefinition, root.CloudmersiveOcrApiClient.TableRowResult);
  }
}(this, function(ApiClient, FormTableDefinition, TableRowResult) {
  'use strict';




  /**
   * The TableResult model module.
   * @module model/TableResult
   * @version 2.0.1
   */

  /**
   * Constructs a new <code>TableResult</code>.
   * The result of reading a table via OCR from a form
   * @alias module:model/TableResult
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>TableResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TableResult} obj Optional instance to populate.
   * @return {module:model/TableResult} The populated <code>TableResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('TableDefinition')) {
        obj['TableDefinition'] = FormTableDefinition.constructFromObject(data['TableDefinition']);
      }
      if (data.hasOwnProperty('TableRowsResult')) {
        obj['TableRowsResult'] = ApiClient.convertToType(data['TableRowsResult'], [TableRowResult]);
      }
    }
    return obj;
  }

  /**
   * The input table definition for reference
   * @member {module:model/FormTableDefinition} TableDefinition
   */
  exports.prototype['TableDefinition'] = undefined;
  /**
   * Rows of data in the table
   * @member {Array.<module:model/TableRowResult>} TableRowsResult
   */
  exports.prototype['TableRowsResult'] = undefined;



  return exports;
}));


