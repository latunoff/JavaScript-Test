if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      const somethingGood = true;
      return new Promise((resolve, reject) => {
        somethingGood ? resolve(value) : reject(false);
      });
    },

    manipulateRemoteData : function(url) {
      return new Promise((resolve, reject) => {
        // fetch(/*some_url*/), but for test I just use:
        Promise.resolve(['Adam', 'Alex', 'Matt', 'Paul', 'Rebecca'])
        .then(res =>{
          resolve(res);
        })
        .catch(err => { // just so, of cource it will never be runned without fetch()
          reject(err);
        });
      });
    }
  };
});
