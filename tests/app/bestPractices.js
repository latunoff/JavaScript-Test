/*jshint expr:true*/
/*globals describe:true, it:true, expect:true, beforeEach:true */
if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
  'app/bestPractices'
], function(answers) {
  describe('best practices', function(){
    it('avoid global variables', function() {
      answers.globals();
      expect(window.myObject).not.to.be.ok;
    });

    it('declare functions safely', function() {
      var val = answers.functions(true);
      expect(val).to.eql('a');
    });

    it('use parseInt correctly', function() {
      expect(answers.parseInt('12')).to.eql(12);
      expect(answers.parseInt('12px')).to.eql(12);
      expect(answers.parseInt('0x12')).to.eql(0);
    });

    it('understand strict comparison', function() {
      expect(answers.identity(1, '1')).to.eql(false);
      expect(answers.identity(1, 1)).to.eql(true);
      expect(answers.identity(0, false)).to.eql(false);
    });

  });
});
