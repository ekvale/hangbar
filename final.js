function wordBlendr(wrd1, wrd2) {
  // word blender recieves args secret and word
  var pos;
  var ary = new Array();
  len2 = wrd2.length; len1 = wrd1.length;
  ary.length = len1;
  for (i=0; i<len1; i++) {     // Initialize ary 
    ary[i] = "*";
  }
  for (i=0; i<len2; i++) {     // For each char in word2
    char = wrd2.charAt(i);     //   get char
    pos = wrd1.indexOf(char);  //   get its position
    while (pos != -1) {
      ary[pos] = char;
      pos = wrd1.indexOf(char, pos+1);  // get new position
    }
  }

  for (i=0; i<len1; i++)  {    // Print out array contents
    document.write(ary[i]);
  }
  // Futz with the guess box to make just a little bigger than the font

document.getElementById('input').style.width="78px";
document.getElementById('input').style.height="78px";
document.getElementById('input').style.fontSize="64pt";
}
