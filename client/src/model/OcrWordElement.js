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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveOcrApiClient) {
      root.CloudmersiveOcrApiClient = {};
    }
    root.CloudmersiveOcrApiClient.OcrWordElement = factory(root.CloudmersiveOcrApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OcrWordElement model module.
   * @module model/OcrWordElement
   * @version 1.3.1
   */

  /**
   * Constructs a new <code>OcrWordElement</code>.
   * A single word in an OCR document
   * @alias module:model/OcrWordElement
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>OcrWordElement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OcrWordElement} obj Optional instance to populate.
   * @return {module:model/OcrWordElement} The populated <code>OcrWordElement</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('WordText')) {
        obj['WordText'] = ApiClient.convertToType(data['WordText'], 'String');
      }
      if (data.hasOwnProperty('LineNumber')) {
        obj['LineNumber'] = ApiClient.convertToType(data['LineNumber'], 'Number');
      }
      if (data.hasOwnProperty('WordNumber')) {
        obj['WordNumber'] = ApiClient.convertToType(data['WordNumber'], 'Number');
      }
      if (data.hasOwnProperty('XLeft')) {
        obj['XLeft'] = ApiClient.convertToType(data['XLeft'], 'Number');
      }
      if (data.hasOwnProperty('YTop')) {
        obj['YTop'] = ApiClient.convertToType(data['YTop'], 'Number');
      }
      if (data.hasOwnProperty('Width')) {
        obj['Width'] = ApiClient.convertToType(data['Width'], 'Number');
      }
      if (data.hasOwnProperty('Height')) {
        obj['Height'] = ApiClient.convertToType(data['Height'], 'Number');
      }
      if (data.hasOwnProperty('ConfidenceLevel')) {
        obj['ConfidenceLevel'] = ApiClient.convertToType(data['ConfidenceLevel'], 'Number');
      }
      if (data.hasOwnProperty('BlockNumber')) {
        obj['BlockNumber'] = ApiClient.convertToType(data['BlockNumber'], 'Number');
      }
      if (data.hasOwnProperty('ParagraphNumber')) {
        obj['ParagraphNumber'] = ApiClient.convertToType(data['ParagraphNumber'], 'Number');
      }
      if (data.hasOwnProperty('PageNumber')) {
        obj['PageNumber'] = ApiClient.convertToType(data['PageNumber'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Text of the word
   * @member {String} WordText
   */
  exports.prototype['WordText'] = undefined;
  /**
   * Line number of the word
   * @member {Number} LineNumber
   */
  exports.prototype['LineNumber'] = undefined;
  /**
   * Index of the word in the line
   * @member {Number} WordNumber
   */
  exports.prototype['WordNumber'] = undefined;
  /**
   * X location of the left edge of the word in pixels
   * @member {Number} XLeft
   */
  exports.prototype['XLeft'] = undefined;
  /**
   * Y location of the top edge of the word in pixels
   * @member {Number} YTop
   */
  exports.prototype['YTop'] = undefined;
  /**
   * Width of the word in pixels
   * @member {Number} Width
   */
  exports.prototype['Width'] = undefined;
  /**
   * Height of the word in pixels
   * @member {Number} Height
   */
  exports.prototype['Height'] = undefined;
  /**
   * Confidence level of the machine learning result; possible values are 0.0 (lowest accuracy) - 1.0 (highest accuracy)
   * @member {Number} ConfidenceLevel
   */
  exports.prototype['ConfidenceLevel'] = undefined;
  /**
   * Index of the containing block
   * @member {Number} BlockNumber
   */
  exports.prototype['BlockNumber'] = undefined;
  /**
   * Index of the containing paragraph
   * @member {Number} ParagraphNumber
   */
  exports.prototype['ParagraphNumber'] = undefined;
  /**
   * Index of the containing page
   * @member {Number} PageNumber
   */
  exports.prototype['PageNumber'] = undefined;



  return exports;
}));


