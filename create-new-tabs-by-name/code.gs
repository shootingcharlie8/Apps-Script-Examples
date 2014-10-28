function onOpen(e) {
  SpreadsheetApp.getUi().createAddonMenu()
      .addItem('Make Sheets', 'copy')
      .addItem('Search', 'search')
  
      .addToUi();
}

function search() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Index");
  var range = sheet.getRange("C6:E6");
  var search = range.getValue()
  var actsheet = ss.getSheetByName(search)
  actsheet.activate()
}

function copy() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  // var range2 = sheet.getRange("B1:B2");

  //var templateid = range2.getCell(1, 1).getValue()
  //var folderpath = range2.getCell(2, 1).getValue()
  //  Logger.log(templateid);

 // var TemplateFile = DocsList.getFileById(templateid); //template sheet
  //var filesFolder = DocsList.getFolder(folderpath);
  var b = 1;
 var rowcount = (sheet.getLastRow());
 var range = sheet.getRange("A1:A" + rowcount);
      var count = rowcount.toFixed(0);
  //Logger.log(count);

  while (b <= rowcount) {
      var round = b.toFixed(0);
  //Logger.log(round)
  var cell = range.getCell(round, 1);
  var name = cell.getValue()
    Logger.log(name);
    ss.insertSheet(name)
  var b = b + 1;
}
}


