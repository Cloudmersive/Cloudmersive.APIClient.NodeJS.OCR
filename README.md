# cloudmersive-ocr-api-client

CloudmersiveOcrApiClient - JavaScript client for cloudmersive-ocr-api-client
The powerful Optical Character Recognition (OCR) APIs let you convert scanned images of pages into recognized text.
[Cloudmersive OCR API](https://www.cloudmersive.com/ocr-api) provides advanced machine learning capabilities for converting scanned documents and photos of documents and receipts to text.

- API version: v1
- Package version: 1.2.4


## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install cloudmersive-ocr-api-client --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your cloudmersive-ocr-api-client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('cloudmersive-ocr-api-client')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var CloudmersiveOcrApiClient = require('cloudmersive-ocr-api-client');

var defaultClient = CloudmersiveOcrApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix['Apikey'] = "Token"

var api = new CloudmersiveOcrApiClient.ImageOcrApi()

var imageFile = "/path/to/file.txt"; // {File} Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.

var opts = { 
  'language': "language_example", // {String} Optional, language of the input document, default is English (ENG).  Possible values are ENG (English), ARA (Arabic), ZHO (Chinese - Simplified), ZHO-HANT (Chinese - Traditional), ASM (Assamese), AFR (Afrikaans), AMH (Amharic), AZE (Azerbaijani), AZE-CYRL (Azerbaijani - Cyrillic), BEL (Belarusian), BEN (Bengali), BOD (Tibetan), BOS (Bosnian), BUL (Bulgarian), CAT (Catalan; Valencian), CEB (Cebuano), CES (Czech), CHR (Cherokee), CYM (Welsh), DAN (Danish), DEU (German), DZO (Dzongkha), ELL (Greek), ENM (Archaic/Middle English), EPO (Esperanto), EST (Estonian), EUS (Basque), FAS (Persian), FIN (Finnish), FRA (French), FRK (Frankish), FRM (Middle-French), GLE (Irish), GLG (Galician), GRC (Ancient Greek), HAT (Hatian), HEB (Hebrew), HIN (Hindi), HRV (Croatian), HUN (Hungarian), IKU (Inuktitut), IND (Indonesian), ISL (Icelandic), ITA (Italian), ITA-OLD (Old - Italian), JAV (Javanese), JPN (Japanese), KAN (Kannada), KAT (Georgian), KAT-OLD (Old-Georgian), KAZ (Kazakh), KHM (Central Khmer), KIR (Kirghiz), KOR (Korean), KUR (Kurdish), LAO (Lao), LAT (Latin), LAV (Latvian), LIT (Lithuanian), MAL (Malayalam), MAR (Marathi), MKD (Macedonian), MLT (Maltese), MSA (Malay), MYA (Burmese), NEP (Nepali), NLD (Dutch), NOR (Norwegian), ORI (Oriya), PAN (Panjabi), POL (Polish), POR (Portuguese), PUS (Pushto), RON (Romanian), RUS (Russian), SAN (Sanskrit), SIN (Sinhala), SLK (Slovak), SLV (Slovenian), SPA (Spanish), SPA-OLD (Old Spanish), SQI (Albanian), SRP (Serbian), SRP-LAT (Latin Serbian), SWA (Swahili), SWE (Swedish), SYR (Syriac), TAM (Tamil), TEL (Telugu), TGK (Tajik), TGL (Tagalog), THA (Thai), TIR (Tigrinya), TUR (Turkish), UIG (Uighur), UKR (Ukrainian), URD (Urdu), UZB (Uzbek), UZB-CYR (Cyrillic Uzbek), VIE (Vietnamese), YID (Yiddish)
  'preprocessing': "preprocessing_example" // {String} Optional, preprocessing mode, default is 'Auto'.  Possible values are None (no preprocessing of the image), and Auto (automatic image enhancement of the image before OCR is applied; this is recommended).
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.imageOcrImageLinesWithLocation(imageFile, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.cloudmersive.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CloudmersiveOcrApiClient.ImageOcrApi* | [**imageOcrImageLinesWithLocation**](docs/ImageOcrApi.md#imageOcrImageLinesWithLocation) | **POST** /ocr/image/to/lines-with-location | Convert a scanned image into words with location
*CloudmersiveOcrApiClient.ImageOcrApi* | [**imageOcrImageWordsWithLocation**](docs/ImageOcrApi.md#imageOcrImageWordsWithLocation) | **POST** /ocr/image/to/words-with-location | Convert a scanned image into words with location
*CloudmersiveOcrApiClient.ImageOcrApi* | [**imageOcrPhotoRecognizeBusinessCard**](docs/ImageOcrApi.md#imageOcrPhotoRecognizeBusinessCard) | **POST** /ocr/photo/recognize/business-card | Recognize a photo of a business card, extract key business information
*CloudmersiveOcrApiClient.ImageOcrApi* | [**imageOcrPhotoRecognizeForm**](docs/ImageOcrApi.md#imageOcrPhotoRecognizeForm) | **POST** /ocr/photo/recognize/form | Recognize a photo of a form, extract key fields and business information
*CloudmersiveOcrApiClient.ImageOcrApi* | [**imageOcrPhotoRecognizeReceipt**](docs/ImageOcrApi.md#imageOcrPhotoRecognizeReceipt) | **POST** /ocr/photo/recognize/receipt | Recognize a photo of a receipt, extract key business information
*CloudmersiveOcrApiClient.ImageOcrApi* | [**imageOcrPhotoToText**](docs/ImageOcrApi.md#imageOcrPhotoToText) | **POST** /ocr/photo/toText | Convert a photo of a document into text
*CloudmersiveOcrApiClient.ImageOcrApi* | [**imageOcrPhotoWordsWithLocation**](docs/ImageOcrApi.md#imageOcrPhotoWordsWithLocation) | **POST** /ocr/photo/to/words-with-location | Convert a photo of a document or receipt into words with location
*CloudmersiveOcrApiClient.ImageOcrApi* | [**imageOcrPost**](docs/ImageOcrApi.md#imageOcrPost) | **POST** /ocr/image/toText | Convert a scanned image into text
*CloudmersiveOcrApiClient.PdfOcrApi* | [**pdfOcrPdfToLinesWithLocation**](docs/PdfOcrApi.md#pdfOcrPdfToLinesWithLocation) | **POST** /ocr/pdf/to/lines-with-location | Convert a PDF into text lines with location
*CloudmersiveOcrApiClient.PdfOcrApi* | [**pdfOcrPdfToWordsWithLocation**](docs/PdfOcrApi.md#pdfOcrPdfToWordsWithLocation) | **POST** /ocr/pdf/to/words-with-location | Convert a PDF into words with location
*CloudmersiveOcrApiClient.PdfOcrApi* | [**pdfOcrPost**](docs/PdfOcrApi.md#pdfOcrPost) | **POST** /ocr/pdf/toText | Converts an uploaded PDF file into text via Optical Character Recognition.
*CloudmersiveOcrApiClient.PreprocessingApi* | [**preprocessingBinarize**](docs/PreprocessingApi.md#preprocessingBinarize) | **POST** /ocr/preprocessing/image/binarize | Convert an image of text into a binarized (light and dark) view
*CloudmersiveOcrApiClient.PreprocessingApi* | [**preprocessingBinarizeAdvanced**](docs/PreprocessingApi.md#preprocessingBinarizeAdvanced) | **POST** /ocr/preprocessing/image/binarize/advanced | Convert an image of text into a binary (light and dark) view with ML
*CloudmersiveOcrApiClient.PreprocessingApi* | [**preprocessingGetPageAngle**](docs/PreprocessingApi.md#preprocessingGetPageAngle) | **POST** /ocr/preprocessing/image/get-page-angle | Get the angle of the page / document / receipt
*CloudmersiveOcrApiClient.PreprocessingApi* | [**preprocessingUnrotate**](docs/PreprocessingApi.md#preprocessingUnrotate) | **POST** /ocr/preprocessing/image/unrotate | Detect and unrotate a document image
*CloudmersiveOcrApiClient.PreprocessingApi* | [**preprocessingUnrotateAdvanced**](docs/PreprocessingApi.md#preprocessingUnrotateAdvanced) | **POST** /ocr/preprocessing/image/unrotate/advanced | Detect and unrotate a document image (advanced)
*CloudmersiveOcrApiClient.PreprocessingApi* | [**preprocessingUnskew**](docs/PreprocessingApi.md#preprocessingUnskew) | **POST** /ocr/preprocessing/image/unskew | Detect and unskew a photo of a document
*CloudmersiveOcrApiClient.ReceiptsApi* | [**receiptsPhotoToCSV**](docs/ReceiptsApi.md#receiptsPhotoToCSV) | **POST** /ocr/receipts/photo/to/csv | Convert a photo of a receipt into a CSV file containing structured information from the receipt


## Documentation for Models

 - [CloudmersiveOcrApiClient.BusinessCardRecognitionResult](docs/BusinessCardRecognitionResult.md)
 - [CloudmersiveOcrApiClient.FieldResult](docs/FieldResult.md)
 - [CloudmersiveOcrApiClient.FormDefinitionTemplate](docs/FormDefinitionTemplate.md)
 - [CloudmersiveOcrApiClient.FormFieldDefinition](docs/FormFieldDefinition.md)
 - [CloudmersiveOcrApiClient.FormRecognitionResult](docs/FormRecognitionResult.md)
 - [CloudmersiveOcrApiClient.FormTableColumnDefinition](docs/FormTableColumnDefinition.md)
 - [CloudmersiveOcrApiClient.FormTableDefinition](docs/FormTableDefinition.md)
 - [CloudmersiveOcrApiClient.GetPageAngleResult](docs/GetPageAngleResult.md)
 - [CloudmersiveOcrApiClient.ImageToLinesWithLocationResult](docs/ImageToLinesWithLocationResult.md)
 - [CloudmersiveOcrApiClient.ImageToTextResponse](docs/ImageToTextResponse.md)
 - [CloudmersiveOcrApiClient.ImageToWordsWithLocationResult](docs/ImageToWordsWithLocationResult.md)
 - [CloudmersiveOcrApiClient.OcrLineElement](docs/OcrLineElement.md)
 - [CloudmersiveOcrApiClient.OcrPageResult](docs/OcrPageResult.md)
 - [CloudmersiveOcrApiClient.OcrPageResultWithLinesWithLocation](docs/OcrPageResultWithLinesWithLocation.md)
 - [CloudmersiveOcrApiClient.OcrPageResultWithWordsWithLocation](docs/OcrPageResultWithWordsWithLocation.md)
 - [CloudmersiveOcrApiClient.OcrPhotoTextElement](docs/OcrPhotoTextElement.md)
 - [CloudmersiveOcrApiClient.OcrWordElement](docs/OcrWordElement.md)
 - [CloudmersiveOcrApiClient.PdfToLinesWithLocationResult](docs/PdfToLinesWithLocationResult.md)
 - [CloudmersiveOcrApiClient.PdfToTextResponse](docs/PdfToTextResponse.md)
 - [CloudmersiveOcrApiClient.PdfToWordsWithLocationResult](docs/PdfToWordsWithLocationResult.md)
 - [CloudmersiveOcrApiClient.PhotoToWordsWithLocationResult](docs/PhotoToWordsWithLocationResult.md)
 - [CloudmersiveOcrApiClient.Point](docs/Point.md)
 - [CloudmersiveOcrApiClient.ReceiptLineItem](docs/ReceiptLineItem.md)
 - [CloudmersiveOcrApiClient.ReceiptRecognitionResult](docs/ReceiptRecognitionResult.md)
 - [CloudmersiveOcrApiClient.TableCellResult](docs/TableCellResult.md)
 - [CloudmersiveOcrApiClient.TableResult](docs/TableResult.md)
 - [CloudmersiveOcrApiClient.TableRowResult](docs/TableRowResult.md)


## Documentation for Authorization


### Apikey

- **Type**: API key
- **API key parameter name**: Apikey
- **Location**: HTTP header

