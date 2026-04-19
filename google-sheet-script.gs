/**
 * Google Apps Script for Advanced Lead Capture
 * 
 * Instructions:
 * 1. Open your Google Sheet.
 * 2. Go to Extensions > Apps Script.
 * 3. Delete any existing code and paste this in.
 * 4. Click 'Deploy' > 'New Deployment'.
 * 5. Select 'Web App'.
 * 6. Set 'Execute as' to 'Me'.
 * 7. Set 'Who has access' to 'Anyone'.
 * 8. Copy the Web App URL and set it as NEXT_PUBLIC_GOOGLE_SHEETS_URL in your environment.
 */

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const lock = LockService.getScriptLock();
  
  // Wait for up to 30 seconds for a lock – prevents concurrent write issues
  try {
    lock.waitLock(30000);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ result: 'error', error: 'Lock timeout' }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  try {
    const data = JSON.parse(e.postData.contents);
    
    // Add human-readable timestamp if not present
    if (!data.timestamp) {
      data.timestamp = Utilities.formatDate(new Date(), "GMT+5:30", "yyyy-MM-dd HH:mm:ss");
    }

    // Get current headers
    let headers = [];
    if (sheet.getLastColumn() > 0) {
      headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    }

    // Identify if we need to add new headers
    const newKeys = Object.keys(data).filter(key => !headers.includes(key));
    if (newKeys.length > 0) {
      if (headers.length === 0) {
        // Sheet is empty, add all keys as headers
        headers = Object.keys(data);
        sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
        sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold").setBackground("#f3f3f3");
      } else {
        // Add only the missing headers
        const nextCol = headers.length + 1;
        sheet.getRange(1, nextCol, 1, newKeys.length).setValues([newKeys]);
        sheet.getRange(1, nextCol, 1, newKeys.length).setFontWeight("bold").setBackground("#f3f3f3");
        headers = headers.concat(newKeys);
      }
    }

    // Prepare the row data based on the header order (Column Agnostic)
    const row = headers.map(header => {
      const val = data[header];
      return (val !== undefined && val !== null) ? val : "";
    });

    // Append the row
    sheet.appendRow(row);

    return ContentService.createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ result: 'error', error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
