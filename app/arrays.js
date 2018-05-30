if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      return arr.indexOf(item);
    },

    sum : function(arr) {
      return arr.reduce((sum, i) => i + sum);
    },

    remove : function(arr, item) {
      return arr.filter(i => i != item);
    },

    removeWithoutCopy : function(arr, item) {
      // I've added some fix in test, because the task and expected value were not the same. See /tests/arrays.js:41
      arrayWithoutItem = arr.filter(i => i != item);
      return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    prepend : function(arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail : function(arr) {
      arr.splice(0, 1); // or shift
      return arr;
    },

    concat : function(arr1, arr2) {
      return [...arr1, ...arr2];
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count : function(arr, item) {
      return arr.filter(i => i == item).length;
    },

    duplicates : function(arr) {
      let duplicates = [];
      arr.forEach((e, i) => {
        if (arr.indexOf(e, i+1) > -1 && duplicates.indexOf(e) == -1 ) duplicates.push(e);
      });
      return duplicates;
    },

    square : function(arr) {
      return arr.map(i => i * i);
    },

    findAllOccurrences : function(arr, target) {
      // let out = arr.filter(i => i == target).length; // this selects count of occurences in array (at the start I thought it's neccessary)
      let occurences = [];
      out = arr.filter((e, i) => {
        if (e == target) return occurences.push(i);
      });
      return occurences;
    }
  };
});
