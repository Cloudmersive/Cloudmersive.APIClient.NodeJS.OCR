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
    define(['ApiClient', 'model/OcrWordElement'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OcrWordElement'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveOcrApiClient) {
      root.CloudmersiveOcrApiClient = {};
    }
    root.CloudmersiveOcrApiClient.OcrLineElement = factory(root.CloudmersiveOcrApiClient.ApiClient, root.CloudmersiveOcrApiClient.OcrWordElement);
  }
}(this, function(ApiClient, OcrWordElement) {
  'use strict';




  /**
   * The OcrLineElement model module.
   * @module model/OcrLineElement
   * @version 1.1.7
   */

  /**
   * Constructs a new <code>OcrLineElement</code>.
   * A contiguous line of text in an OCR document
   * @alias module:model/OcrLineElement
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>OcrLineElement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OcrLineElement} obj Optional instance to populate.
   * @return {module:model/OcrLineElement} The populated <code>OcrLineElement</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('LineText')) {
        obj['LineText'] = ApiClient.convertToType(data['LineText'], 'String');
      }
      if (data.hasOwnProperty('Words')) {
        obj['Words'] = ApiClient.convertToType(data['Words'], [OcrWordElement]);
      }
    }
    return obj;
  }

  /**
   * Text of the line
   * @member {String} LineText
   */
  exports.prototype['LineText'] = undefined;
  /**
   * Word objects in the line
   * @member {Array.<module:model/OcrWordElement>} Words
   */
  exports.prototype['Words'] = undefined;



  return exports;
}));


