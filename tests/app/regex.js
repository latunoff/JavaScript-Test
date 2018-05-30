/*globals describe:true, it:true, expect:true, beforeEach:true */
if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
  'app/regex'
], function(answers) {
  describe('regular expressions', function() {
    it('detect a number in a string', function() {
      expect(answers.containsNumber('abc123')).to.eql(true);
      expect(answers.containsNumber('abc')).to.eql(false);
    });

    it('detect a repeating letter in a string', function() {
      expect(answers.containsRepeatingLetter('bookkeeping')).to.eql(true);
      expect(answers.containsRepeatingLetter('rattler')).to.eql(true);
      expect(answers.containsRepeatingLetter('ZEPPELIN')).to.eql(true);
      expect(answers.containsRepeatingLetter('cats')).to.eql(false);
      expect(answers.containsRepeatingLetter('l33t')).to.eql(false);
    });

    it('determine whether a string ends with a vowel (aeiou)', function() {
      expect(answers.endsWithVowel('cats')).to.eql(false);
      expect(answers.endsWithVowel('gorilla')).to.eql(true);
      expect(answers.endsWithVowel('I KNOW KUNG FU')).to.eql(true);
    });

    it('capture the first series of three numbers', function() {
      expect(answers.captureThreeNumbers('abc123')).to.eql('123');
      expect(answers.captureThreeNumbers('9876543')).to.eql('987');
      expect(answers.captureThreeNumbers('abcdef')).to.eql(false);
      expect(answers.captureThreeNumbers('12ab12ab')).to.eql(false);
    });

    it('determine whether a string matches a pattern', function() {
      // the pattern is XXX-XXX-XXXX where all X's are digits
      expect(answers.matchesPattern('800-555-1212')).to.eql(true);
      expect(answers.matchesPattern('451-933-7899')).to.eql(true);
      expect(answers.matchesPattern('33-444-5555')).to.eql(false);
      expect(answers.matchesPattern('abc-def-hijk')).to.eql(false);
      expect(answers.matchesPattern('1800-555-1212')).to.eql(false);
      expect(answers.matchesPattern('800-555-12121')).to.eql(false);
      expect(answers.matchesPattern('800-5555-1212')).to.eql(false);
      expect(answers.matchesPattern('800-55-1212')).to.eql(false);
    });
  });
});
