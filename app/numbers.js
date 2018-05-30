if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
      const bin = parseInt(num, 10).toString(2);
      return parseInt(bin[bin.length - bit], 2);
    },

    base10: function(str) {
      return parseInt( parseInt(str, 2).toString(10), 10);
    },

    convertToBinary: function(num) {
      let bin = parseInt(num, 10).toString(2);
      while (bin.length < 8) bin = '0' + bin;
      return bin;
    },

    multiply: function(a, b) {
      return parseFloat((a * b).toFixed(4));
    }
  };
});

