function tgButtonF(){
    window.location = '/html/register.html'
}

const SHEET_ID = '1bq_ZLgjiMNen1cicRVB_dGN1ydXka7TeBv2mYpSPZVE'
const AUTH_TOKEN = 'ya29.a0AeTM1ifPIoMcURjIJe_8Jv0tbB3SjVdMkQ793Q0lpnFLlX4ikC4a_DinayObZtfmx3Kj_CETKNhmDPQdI58vT38hR_baE8gYlVhoB34RTaxGZE4rwgNci1oGRJP0_6B82Ewkn41moIDFC22ajZzzVI6LpNgUaCgYKAewSARASFQHWtWOm1WKqtlqfJUajFkkEGPJ3-A0163'

fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}:batchUpdate`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${AUTH_TOKEN}`,
    },
    body: JSON.stringify({
        requests: [{
            repeatCell: {
              range: {
                startColumnIndex: 0,
                endColumnIndex: 1,
                startRowIndex: 3,
                endRowIndex: 4,
                sheetId: 0
              },
              cell: {
                userEnteredValue: {
                  "stringValue": 'asdsad@asdasd.com'
                },
              },
              fields: "*"
            }
          }]
    })
})

fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values:batchGet?ranges=B2:B&majorDimension=COLUMNS`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${AUTH_TOKEN}`,
    }
})