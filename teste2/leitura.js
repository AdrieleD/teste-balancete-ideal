var readline = require('readline');
var fs = require('fs');

var conteudo = fs.readFileSync("12-2017.txt", {encoding: "utf8"});
conteudo = conteudo.replace(/9.9.99.999.999/g, ""); 
console.log(conteudo);