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
    root.CloudmersiveOcrApiClient.ReceiptLineItem = factory(root.CloudmersiveOcrApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ReceiptLineItem model module.
   * @module model/ReceiptLineItem
   * @version 1.2.3
   */

  /**
   * Constructs a new <code>ReceiptLineItem</code>.
   * Receipt line item, comprised of a product or item and a price (if available)
   * @alias module:model/ReceiptLineItem
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ReceiptLineItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReceiptLineItem} obj Optional instance to populate.
   * @return {module:model/ReceiptLineItem} The populated <code>ReceiptLineItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ItemDescription')) {
        obj['ItemDescription'] = ApiClient.convertToType(data['ItemDescription'], 'String');
      }
      if (data.hasOwnProperty('ItemPrice')) {
        obj['ItemPrice'] = ApiClient.convertToType(data['ItemPrice'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} ItemDescription
   */
  exports.prototype['ItemDescription'] = undefined;
  /**
   * @member {Number} ItemPrice
   */
  exports.prototype['ItemPrice'] = undefined;



  return exports;
}));


