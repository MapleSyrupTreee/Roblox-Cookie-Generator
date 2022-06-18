const fs = require('fs')

var Warning = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_"
var Length = [808, 776, 744][1] // Change 1 to 0, 1, or 2 to change the length
var Amount = 10

function GenerateString(Len) {
    var Result = "";
    var Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var CharLen = Chars.length;
    for ( var i = 0; i < Len; i++ ) {
        Result += Chars.charAt(Math.floor(Math.random() * CharLen));
    }
   return Result;
}

for ( var i = 0; i < Amount; i++ ) {
    fs.appendFile('Generated.txt', Warning + GenerateString(Length) + "\n", (Error) => { if (Error) { console.log("Error writing to file."); return; } })
}
