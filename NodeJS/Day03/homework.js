const fs = require('fs');
var check = fs.existsSync('./num.txt')
if (!check) {
    fs.writeFileSync('./num.txt',0)    
}
var read = fs.readFileSync('./num.txt');
//console.log(read.toString());
var count = fs.readFileSync('./num.txt');
count = parseInt(count);
count += 1;
fs.writeFileSync('./num.txt', count);
console.log(count);
