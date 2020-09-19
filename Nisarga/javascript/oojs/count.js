function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char_count('learning javascript', 'a'));

function WordCount(str) {
    var totalSoFar = 0;
    varcountnum(...str)
    for (var i = 0; i < WordCount.length; i++)
      if (countnum(i) ==" a") { // if a space is found in str
        totalSoFar = +1; // add 1 to total so far
    }
     return totalSoFar;// add 1 to totalsoFar to account for extra space since 1 space = 2 words
  }
  
  console.log(WordCount("Random String"));