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
    define(['ApiClient', 'model/OcrPageResultWithLinesWithLocation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OcrPageResultWithLinesWithLocation'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveOcrApiClient) {
      root.CloudmersiveOcrApiClient = {};
    }
    root.CloudmersiveOcrApiClient.PdfToLinesWithLocationResult = factory(root.CloudmersiveOcrApiClient.ApiClient, root.CloudmersiveOcrApiClient.OcrPageResultWithLinesWithLocation);
  }
}(this, function(ApiClient, OcrPageResultWithLinesWithLocation) {
  'use strict';




  /**
   * The PdfToLinesWithLocationResult model module.
   * @module model/PdfToLinesWithLocationResult
   * @version 1.3.2
   */

  /**
   * Constructs a new <code>PdfToLinesWithLocationResult</code>.
   * Response from an OCR to lines with location operation.  Includes the confience rating and converted text result, along with the locations of the lines in the pages.
   * @alias module:model/PdfToLinesWithLocationResult
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PdfToLinesWithLocationResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PdfToLinesWithLocationResult} obj Optional instance to populate.
   * @return {module:model/PdfToLinesWithLocationResult} The populated <code>PdfToLinesWithLocationResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('OcrPages')) {
        obj['OcrPages'] = ApiClient.convertToType(data['OcrPages'], [OcrPageResultWithLinesWithLocation]);
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
   * OCR results for each page
   * @member {Array.<module:model/OcrPageResultWithLinesWithLocation>} OcrPages
   */
  exports.prototype['OcrPages'] = undefined;



  return exports;
}));


