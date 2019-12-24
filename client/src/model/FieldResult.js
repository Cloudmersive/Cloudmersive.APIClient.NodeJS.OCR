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
    define(['ApiClient', 'model/FormFieldDefinition', 'model/OcrPhotoTextElement'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FormFieldDefinition'), require('./OcrPhotoTextElement'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveOcrApiClient) {
      root.CloudmersiveOcrApiClient = {};
    }
    root.CloudmersiveOcrApiClient.FieldResult = factory(root.CloudmersiveOcrApiClient.ApiClient, root.CloudmersiveOcrApiClient.FormFieldDefinition, root.CloudmersiveOcrApiClient.OcrPhotoTextElement);
  }
}(this, function(ApiClient, FormFieldDefinition, OcrPhotoTextElement) {
  'use strict';




  /**
   * The FieldResult model module.
   * @module model/FieldResult
   * @version 1.3.1
   */

  /**
   * Constructs a new <code>FieldResult</code>.
   * A pairing target field and actual value read from form
   * @alias module:model/FieldResult
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>FieldResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FieldResult} obj Optional instance to populate.
   * @return {module:model/FieldResult} The populated <code>FieldResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('TargetField')) {
        obj['TargetField'] = FormFieldDefinition.constructFromObject(data['TargetField']);
      }
      if (data.hasOwnProperty('FieldValues')) {
        obj['FieldValues'] = ApiClient.convertToType(data['FieldValues'], [OcrPhotoTextElement]);
      }
    }
    return obj;
  }

  /**
   * Target field to extract from the form
   * @member {module:model/FormFieldDefinition} TargetField
   */
  exports.prototype['TargetField'] = undefined;
  /**
   * Result field value(s) extracted
   * @member {Array.<module:model/OcrPhotoTextElement>} FieldValues
   */
  exports.prototype['FieldValues'] = undefined;



  return exports;
}));


