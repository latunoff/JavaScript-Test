if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {
        let name = str2;
        let greeting = str1;

        let sayIt = () => greeting + ', ' + name;

        return {
          name,
          greeting,
          sayIt
        }
    }
  };
});

