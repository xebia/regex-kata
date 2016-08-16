import chai, { expect, should } from 'chai';
should();
import 'babel-polyfill';
import match from './match';


describe('regex code kata', () => {

  describe('dot matches a char', () => {

    it('matches chars', () => {
      expect(match('.', 'a')).to.equal('a');
      expect(match('.', '.')).to.equal('.');
      expect(match('.', '1')).to.equal('1');
      expect(match('.', 'z')).to.equal('z');
      expect(match('.', ' ')).to.equal(' ');
    });

    it('partial match', () => {
      expect(match('.', 'abc')).to.equal('a');
    });

    it('does not match newline operators', () => {
      expect(match('.', '\n')).to.equal('');
      expect(match('.', '\r')).to.equal('');
    });

  });

  describe('beginning of input ^', () => {

    it('matches', () => {
      expect(match('^a', 'a')).to.equal('a');
      expect(match('^A', 'An A')).to.equal('A');
    });

    it('does not match', () => {
      expect(match('^A', 'an A')).to.equal('');
    });

  });


  describe('end of input $', () => {

    it('matches', () => {
      expect(match('a$', 'a')).to.equal('a');
      expect(match('t$', 'eat')).to.equal('t');
    });

    it('does not match', () => {
      expect(match('t$', 'eater')).to.equal('t');
    });

  });

  describe('star operator *', () => {
    it('is greedy', () => {
      expect(match('a*', 'aaaa')).to.be.true;
    });

    it('matches zero occurances', () => {
      expect(match('bo*', 'A bird warbled')).to.be.true;
    });

    it('does not match', () => {
      expect(match('bo*', 'A goat grunter')).to.be.false;
    });
  });

});
