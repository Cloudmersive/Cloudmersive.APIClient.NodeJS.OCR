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
    root.CloudmersiveOcrApiClient.PhotoToWordsWithLocationResult = factory(root.CloudmersiveOcrApiClient.ApiClient, root.CloudmersiveOcrApiClient.OcrPhotoTextElement);
  }
}(this, function(ApiClient, OcrPhotoTextElement) {
  'use strict';




  /**
   * The PhotoToWordsWithLocationResult model module.
   * @module model/PhotoToWordsWithLocationResult
   * @version 2.0.1
   */

  /**
   * Constructs a new <code>PhotoToWordsWithLocationResult</code>.
   * Result of an photo to words-with-location OCR operation
   * @alias module:model/PhotoToWordsWithLocationResult
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>PhotoToWordsWithLocationResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PhotoToWordsWithLocationResult} obj Optional instance to populate.
   * @return {module:model/PhotoToWordsWithLocationResult} The populated <code>PhotoToWordsWithLocationResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('TextElements')) {
        obj['TextElements'] = ApiClient.convertToType(data['TextElements'], [OcrPhotoTextElement]);
      }
      if (data.hasOwnProperty('DiagnosticImage')) {
        obj['DiagnosticImage'] = ApiClient.convertToType(data['DiagnosticImage'], 'Blob');
      }
    }
    return obj;
  }

  /**
   * True if successful, false otherwise
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;
  /**
   * Word elements in the image
   * @member {Array.<module:model/OcrPhotoTextElement>} TextElements
   */
  exports.prototype['TextElements'] = undefined;
  /**
   * Typically null.  To analyze OCR performance, enable diagnostic mode by adding the HTTP header \"DiagnosticMode\" with the value \"true\".  When this is true, a diagnostic image showing the details of the OCR result will be set in PNG format into DiagnosticImage.
   * @member {Blob} DiagnosticImage
   */
  exports.prototype['DiagnosticImage'] = undefined;



  return exports;
}));


