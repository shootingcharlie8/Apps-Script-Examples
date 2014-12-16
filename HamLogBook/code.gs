function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

function processForm(formObject) {
    var ss = SpreadsheetApp.openById("1_uNPezrgHQRhJWqw7mueD-7u3deQ6aiiffqrQ3EWdVg");
  var sheet = ss.getActiveSheet()
var row = sheet.getLastRow()
  //receptian of form
  var formBlob1 = formObject.call;
  var formBlob2 = formObject.name;
  var formBlob3 = formObject.country;
  var formBlob4 = formObject.class;
  var formBlob5 = formObject.sig;
  var formBlob6 = formObject.date;
  //process form info (nothing needing to be processed yet!)
  
  //log info
  // temp log {
  var driveFile = Logger.log(formBlob1);
  var driveFile2 = Logger.log(formBlob2);
  var driveFile3 = Logger.log(formBlob3);
  var driveFile4 = Logger.log(formBlob4);
  var driveFile5 = Logger.log(formBlob5);
  var driveFile6 = Logger.log(formBlob6);
  //}
  // prem log {
  sheet.appendRow([formBlob6, formBlob1, formBlob2, formBlob3, formBlob4, formBlob5])
  
  
  //}
  
  
}
