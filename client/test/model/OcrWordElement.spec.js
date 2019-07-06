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
    instance = new CloudmersiveOcrApiClient.OcrWordElement();
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

  describe('OcrWordElement', function() {
    it('should create an instance of OcrWordElement', function() {
      // uncomment below and update the code to test OcrWordElement
      //var instane = new CloudmersiveOcrApiClient.OcrWordElement();
      //expect(instance).to.be.a(CloudmersiveOcrApiClient.OcrWordElement);
    });

    it('should have the property wordText (base name: "WordText")', function() {
      // uncomment below and update the code to test the property wordText
      //var instane = new CloudmersiveOcrApiClient.OcrWordElement();
      //expect(instance).to.be();
    });

    it('should have the property lineNumber (base name: "LineNumber")', function() {
      // uncomment below and update the code to test the property lineNumber
      //var instane = new CloudmersiveOcrApiClient.OcrWordElement();
      //expect(instance).to.be();
    });

    it('should have the property wordNumber (base name: "WordNumber")', function() {
      // uncomment below and update the code to test the property wordNumber
      //var instane = new CloudmersiveOcrApiClient.OcrWordElement();
      //expect(instance).to.be();
    });

    it('should have the property xLeft (base name: "XLeft")', function() {
      // uncomment below and update the code to test the property xLeft
      //var instane = new CloudmersiveOcrApiClient.OcrWordElement();
      //expect(instance).to.be();
    });

    it('should have the property yTop (base name: "YTop")', function() {
      // uncomment below and update the code to test the property yTop
      //var instane = new CloudmersiveOcrApiClient.OcrWordElement();
      //expect(instance).to.be();
    });

    it('should have the property width (base name: "Width")', function() {
      // uncomment below and update the code to test the property width
      //var instane = new CloudmersiveOcrApiClient.OcrWordElement();
      //expect(instance).to.be();
    });

    it('should have the property height (base name: "Height")', function() {
      // uncomment below and update the code to test the property height
      //var instane = new CloudmersiveOcrApiClient.OcrWordElement();
      //expect(instance).to.be();
    });

    it('should have the property confidenceLevel (base name: "ConfidenceLevel")', function() {
      // uncomment below and update the code to test the property confidenceLevel
      //var instane = new CloudmersiveOcrApiClient.OcrWordElement();
      //expect(instance).to.be();
    });

    it('should have the property blockNumber (base name: "BlockNumber")', function() {
      // uncomment below and update the code to test the property blockNumber
      //var instane = new CloudmersiveOcrApiClient.OcrWordElement();
      //expect(instance).to.be();
    });

    it('should have the property paragraphNumber (base name: "ParagraphNumber")', function() {
      // uncomment below and update the code to test the property paragraphNumber
      //var instane = new CloudmersiveOcrApiClient.OcrWordElement();
      //expect(instance).to.be();
    });

    it('should have the property pageNumber (base name: "PageNumber")', function() {
      // uncomment below and update the code to test the property pageNumber
      //var instane = new CloudmersiveOcrApiClient.OcrWordElement();
      //expect(instance).to.be();
    });

  });

}));
