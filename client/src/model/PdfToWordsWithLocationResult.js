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
    define(['ApiClient', 'model/OcrPageResultWithWordsWithLocation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OcrPageResultWithWordsWithLocation'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveOcrApiClient) {
      root.CloudmersiveOcrApiClient = {};
    }
    root.CloudmersiveOcrApiClient.PdfToWordsWithLocationResult = factory(root.CloudmersiveOcrApiClient.ApiClient, root.CloudmersiveOcrApiClient.OcrPageResultWithWordsWithLocation);
  }
}(this, function(ApiClient, OcrPageResultWithWordsWithLocation) {
  'use strict';




  /**
   * The PdfToWordsWithLocationResult model module.
   * @module model/PdfToWordsWithLocationResult
   * @version 1.2.5
   */

  /**
   * Constructs a new <code>PdfToWordsWithLocationResult</code>.
   * Response from an OCR to words with location operation.  Includes the confience rating and converted text result, along with the locations of the words in the pages.
   * @alias module:model/PdfToWordsWithLocationResult
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PdfToWordsWithLocationResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PdfToWordsWithLocationResult} obj Optional instance to populate.
   * @return {module:model/PdfToWordsWithLocationResult} The populated <code>PdfToWordsWithLocationResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('OcrPages')) {
        obj['OcrPages'] = ApiClient.convertToType(data['OcrPages'], [OcrPageResultWithWordsWithLocation]);
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
   * OCR page results
   * @member {Array.<module:model/OcrPageResultWithWordsWithLocation>} OcrPages
   */
  exports.prototype['OcrPages'] = undefined;



  return exports;
}));


