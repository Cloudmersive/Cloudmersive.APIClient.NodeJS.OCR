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
    define(['ApiClient', 'model/OcrPhotoTextElement'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OcrPhotoTextElement'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveOcrApiClient) {
      root.CloudmersiveOcrApiClient = {};
    }
    root.CloudmersiveOcrApiClient.TableCellResult = factory(root.CloudmersiveOcrApiClient.ApiClient, root.CloudmersiveOcrApiClient.OcrPhotoTextElement);
  }
}(this, function(ApiClient, OcrPhotoTextElement) {
  'use strict';




  /**
   * The TableCellResult model module.
   * @module model/TableCellResult
   * @version 1.3.2
   */

  /**
   * Constructs a new <code>TableCellResult</code>.
   * The recognition result of one cell in one row in a table of a form
   * @alias module:model/TableCellResult
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>TableCellResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TableCellResult} obj Optional instance to populate.
   * @return {module:model/TableCellResult} The populated <code>TableCellResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ColumnID')) {
        obj['ColumnID'] = ApiClient.convertToType(data['ColumnID'], 'String');
      }
      if (data.hasOwnProperty('CellValues')) {
        obj['CellValues'] = ApiClient.convertToType(data['CellValues'], [OcrPhotoTextElement]);
      }
    }
    return obj;
  }

  /**
   * The ID of the column
   * @member {String} ColumnID
   */
  exports.prototype['ColumnID'] = undefined;
  /**
   * Result cell value(s) extracted
   * @member {Array.<module:model/OcrPhotoTextElement>} CellValues
   */
  exports.prototype['CellValues'] = undefined;



  return exports;
}));


