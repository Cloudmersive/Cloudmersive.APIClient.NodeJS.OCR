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
    root.CloudmersiveOcrApiClient.FormFieldDefinition = factory(root.CloudmersiveOcrApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FormFieldDefinition model module.
   * @module model/FormFieldDefinition
   * @version 1.3.1
   */

  /**
   * Constructs a new <code>FormFieldDefinition</code>.
   * Definition of a form field for OCR data extraction from images
   * @alias module:model/FormFieldDefinition
   * @class
   */
  var exports = function() {
    var _this = this;


















  };

  /**
   * Constructs a <code>FormFieldDefinition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FormFieldDefinition} obj Optional instance to populate.
   * @return {module:model/FormFieldDefinition} The populated <code>FormFieldDefinition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('FieldID')) {
        obj['FieldID'] = ApiClient.convertToType(data['FieldID'], 'String');
      }
      if (data.hasOwnProperty('LeftAnchor')) {
        obj['LeftAnchor'] = ApiClient.convertToType(data['LeftAnchor'], 'String');
      }
      if (data.hasOwnProperty('TopAnchor')) {
        obj['TopAnchor'] = ApiClient.convertToType(data['TopAnchor'], 'String');
      }
      if (data.hasOwnProperty('BottomAnchor')) {
        obj['BottomAnchor'] = ApiClient.convertToType(data['BottomAnchor'], 'String');
      }
      if (data.hasOwnProperty('AnchorMode')) {
        obj['AnchorMode'] = ApiClient.convertToType(data['AnchorMode'], 'String');
      }
      if (data.hasOwnProperty('DataType')) {
        obj['DataType'] = ApiClient.convertToType(data['DataType'], 'String');
      }
      if (data.hasOwnProperty('TargetDigitCount')) {
        obj['TargetDigitCount'] = ApiClient.convertToType(data['TargetDigitCount'], 'Number');
      }
      if (data.hasOwnProperty('MinimumCharacterCount')) {
        obj['MinimumCharacterCount'] = ApiClient.convertToType(data['MinimumCharacterCount'], 'Number');
      }
      if (data.hasOwnProperty('AllowNumericDigits')) {
        obj['AllowNumericDigits'] = ApiClient.convertToType(data['AllowNumericDigits'], 'Boolean');
      }
      if (data.hasOwnProperty('VerticalAlignmentType')) {
        obj['VerticalAlignmentType'] = ApiClient.convertToType(data['VerticalAlignmentType'], 'String');
      }
      if (data.hasOwnProperty('HorizontalAlignmentType')) {
        obj['HorizontalAlignmentType'] = ApiClient.convertToType(data['HorizontalAlignmentType'], 'String');
      }
      if (data.hasOwnProperty('TargetFieldWidth_Relative')) {
        obj['TargetFieldWidth_Relative'] = ApiClient.convertToType(data['TargetFieldWidth_Relative'], 'Number');
      }
      if (data.hasOwnProperty('TargetFieldHeight_Relative')) {
        obj['TargetFieldHeight_Relative'] = ApiClient.convertToType(data['TargetFieldHeight_Relative'], 'Number');
      }
      if (data.hasOwnProperty('TargetFieldHorizontalAdjustment')) {
        obj['TargetFieldHorizontalAdjustment'] = ApiClient.convertToType(data['TargetFieldHorizontalAdjustment'], 'Number');
      }
      if (data.hasOwnProperty('TargetFieldVerticalAdjustment')) {
        obj['TargetFieldVerticalAdjustment'] = ApiClient.convertToType(data['TargetFieldVerticalAdjustment'], 'Number');
      }
      if (data.hasOwnProperty('Ignore')) {
        obj['Ignore'] = ApiClient.convertToType(data['Ignore'], ['String']);
      }
      if (data.hasOwnProperty('Options')) {
        obj['Options'] = ApiClient.convertToType(data['Options'], 'String');
      }
    }
    return obj;
  }

  /**
   * The identifier of the field; use this to identify which field is being referenced.  Set to SkipField if you do not wish to return the value of this field in the result.
   * @member {String} FieldID
   */
  exports.prototype['FieldID'] = undefined;
  /**
   * Optional - the left-hand anchor of the field
   * @member {String} LeftAnchor
   */
  exports.prototype['LeftAnchor'] = undefined;
  /**
   * Optional - the top anchor of the field
   * @member {String} TopAnchor
   */
  exports.prototype['TopAnchor'] = undefined;
  /**
   * Optional - the bottom anchor of the field
   * @member {String} BottomAnchor
   */
  exports.prototype['BottomAnchor'] = undefined;
  /**
   * Optional - the matching mode for the anchor.  Possible values are Complete (requires the entire anchor to match) and Partial (allows only part of the anchor to match) and Horizontal (anchor must be laid out horizontally).  Default is Partial.
   * @member {String} AnchorMode
   */
  exports.prototype['AnchorMode'] = undefined;
  /**
   * The data type of the field; possible values are INTEGER (Integer value), STRING (Arbitrary string value, spaces are permitted), DATE (Date in a structured format), DECIMAL (Decimal number), ALPHANUMERIC (Continuous alphanumeric string with no spaces), STRINGNOWHITESPACE (A string that contains no whitespace characters), SERIALNUMBER (A serial-number style string that contains letters and numbers, and certain symbols; must contain at least one number), ALPHAONLY (Alphabet characters only, no numbers or symbols or whitespace)
   * @member {String} DataType
   */
  exports.prototype['DataType'] = undefined;
  /**
   * Optional - the target number of digits in the field; useful for fixed-length fields
   * @member {Number} TargetDigitCount
   */
  exports.prototype['TargetDigitCount'] = undefined;
  /**
   * Optional - the target number of digits in the field; useful for fixed-length fields
   * @member {Number} MinimumCharacterCount
   */
  exports.prototype['MinimumCharacterCount'] = undefined;
  /**
   * Optional - set to false to block values that contain numeric digits, set to true to allow numeric digits
   * @member {Boolean} AllowNumericDigits
   */
  exports.prototype['AllowNumericDigits'] = undefined;
  /**
   * Vertical alignment of target value area relative to the field anchor; Possible values are VCenter, Top, Bottom
   * @member {String} VerticalAlignmentType
   */
  exports.prototype['VerticalAlignmentType'] = undefined;
  /**
   * Horizontal alignment of target value area relative to the field anchor; Possible values are Left, Right
   * @member {String} HorizontalAlignmentType
   */
  exports.prototype['HorizontalAlignmentType'] = undefined;
  /**
   * Optional - scale factor for target field width - relative to width of field title; a value of 1.0 indicates the target value area has the same width as the field value as occurring in the image; a value of 2.0 would indicate that the target value area has 2 times the width of the field value as occurring in the image.
   * @member {Number} TargetFieldWidth_Relative
   */
  exports.prototype['TargetFieldWidth_Relative'] = undefined;
  /**
   * Optional - scale factor for target field height - relative to height of field title
   * @member {Number} TargetFieldHeight_Relative
   */
  exports.prototype['TargetFieldHeight_Relative'] = undefined;
  /**
   * Optional - horizontal adjestment in relative width of the field
   * @member {Number} TargetFieldHorizontalAdjustment
   */
  exports.prototype['TargetFieldHorizontalAdjustment'] = undefined;
  /**
   * Optional - vertical adjestment in relative height of the field
   * @member {Number} TargetFieldVerticalAdjustment
   */
  exports.prototype['TargetFieldVerticalAdjustment'] = undefined;
  /**
   * Optional - Ignore any result items that contain a partial or complete match with these text strings
   * @member {Array.<String>} Ignore
   */
  exports.prototype['Ignore'] = undefined;
  /**
   * Optional - additional options that can be set for this field definition, separated by commas.  Possible values are AllowMultiMatch (allow the same anchor to be matched to multiple fields)
   * @member {String} Options
   */
  exports.prototype['Options'] = undefined;



  return exports;
}));


