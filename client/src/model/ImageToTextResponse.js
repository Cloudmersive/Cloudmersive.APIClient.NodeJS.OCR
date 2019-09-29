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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveOcrApiClient) {
      root.CloudmersiveOcrApiClient = {};
    }
    root.CloudmersiveOcrApiClient.ImageToTextResponse = factory(root.CloudmersiveOcrApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ImageToTextResponse model module.
   * @module model/ImageToTextResponse
   * @version 1.2.4
   */

  /**
   * Constructs a new <code>ImageToTextResponse</code>.
   * Response from an OCR to text operation.  Includes the confience rating and converted text result.
   * @alias module:model/ImageToTextResponse
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ImageToTextResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImageToTextResponse} obj Optional instance to populate.
   * @return {module:model/ImageToTextResponse} The populated <code>ImageToTextResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('MeanConfidenceLevel')) {
        obj['MeanConfidenceLevel'] = ApiClient.convertToType(data['MeanConfidenceLevel'], 'Number');
      }
      if (data.hasOwnProperty('TextResult')) {
        obj['TextResult'] = ApiClient.convertToType(data['TextResult'], 'String');
      }
    }
    return obj;
  }

  /**
   * Confidence level rating of the OCR operation; ratings above 80% are strong.
   * @member {Number} MeanConfidenceLevel
   */
  exports.prototype['MeanConfidenceLevel'] = undefined;
  /**
   * Converted text string from the image input.
   * @member {String} TextResult
   */
  exports.prototype['TextResult'] = undefined;



  return exports;
}));


