/**
 * ocrapi
 * The powerful Optical Character Recognition (OCR) APIs let you convert scanned images of pages into recognized text.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: unset
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/TableCellResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TableCellResult'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveOcrApiClient) {
      root.CloudmersiveOcrApiClient = {};
    }
    root.CloudmersiveOcrApiClient.TableRowResult = factory(root.CloudmersiveOcrApiClient.ApiClient, root.CloudmersiveOcrApiClient.TableCellResult);
  }
}(this, function(ApiClient, TableCellResult) {
  'use strict';




  /**
   * The TableRowResult model module.
   * @module model/TableRowResult
   * @version 1.2.4
   */

  /**
   * Constructs a new <code>TableRowResult</code>.
   * One row of data in the resulting table
   * @alias module:model/TableRowResult
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>TableRowResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TableRowResult} obj Optional instance to populate.
   * @return {module:model/TableRowResult} The populated <code>TableRowResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('TableRowCellsResult')) {
        obj['TableRowCellsResult'] = ApiClient.convertToType(data['TableRowCellsResult'], [TableCellResult]);
      }
    }
    return obj;
  }

  /**
   * Table cells in this row result
   * @member {Array.<module:model/TableCellResult>} TableRowCellsResult
   */
  exports.prototype['TableRowCellsResult'] = undefined;



  return exports;
}));


