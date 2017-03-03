function longest(input1, input2) {
  var length1=input1.length;
  var length2=input2.length;
  if (length1 > length2) {
    console.log(input1);
  } else {
    console.log(input2);
  }
}

(longest("this is my inside voice","bernesto the besto my favorite little pesto"));

function longer (a,b) {
  if (a.length > b.length) {
    return a;
  } else {
    return b;
  }
}

console.log(longer("lovebug","banana"));

function longer (a,b) {
  if (a.length === b.length) {
    return "they are the same length";
  } else if (a.length > b.length) {
    return a;
  } else
    return b;
}
