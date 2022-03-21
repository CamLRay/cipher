let sentence = prompt("Ask Zoltar.");

function firstLast(string) {
  let firstLetter = string.slice(0, 1);
  let lastLetter = string.slice(-1);
  let newSentence = firstLetter + lastLetter;
  // let reverseSentence= newSentence.reverse();
  // return console.log(reverseSentence)
  return newSentence.toUpperCase();
}

function reverse(string) {
  // let firstLetter = string.slice(0,1);
  // let lastLetter = string.slice(-1);
  // let newReverseSentence = lastLetter + firstLetter;
    let newReverseSentence = firstLast(string).split("").reverse().join("");
  return newReverseSentence;
}

function thirdFunction(string) {
  let newSentence = string + reverse(string);
  return newSentence;
}

function fourthFunction(string) {
  let length = string.length;
  let position = parseInt(length/2);
  let letter = string.charAt(position);
  return letter.toUpperCase().concat(thirdFunction(string));
}

let cipher = fourthFunction(sentence);
let cipherReverse = fourthFunction(sentence).split("").reverse().join("");

$(document).ready(function() {
  $("#original").click(function() {
    alert(sentence);
  });
  $("#encoded").click(function() {
    alert(cipherReverse);
  });

});





