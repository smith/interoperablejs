
exports.print = function () {
    sys.print.apply(undefined, arguments);
};

exports.assert = function assert(guard, message) {
    var n = ++assert.state.count;
    if (guard) {
        exports.print(n + 'ok ' + message, 'pass');
    } else {
        exports.print(n + 'not ok ' + message, 'fail');
    }
};

exports.done_testing = function() {
  if (assert.state) 
    exports.print("1.."+assert.state.count);
  else 
    exports.print("0..0");
}

exports.assert.state = {
  count: 0;
};

