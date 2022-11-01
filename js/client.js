'use strict';

const sentence = 'Can I get some extra credit?';

const studlyCaps = function (sentence) {
  const chars = sentence.toLowerCase().split('');
  for (let i = 1; i <= chars.length; i += 2) {
    chars[i] = chars[i].toUpperCase();
  }
  return chars.join('');
};

console.log(studlyCaps(sentence));

