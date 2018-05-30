if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      var files = [];
      const getFiles = function(data, get) {
        data.files.forEach(e => {
          if (dirName === undefined || (dirName !== undefined && data.dir == dirName)) get = true;
          if (typeof(e) == 'string' && get)
            files.push(e);
          if (typeof(e) == 'object')
            getFiles(e, get);  
        });
      }
      
      getFiles(data, false);

      return files;
    }
  };
});
