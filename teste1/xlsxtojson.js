fs = require('fs');
const XLSX = require('xlsx');
const workbook = XLSX.readFile('balanceteideal.xlsx');
const sheet_name_list = workbook.SheetNames;
var tabelaJson = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])
tabelaJson = JSON.stringify(tabelaJson);

fs.writeFile('balanceteideal.json', tabelaJson, function(err) {
    console.log('JSON escrito com sucesso! O arquivo está na raiz do projeto.')
})
