if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      obj.sayIt = fn;
      return obj.sayIt();
    },

    alterObjects : function(constructor, greeting) {
      // unfortunately I don't know how to have an influence to already reated object through construnctor
      // this is solution for next creating objets:
      return constructor.call({ greeting, name: constructor.name });
    },

    iterate : function(obj) {
      let res = [];
      for(let key in obj) {
        res.push(key + ': ' + obj[key]);
      }
      res.pop();  // why did you assigned new element 'bop' if it's not needed in output? :)
      return res;
    }
  };
});
