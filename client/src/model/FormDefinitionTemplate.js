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
    define(['ApiClient', 'model/FormFieldDefinition', 'model/FormTableDefinition'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FormFieldDefinition'), require('./FormTableDefinition'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveOcrApiClient) {
      root.CloudmersiveOcrApiClient = {};
    }
    root.CloudmersiveOcrApiClient.FormDefinitionTemplate = factory(root.CloudmersiveOcrApiClient.ApiClient, root.CloudmersiveOcrApiClient.FormFieldDefinition, root.CloudmersiveOcrApiClient.FormTableDefinition);
  }
}(this, function(ApiClient, FormFieldDefinition, FormTableDefinition) {
  'use strict';




  /**
   * The FormDefinitionTemplate model module.
   * @module model/FormDefinitionTemplate
   * @version 1.2.4
   */

  /**
   * Constructs a new <code>FormDefinitionTemplate</code>.
   * Definition of a form template; use a form template definition to recognize the fields in a form with Cloudmersive OCR
   * @alias module:model/FormDefinitionTemplate
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>FormDefinitionTemplate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FormDefinitionTemplate} obj Optional instance to populate.
   * @return {module:model/FormDefinitionTemplate} The populated <code>FormDefinitionTemplate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('FieldDefinitions')) {
        obj['FieldDefinitions'] = ApiClient.convertToType(data['FieldDefinitions'], [FormFieldDefinition]);
      }
      if (data.hasOwnProperty('TableDefinitions')) {
        obj['TableDefinitions'] = ApiClient.convertToType(data['TableDefinitions'], [FormTableDefinition]);
      }
    }
    return obj;
  }

  /**
   * Field definitions in the template; a field is comprised of a key/value pair
   * @member {Array.<module:model/FormFieldDefinition>} FieldDefinitions
   */
  exports.prototype['FieldDefinitions'] = undefined;
  /**
   * Table definitions in the template; a table is comprised of columns and rows and exists in a 2-dimensional layout; a common example of a table would be an invoice
   * @member {Array.<module:model/FormTableDefinition>} TableDefinitions
   */
  exports.prototype['TableDefinitions'] = undefined;



  return exports;
}));


