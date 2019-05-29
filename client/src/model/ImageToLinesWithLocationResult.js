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
    define(['ApiClient', 'model/OcrLineElement'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OcrLineElement'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveOcrApiClient) {
      root.CloudmersiveOcrApiClient = {};
    }
    root.CloudmersiveOcrApiClient.ImageToLinesWithLocationResult = factory(root.CloudmersiveOcrApiClient.ApiClient, root.CloudmersiveOcrApiClient.OcrLineElement);
  }
}(this, function(ApiClient, OcrLineElement) {
  'use strict';




  /**
   * The ImageToLinesWithLocationResult model module.
   * @module model/ImageToLinesWithLocationResult
   * @version 1.1.6
   */

  /**
   * Constructs a new <code>ImageToLinesWithLocationResult</code>.
   * Result of an image to lines-with-location OCR operation
   * @alias module:model/ImageToLinesWithLocationResult
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ImageToLinesWithLocationResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImageToLinesWithLocationResult} obj Optional instance to populate.
   * @return {module:model/ImageToLinesWithLocationResult} The populated <code>ImageToLinesWithLocationResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('Lines')) {
        obj['Lines'] = ApiClient.convertToType(data['Lines'], [OcrLineElement]);
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;
  /**
   * Words in the image
   * @member {Array.<module:model/OcrLineElement>} Lines
   */
  exports.prototype['Lines'] = undefined;



  return exports;
}));


