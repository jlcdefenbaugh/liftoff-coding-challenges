//Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"

function LongestWord(sen) {

sen = sen.match(/[a-z]+/gi);

let longest  = sen[0];

for(i = 0; i < sen.length; i ++) {
  if(sen[i].length > longest.length) {
    longest = sen[i];
  }

}
  return longest;

}
