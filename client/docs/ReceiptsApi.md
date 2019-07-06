# CloudmersiveOcrApiClient.ReceiptsApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**receiptsPhotoToCSV**](ReceiptsApi.md#receiptsPhotoToCSV) | **POST** /ocr/receipts/photo/to/csv | Convert a photo of a receipt into a CSV file containing structured information from the receipt


<a name="receiptsPhotoToCSV"></a>
# **receiptsPhotoToCSV**
> Object receiptsPhotoToCSV(imageFile)

Convert a photo of a receipt into a CSV file containing structured information from the receipt

Leverage Deep Learning to automatically turn a photo of a receipt into a CSV file containing the structured information from the receipt.

### Example
```javascript
var CloudmersiveOcrApiClient = require('cloudmersive-ocr-api-client');
var defaultClient = CloudmersiveOcrApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveOcrApiClient.ReceiptsApi();

var imageFile = "/path/to/file.txt"; // File | Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.receiptsPhotoToCSV(imageFile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageFile** | **File**| Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported. | 

### Return type

**Object**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml

