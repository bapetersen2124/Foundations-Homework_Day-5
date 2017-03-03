function isVowel(char) {
  var vowels=["a","e","i","o","u","A","E","I","O","U"];
  if (vowels.indexOf(char)>-1) {
    return true;
  } else {
    return false;
  }
}

  console.log(isVowel("A"));

  function isVowel(char) {
    var vowels=["A","E","I","O","U"];
    if (vowels.indexOf(char.toUpperCase()) >-1) {
      return true;
    } else {
      return false;
    }
  }

    console.log(isVowel("z"));
