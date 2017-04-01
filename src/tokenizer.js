// The job of the tokenizer is to produce an array of token objects.
// A token has a `type` and a `value`.
// Currently supported types:
//  - number (eg. 5)
//  - punctuation (eg. ',')
//  - keyword (eg. 'add')
//  - logical_operator (eg. 'and', 'or')
const punctuation = [',', '.'];
const operators = ['add', 'multiply', 'divide', 'subtract'];
const keywords = ['and'];

const isWhitespace = char => /\s/.test(char);

module.exports = function tokenizer(input, tokens = []) {
  const firstChar = input[0];

  // Because this method is recursive, eventually we'll hit the point where
  // input is an empty string. This is our "done" case; just return the tokens.
  if (input === '') {
    return tokens;
  }

  // Ignore whitespace
  if (isWhitespace(firstChar)) {
    return tokenizer(input.slice(1), tokens);
  }

  // Punctuation is easy, since all punctuation in Yadda is a single character.
  if (punctuation.includes(firstChar)) {
    const token = { type: 'punctuation', value: firstChar };

    return tokenizer(
      input.slice(1),
      [...tokens, token]
    );
  }
}
