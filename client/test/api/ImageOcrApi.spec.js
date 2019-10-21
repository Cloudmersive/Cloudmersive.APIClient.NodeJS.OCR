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
    instance = new CloudmersiveOcrApiClient.ImageOcrApi();
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

  describe('ImageOcrApi', function() {
    describe('imageOcrImageLinesWithLocation', function() {
      it('should call imageOcrImageLinesWithLocation successfully', function(done) {
        //uncomment below and update the code to test imageOcrImageLinesWithLocation
        //instance.imageOcrImageLinesWithLocation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('imageOcrImageWordsWithLocation', function() {
      it('should call imageOcrImageWordsWithLocation successfully', function(done) {
        //uncomment below and update the code to test imageOcrImageWordsWithLocation
        //instance.imageOcrImageWordsWithLocation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('imageOcrPhotoRecognizeBusinessCard', function() {
      it('should call imageOcrPhotoRecognizeBusinessCard successfully', function(done) {
        //uncomment below and update the code to test imageOcrPhotoRecognizeBusinessCard
        //instance.imageOcrPhotoRecognizeBusinessCard(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('imageOcrPhotoRecognizeForm', function() {
      it('should call imageOcrPhotoRecognizeForm successfully', function(done) {
        //uncomment below and update the code to test imageOcrPhotoRecognizeForm
        //instance.imageOcrPhotoRecognizeForm(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('imageOcrPhotoRecognizeFormAdvanced', function() {
      it('should call imageOcrPhotoRecognizeFormAdvanced successfully', function(done) {
        //uncomment below and update the code to test imageOcrPhotoRecognizeFormAdvanced
        //instance.imageOcrPhotoRecognizeFormAdvanced(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('imageOcrPhotoRecognizeReceipt', function() {
      it('should call imageOcrPhotoRecognizeReceipt successfully', function(done) {
        //uncomment below and update the code to test imageOcrPhotoRecognizeReceipt
        //instance.imageOcrPhotoRecognizeReceipt(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('imageOcrPhotoToText', function() {
      it('should call imageOcrPhotoToText successfully', function(done) {
        //uncomment below and update the code to test imageOcrPhotoToText
        //instance.imageOcrPhotoToText(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('imageOcrPhotoWordsWithLocation', function() {
      it('should call imageOcrPhotoWordsWithLocation successfully', function(done) {
        //uncomment below and update the code to test imageOcrPhotoWordsWithLocation
        //instance.imageOcrPhotoWordsWithLocation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('imageOcrPost', function() {
      it('should call imageOcrPost successfully', function(done) {
        //uncomment below and update the code to test imageOcrPost
        //instance.imageOcrPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
