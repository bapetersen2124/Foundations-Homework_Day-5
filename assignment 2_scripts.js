function yell(input) {
  return input.toUpperCase();
}

console.log(yell("this is my inside voice"));

function yell10(input) {
  return (input.toUpperCase().repeat(10));
}

console.log(yell10("this is my inside voice "));

function yell15(input) {
  return (yell(input).repeat(15));
}

console.log(yell15("this is my inside voice"));
