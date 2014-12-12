function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

function processForm(formObject) {
    var ss = SpreadsheetApp.openById("****INSERT FILE ID HERE****");
  var sheet = ss.getActiveSheet()
var row = sheet.getLastRow()
  //receptian of form
  var formBlob1 = formObject.firstname;
  var formBlob2 = formObject.lastname;
  var formBlob3 = formObject.sex;
  var formBlob4 = formObject.grade;
  var formBlob5 = formObject.class;
  //process form info (nothing needing to be processed yet!)
  
  //log info
  
  // temp log {
  var driveFile = Logger.log(formBlob1);
  var driveFile2 = Logger.log(formBlob2);
  var driveFile3 = Logger.log(formBlob3);
  var driveFile4 = Logger.log(formBlob4);
  var driveFile5 = Logger.log(formBlob5);
  //}
  // prem log {
  sheet.appendRow([formBlob1, formBlob2, formBlob3, formBlob4, formBlob5])
  
  
  //}
  
  
}
