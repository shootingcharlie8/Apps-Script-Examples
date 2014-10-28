//  Allows the user to run from Addons>name of script
function onOpen(e) {
  SpreadsheetApp.getUi().createAddonMenu()
      //  Make Sheets run the copy function
      .addItem('Make Sheets', 'copy')
      //  Search run the search function
      .addItem('Search', 'search')
  
      .addToUi();
}

function search() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Index");
  //  Merge cells C:6 - E:6 for the search function.
  var range = sheet.getRange("C6:E6");
  var search = range.getValue()
  var actsheet = ss.getSheetByName(search)
  actsheet.activate()
}

function copy() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];

  var b = 1;
 var rowcount = (sheet.getLastRow());
 // put list of names in the A collum, starting in the first row.
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


