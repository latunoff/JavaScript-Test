if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn(...arr);
    },

    speak : function(fn, obj) {
      return fn.call({name: obj.name, greeting: obj.greeting});
    },

    functionFunction : function(str) {
      return function(str1) {
        return str + ', ' +  str1;
      }
    },

    makeClosures : function(arr, fn) {
      let fs = [];
      for (var i = 0; i < arr.length; i++) {
        fs.push(fn.bind(null, arr[i]));
      }
      return fs;
    },

    partial : function(fn, str1, str2) {
      return fn.bind(null, str1, str2);
    },

    useArguments : function() {
      return [...arguments].map(a => a).reduce((sum, n) => sum + n);
    },

    callIt : function(fn) {
      const args = [...arguments].slice(1);
      return fn(...args);
    },

    partialUsingArguments : function(fn) {
      const args = [...arguments].slice(1);
      return fn.bind(null, ...args);
    }
  };
});
