//
// program.js
//

var print;
if (sys.print) {
    print = sys.print;
} else if (typeof alert !== "undefined") {
    print = alert;
}

var inc = require('increment').increment;
var a = 1;
print("inc(" + a + ") = " + inc(a))

