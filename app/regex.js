if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
      return str.match(/[0-9]/) !== null;
    },

    containsRepeatingLetter : function(str) {
      const regEx = /([a-z]).*?\1/i;
      return str.match(regEx) !== null;
    },

    endsWithVowel : function(str) {
      return str.match(/^.*[aeiou]$/i) !== null;
    },

    captureThreeNumbers : function(str) {
      const res = str.match(/\d{3}/);
      return res != null ? res[0] : false;
    },

    matchesPattern : function(str) {
      return str.match(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/) !== null;
    }
  };
});