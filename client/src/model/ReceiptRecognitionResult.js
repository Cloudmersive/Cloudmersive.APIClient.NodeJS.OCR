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
    define(['ApiClient', 'model/ReceiptLineItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReceiptLineItem'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveOcrApiClient) {
      root.CloudmersiveOcrApiClient = {};
    }
    root.CloudmersiveOcrApiClient.ReceiptRecognitionResult = factory(root.CloudmersiveOcrApiClient.ApiClient, root.CloudmersiveOcrApiClient.ReceiptLineItem);
  }
}(this, function(ApiClient, ReceiptLineItem) {
  'use strict';




  /**
   * The ReceiptRecognitionResult model module.
   * @module model/ReceiptRecognitionResult
   * @version 1.2.4
   */

  /**
   * Constructs a new <code>ReceiptRecognitionResult</code>.
   * Result of recognizing a receipt, to extract the key information from the receipt
   * @alias module:model/ReceiptRecognitionResult
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>ReceiptRecognitionResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReceiptRecognitionResult} obj Optional instance to populate.
   * @return {module:model/ReceiptRecognitionResult} The populated <code>ReceiptRecognitionResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('Timestamp')) {
        obj['Timestamp'] = ApiClient.convertToType(data['Timestamp'], 'Date');
      }
      if (data.hasOwnProperty('BusinessName')) {
        obj['BusinessName'] = ApiClient.convertToType(data['BusinessName'], 'String');
      }
      if (data.hasOwnProperty('BusinessWebsite')) {
        obj['BusinessWebsite'] = ApiClient.convertToType(data['BusinessWebsite'], 'String');
      }
      if (data.hasOwnProperty('AddressString')) {
        obj['AddressString'] = ApiClient.convertToType(data['AddressString'], 'String');
      }
      if (data.hasOwnProperty('PhoneNumber')) {
        obj['PhoneNumber'] = ApiClient.convertToType(data['PhoneNumber'], 'String');
      }
      if (data.hasOwnProperty('ReceiptItems')) {
        obj['ReceiptItems'] = ApiClient.convertToType(data['ReceiptItems'], [ReceiptLineItem]);
      }
      if (data.hasOwnProperty('ReceiptTotal')) {
        obj['ReceiptTotal'] = ApiClient.convertToType(data['ReceiptTotal'], 'Number');
      }
    }
    return obj;
  }

  /**
   * True if the operation was successful, false otherwise
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;
  /**
   * The date and time printed on the receipt (if included on the receipt)
   * @member {Date} Timestamp
   */
  exports.prototype['Timestamp'] = undefined;
  /**
   * The name of the business printed on the receipt (if included on the receipt)
   * @member {String} BusinessName
   */
  exports.prototype['BusinessName'] = undefined;
  /**
   * The website URL of the business printed on the receipt (if included on the receipt)
   * @member {String} BusinessWebsite
   */
  exports.prototype['BusinessWebsite'] = undefined;
  /**
   * The address of the business printed on the receipt (if included on the receipt)
   * @member {String} AddressString
   */
  exports.prototype['AddressString'] = undefined;
  /**
   * The phone number printed on the receipt (if included on the receipt)
   * @member {String} PhoneNumber
   */
  exports.prototype['PhoneNumber'] = undefined;
  /**
   * The individual line items comprising the order; does not include total (see ReceiptTotal)
   * @member {Array.<module:model/ReceiptLineItem>} ReceiptItems
   */
  exports.prototype['ReceiptItems'] = undefined;
  /**
   * The total monetary value of the receipt (if included on the receipt)
   * @member {Number} ReceiptTotal
   */
  exports.prototype['ReceiptTotal'] = undefined;



  return exports;
}));


