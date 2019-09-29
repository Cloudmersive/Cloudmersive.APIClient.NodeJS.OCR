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
    define(['ApiClient', 'model/FormTableColumnDefinition'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FormTableColumnDefinition'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveOcrApiClient) {
      root.CloudmersiveOcrApiClient = {};
    }
    root.CloudmersiveOcrApiClient.FormTableDefinition = factory(root.CloudmersiveOcrApiClient.ApiClient, root.CloudmersiveOcrApiClient.FormTableColumnDefinition);
  }
}(this, function(ApiClient, FormTableColumnDefinition) {
  'use strict';




  /**
   * The FormTableDefinition model module.
   * @module model/FormTableDefinition
   * @version 1.2.4
   */

  /**
   * Constructs a new <code>FormTableDefinition</code>.
   * Definition of a form table for OCR data extraction from images
   * @alias module:model/FormTableDefinition
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>FormTableDefinition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FormTableDefinition} obj Optional instance to populate.
   * @return {module:model/FormTableDefinition} The populated <code>FormTableDefinition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('TableID')) {
        obj['TableID'] = ApiClient.convertToType(data['TableID'], 'String');
      }
      if (data.hasOwnProperty('ColumnDefinitions')) {
        obj['ColumnDefinitions'] = ApiClient.convertToType(data['ColumnDefinitions'], [FormTableColumnDefinition]);
      }
      if (data.hasOwnProperty('TargetTableHeight_Relative')) {
        obj['TargetTableHeight_Relative'] = ApiClient.convertToType(data['TargetTableHeight_Relative'], 'Number');
      }
      if (data.hasOwnProperty('TargetRowHeight_Relative')) {
        obj['TargetRowHeight_Relative'] = ApiClient.convertToType(data['TargetRowHeight_Relative'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Optional; the ID of the table
   * @member {String} TableID
   */
  exports.prototype['TableID'] = undefined;
  /**
   * Definition of the columns in the table
   * @member {Array.<module:model/FormTableColumnDefinition>} ColumnDefinitions
   */
  exports.prototype['ColumnDefinitions'] = undefined;
  /**
   * Optional - scale factor for target table height - relative to maximum height of headers of columns
   * @member {Number} TargetTableHeight_Relative
   */
  exports.prototype['TargetTableHeight_Relative'] = undefined;
  /**
   * Optional - scale factor for target row height - relative to height of column header
   * @member {Number} TargetRowHeight_Relative
   */
  exports.prototype['TargetRowHeight_Relative'] = undefined;



  return exports;
}));


