// Example x = 32243;
// Expected Output : 34223

function reverseNumber(num) {
  num = num + "";
  return num.split("").reverse().join("");
}

console.log(reverseNumber(32243));

// converting number into a string
// splitting the string into individual numbers (array)
// reversing the numbers
// re-joining into a string


// ___

// ***ASK ABOUT TONIGHT 3/2
// Write a JavaScript function that checks whether a passed string is palindrome or not?
// function palindrome(input) {
//   if (input.reverse() === input) {
//     return true;
// } else {
//     return false;
// }
// }
//
// console.log(palindrome(madam));



// Write a JavaScript function that returns a passed string with letters in alphabetical order. Go to the editor
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

function alphabetical(longword) {
  var letters=["a-z"];
  return longword.toLowerCase().split('').sort().join('');
};

console.log(alphabetical("carnivore"));


 // ***ASK ABOUT TONIGHT 3/2
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// function proper(str) {
//   var input=str.split(' ');
//   return input.charAt(0).toUpperCase().join(' ');
// }
//
// console.log(proper("i love my dog"));
