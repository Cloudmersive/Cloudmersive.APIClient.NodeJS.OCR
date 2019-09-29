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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CloudmersiveOcrApiClient);
  }
}(this, function(expect, CloudmersiveOcrApiClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CloudmersiveOcrApiClient.FormTableColumnDefinition();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('FormTableColumnDefinition', function() {
    it('should create an instance of FormTableColumnDefinition', function() {
      // uncomment below and update the code to test FormTableColumnDefinition
      //var instane = new CloudmersiveOcrApiClient.FormTableColumnDefinition();
      //expect(instance).to.be.a(CloudmersiveOcrApiClient.FormTableColumnDefinition);
    });

    it('should have the property columnID (base name: "ColumnID")', function() {
      // uncomment below and update the code to test the property columnID
      //var instane = new CloudmersiveOcrApiClient.FormTableColumnDefinition();
      //expect(instance).to.be();
    });

    it('should have the property topAnchor (base name: "TopAnchor")', function() {
      // uncomment below and update the code to test the property topAnchor
      //var instane = new CloudmersiveOcrApiClient.FormTableColumnDefinition();
      //expect(instance).to.be();
    });

    it('should have the property anchorMode (base name: "AnchorMode")', function() {
      // uncomment below and update the code to test the property anchorMode
      //var instane = new CloudmersiveOcrApiClient.FormTableColumnDefinition();
      //expect(instance).to.be();
    });

    it('should have the property dataType (base name: "DataType")', function() {
      // uncomment below and update the code to test the property dataType
      //var instane = new CloudmersiveOcrApiClient.FormTableColumnDefinition();
      //expect(instance).to.be();
    });

    it('should have the property minimumCharacterCount (base name: "MinimumCharacterCount")', function() {
      // uncomment below and update the code to test the property minimumCharacterCount
      //var instane = new CloudmersiveOcrApiClient.FormTableColumnDefinition();
      //expect(instance).to.be();
    });

    it('should have the property allowNumericDigits (base name: "AllowNumericDigits")', function() {
      // uncomment below and update the code to test the property allowNumericDigits
      //var instane = new CloudmersiveOcrApiClient.FormTableColumnDefinition();
      //expect(instance).to.be();
    });

  });

}));
