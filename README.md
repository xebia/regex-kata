# Regex Parser Code kata

Implement a regex parser with the following features:

 Operator | Description
 ---------| -----------
  . | Matches any single character except newline chars.
  ^ | Matches beginning of input. Example: ^A does not match the "A" in "an A", but does match the first "A" in "An A".
  $ | Matches end of input. Example: t$ does not match the "t" in "eater", but does match it in "eat".
  * | Matches the preceding item x 0 or more times. For example, /bo*/ matches "boooo" in "A ghost booooed" and "b" in "A bird warbled", but nothing in "A goat grunted". This star operator is greedy by default; it tries to match the maximum number of times.

## Rules
 * You cannot change package.json
 * You cannot use regexes
 * Points are awarded for style, but you are free to pick your own style. Pick brevity, clarity, no backtracking, or some other quality you want to showcase. 

Run the testsuite with 'npm test' (don't forget to npm install first)
