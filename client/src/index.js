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
    define(['ApiClient', 'model/GetPageAngleResult', 'model/ImageToLinesWithLocationResult', 'model/ImageToTextResponse', 'model/ImageToWordsWithLocationResult', 'model/OcrLineElement', 'model/OcrPageResult', 'model/OcrPageResultWithLinesWithLocation', 'model/OcrPageResultWithWordsWithLocation', 'model/OcrPhotoTextElement', 'model/OcrWordElement', 'model/PdfToLinesWithLocationResult', 'model/PdfToTextResponse', 'model/PdfToWordsWithLocationResult', 'model/PhotoToWordsWithLocationResult', 'api/ImageOcrApi', 'api/PdfOcrApi', 'api/PreprocessingApi', 'api/ReceiptsApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/GetPageAngleResult'), require('./model/ImageToLinesWithLocationResult'), require('./model/ImageToTextResponse'), require('./model/ImageToWordsWithLocationResult'), require('./model/OcrLineElement'), require('./model/OcrPageResult'), require('./model/OcrPageResultWithLinesWithLocation'), require('./model/OcrPageResultWithWordsWithLocation'), require('./model/OcrPhotoTextElement'), require('./model/OcrWordElement'), require('./model/PdfToLinesWithLocationResult'), require('./model/PdfToTextResponse'), require('./model/PdfToWordsWithLocationResult'), require('./model/PhotoToWordsWithLocationResult'), require('./api/ImageOcrApi'), require('./api/PdfOcrApi'), require('./api/PreprocessingApi'), require('./api/ReceiptsApi'));
  }
}(function(ApiClient, GetPageAngleResult, ImageToLinesWithLocationResult, ImageToTextResponse, ImageToWordsWithLocationResult, OcrLineElement, OcrPageResult, OcrPageResultWithLinesWithLocation, OcrPageResultWithWordsWithLocation, OcrPhotoTextElement, OcrWordElement, PdfToLinesWithLocationResult, PdfToTextResponse, PdfToWordsWithLocationResult, PhotoToWordsWithLocationResult, ImageOcrApi, PdfOcrApi, PreprocessingApi, ReceiptsApi) {
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
   * @version 1.2.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The GetPageAngleResult model constructor.
     * @property {module:model/GetPageAngleResult}
     */
    GetPageAngleResult: GetPageAngleResult,
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
     * The OcrPageResultWithLinesWithLocation model constructor.
     * @property {module:model/OcrPageResultWithLinesWithLocation}
     */
    OcrPageResultWithLinesWithLocation: OcrPageResultWithLinesWithLocation,
    /**
     * The OcrPageResultWithWordsWithLocation model constructor.
     * @property {module:model/OcrPageResultWithWordsWithLocation}
     */
    OcrPageResultWithWordsWithLocation: OcrPageResultWithWordsWithLocation,
    /**
     * The OcrPhotoTextElement model constructor.
     * @property {module:model/OcrPhotoTextElement}
     */
    OcrPhotoTextElement: OcrPhotoTextElement,
    /**
     * The OcrWordElement model constructor.
     * @property {module:model/OcrWordElement}
     */
    OcrWordElement: OcrWordElement,
    /**
     * The PdfToLinesWithLocationResult model constructor.
     * @property {module:model/PdfToLinesWithLocationResult}
     */
    PdfToLinesWithLocationResult: PdfToLinesWithLocationResult,
    /**
     * The PdfToTextResponse model constructor.
     * @property {module:model/PdfToTextResponse}
     */
    PdfToTextResponse: PdfToTextResponse,
    /**
     * The PdfToWordsWithLocationResult model constructor.
     * @property {module:model/PdfToWordsWithLocationResult}
     */
    PdfToWordsWithLocationResult: PdfToWordsWithLocationResult,
    /**
     * The PhotoToWordsWithLocationResult model constructor.
     * @property {module:model/PhotoToWordsWithLocationResult}
     */
    PhotoToWordsWithLocationResult: PhotoToWordsWithLocationResult,
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
    PreprocessingApi: PreprocessingApi,
    /**
     * The ReceiptsApi service constructor.
     * @property {module:api/ReceiptsApi}
     */
    ReceiptsApi: ReceiptsApi
  };

  return exports;
}));
