# CloudmersiveOcrApiClient.PhotoToWordsWithLocationResult

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**successful** | **Boolean** | True if successful, false otherwise | [optional] 
**textElements** | [**[OcrPhotoTextElement]**](OcrPhotoTextElement.md) | Word elements in the image | [optional] 
**diagnosticImage** | **Blob** | Typically null.  To analyze OCR performance, enable diagnostic mode by adding the HTTP header \&quot;DiagnosticMode\&quot; with the value \&quot;true\&quot;.  When this is true, a diagnostic image showing the details of the OCR result will be set in PNG format into DiagnosticImage. | [optional] 


