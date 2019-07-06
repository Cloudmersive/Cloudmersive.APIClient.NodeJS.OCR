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
    define(['ApiClient', 'model/OcrWordElement'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OcrWordElement'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveOcrApiClient) {
      root.CloudmersiveOcrApiClient = {};
    }
    root.CloudmersiveOcrApiClient.ImageToWordsWithLocationResult = factory(root.CloudmersiveOcrApiClient.ApiClient, root.CloudmersiveOcrApiClient.OcrWordElement);
  }
}(this, function(ApiClient, OcrWordElement) {
  'use strict';




  /**
   * The ImageToWordsWithLocationResult model module.
   * @module model/ImageToWordsWithLocationResult
   * @version 1.1.8
   */

  /**
   * Constructs a new <code>ImageToWordsWithLocationResult</code>.
   * Result of an image to words-with-location OCR operation
   * @alias module:model/ImageToWordsWithLocationResult
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ImageToWordsWithLocationResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImageToWordsWithLocationResult} obj Optional instance to populate.
   * @return {module:model/ImageToWordsWithLocationResult} The populated <code>ImageToWordsWithLocationResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('Words')) {
        obj['Words'] = ApiClient.convertToType(data['Words'], [OcrWordElement]);
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;
  /**
   * Word elements in the image
   * @member {Array.<module:model/OcrWordElement>} Words
   */
  exports.prototype['Words'] = undefined;



  return exports;
}));


