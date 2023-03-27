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
    define(['ApiClient', 'model/OcrPageResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OcrPageResult'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveOcrApiClient) {
      root.CloudmersiveOcrApiClient = {};
    }
    root.CloudmersiveOcrApiClient.PdfToTextResponse = factory(root.CloudmersiveOcrApiClient.ApiClient, root.CloudmersiveOcrApiClient.OcrPageResult);
  }
}(this, function(ApiClient, OcrPageResult) {
  'use strict';




  /**
   * The PdfToTextResponse model module.
   * @module model/PdfToTextResponse
   * @version 2.0.1
   */

  /**
   * Constructs a new <code>PdfToTextResponse</code>.
   * Response from an OCR to text operation.  Includes the confidence rating and converted text result.
   * @alias module:model/PdfToTextResponse
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>PdfToTextResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PdfToTextResponse} obj Optional instance to populate.
   * @return {module:model/PdfToTextResponse} The populated <code>PdfToTextResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('OcrPages')) {
        obj['OcrPages'] = ApiClient.convertToType(data['OcrPages'], [OcrPageResult]);
      }
      if (data.hasOwnProperty('AsyncJobID')) {
        obj['AsyncJobID'] = ApiClient.convertToType(data['AsyncJobID'], 'String');
      }
      if (data.hasOwnProperty('AsyncJobStatus')) {
        obj['AsyncJobStatus'] = ApiClient.convertToType(data['AsyncJobStatus'], 'String');
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
   * Page OCR results
   * @member {Array.<module:model/OcrPageResult>} OcrPages
   */
  exports.prototype['OcrPages'] = undefined;
  /**
   * When the job exceeds 25 pages, an Async Job ID is returned.  Use the CheckPdfOcrJobStatus API to check on the status of this job using the AsyncJobID and get the result when it finishes
   * @member {String} AsyncJobID
   */
  exports.prototype['AsyncJobID'] = undefined;
  /**
   * Returns the job status of the Async Job, if applicable.  Possible states are STARTED and COMPLETED
   * @member {String} AsyncJobStatus
   */
  exports.prototype['AsyncJobStatus'] = undefined;



  return exports;
}));


