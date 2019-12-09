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
    root.CloudmersiveOcrApiClient.BusinessCardRecognitionResult = factory(root.CloudmersiveOcrApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BusinessCardRecognitionResult model module.
   * @module model/BusinessCardRecognitionResult
   * @version 1.2.9
   */

  /**
   * Constructs a new <code>BusinessCardRecognitionResult</code>.
   * Result of recognizing a business card, to extract the key information from the business card
   * @alias module:model/BusinessCardRecognitionResult
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>BusinessCardRecognitionResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BusinessCardRecognitionResult} obj Optional instance to populate.
   * @return {module:model/BusinessCardRecognitionResult} The populated <code>BusinessCardRecognitionResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('PersonName')) {
        obj['PersonName'] = ApiClient.convertToType(data['PersonName'], 'String');
      }
      if (data.hasOwnProperty('PersonTitle')) {
        obj['PersonTitle'] = ApiClient.convertToType(data['PersonTitle'], 'String');
      }
      if (data.hasOwnProperty('BusinessName')) {
        obj['BusinessName'] = ApiClient.convertToType(data['BusinessName'], 'String');
      }
      if (data.hasOwnProperty('AddressString')) {
        obj['AddressString'] = ApiClient.convertToType(data['AddressString'], 'String');
      }
      if (data.hasOwnProperty('PhoneNumber')) {
        obj['PhoneNumber'] = ApiClient.convertToType(data['PhoneNumber'], 'String');
      }
      if (data.hasOwnProperty('EmailAddress')) {
        obj['EmailAddress'] = ApiClient.convertToType(data['EmailAddress'], 'String');
      }
      if (data.hasOwnProperty('Timestamp')) {
        obj['Timestamp'] = ApiClient.convertToType(data['Timestamp'], 'Date');
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
   * The name of the person printed on the business card (if included on the business card)
   * @member {String} PersonName
   */
  exports.prototype['PersonName'] = undefined;
  /**
   * The title of the person printed on the business card (if included on the business card)
   * @member {String} PersonTitle
   */
  exports.prototype['PersonTitle'] = undefined;
  /**
   * The name of the business printed on the business card (if included on the business card)
   * @member {String} BusinessName
   */
  exports.prototype['BusinessName'] = undefined;
  /**
   * The address printed on the business card (if included on the business card)
   * @member {String} AddressString
   */
  exports.prototype['AddressString'] = undefined;
  /**
   * The phone number printed on the business card (if included on the business card)
   * @member {String} PhoneNumber
   */
  exports.prototype['PhoneNumber'] = undefined;
  /**
   * The email address printed on the business card (if included on the business card)
   * @member {String} EmailAddress
   */
  exports.prototype['EmailAddress'] = undefined;
  /**
   * The date and time printed on the business card (if included on the business card)
   * @member {Date} Timestamp
   */
  exports.prototype['Timestamp'] = undefined;



  return exports;
}));


