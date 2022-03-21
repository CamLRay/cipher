let sentence = prompt("ENTER A SENTENCE.");

function firstLast(string) {
  let firstLetter = string.slice(0,1);
  let lastLetter = string.slice(-1);
  let newSentence = firstLetter + lastLetter;
  // let reverseSentence= newSentence.reverse();
  // return console.log(reverseSentence)
  return newSentence.toUpperCase();
}

function reverse(string) {
  let firstLetter = string.slice(0,1);
  let lastLetter = string.slice(-1);
  let newReverseSentence = lastLetter + firstLetter;
  return newReverseSentence.toUpperCase();
}

console.log(reverse(sentence));








