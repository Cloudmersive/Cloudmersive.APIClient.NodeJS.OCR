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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ImageToLinesWithLocationResult', 'model/ImageToTextResponse', 'model/ImageToWordsWithLocationResult', 'model/OcrLineElement', 'model/OcrPageResult', 'model/OcrWordElement', 'model/PdfToTextResponse', 'api/ImageOcrApi', 'api/PdfOcrApi', 'api/PreprocessingApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/ImageToLinesWithLocationResult'), require('./model/ImageToTextResponse'), require('./model/ImageToWordsWithLocationResult'), require('./model/OcrLineElement'), require('./model/OcrPageResult'), require('./model/OcrWordElement'), require('./model/PdfToTextResponse'), require('./api/ImageOcrApi'), require('./api/PdfOcrApi'), require('./api/PreprocessingApi'));
  }
}(function(ApiClient, ImageToLinesWithLocationResult, ImageToTextResponse, ImageToWordsWithLocationResult, OcrLineElement, OcrPageResult, OcrWordElement, PdfToTextResponse, ImageOcrApi, PdfOcrApi, PreprocessingApi) {
  'use strict';

  /**
   * The_powerful_Optical_Character_Recognition__OCR_APIs_let_you_convert_scanned_images_of_pages_into_recognized_text_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var CloudmersiveOcrApiClient = require('index'); // See note below*.
   * var xxxSvc = new CloudmersiveOcrApiClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new CloudmersiveOcrApiClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new CloudmersiveOcrApiClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new CloudmersiveOcrApiClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.1.4
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The ImageToLinesWithLocationResult model constructor.
     * @property {module:model/ImageToLinesWithLocationResult}
     */
    ImageToLinesWithLocationResult: ImageToLinesWithLocationResult,
    /**
     * The ImageToTextResponse model constructor.
     * @property {module:model/ImageToTextResponse}
     */
    ImageToTextResponse: ImageToTextResponse,
    /**
     * The ImageToWordsWithLocationResult model constructor.
     * @property {module:model/ImageToWordsWithLocationResult}
     */
    ImageToWordsWithLocationResult: ImageToWordsWithLocationResult,
    /**
     * The OcrLineElement model constructor.
     * @property {module:model/OcrLineElement}
     */
    OcrLineElement: OcrLineElement,
    /**
     * The OcrPageResult model constructor.
     * @property {module:model/OcrPageResult}
     */
    OcrPageResult: OcrPageResult,
    /**
     * The OcrWordElement model constructor.
     * @property {module:model/OcrWordElement}
     */
    OcrWordElement: OcrWordElement,
    /**
     * The PdfToTextResponse model constructor.
     * @property {module:model/PdfToTextResponse}
     */
    PdfToTextResponse: PdfToTextResponse,
    /**
     * The ImageOcrApi service constructor.
     * @property {module:api/ImageOcrApi}
     */
    ImageOcrApi: ImageOcrApi,
    /**
     * The PdfOcrApi service constructor.
     * @property {module:api/PdfOcrApi}
     */
    PdfOcrApi: PdfOcrApi,
    /**
     * The PreprocessingApi service constructor.
     * @property {module:api/PreprocessingApi}
     */
    PreprocessingApi: PreprocessingApi
  };

  return exports;
}));
