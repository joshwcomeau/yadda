const tokenizer = require('../tokenizer');


describe('tokenizer', () => {
  it('parses punctuation - period', () => {
    expect(tokenizer('.')).toEqual([
      { type: 'punctuation', value: '.' },
    ]);
  });

  it('parses punctuation - comma', () => {
    expect(tokenizer(',')).toEqual([
      { type: 'punctuation', value: ',' },
    ]);
  });
});
