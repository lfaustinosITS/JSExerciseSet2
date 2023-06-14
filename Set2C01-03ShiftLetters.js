function shiftCyclically(text) {
  const shiftedText = text.replace(/[a-zA-Z0-9]/g, function(match) {
    let charCode = match.charCodeAt(0);
    let shiftedCharCode = charCode + 1;
    if (charCode == 57){shiftedCharCode = 48}
    else if (charCode == 122){shiftedCharCode = 97}
    else if (charCode ==90){shiftedCharCode = 65}
    return String.fromCharCode(shiftedCharCode);
  });
  
  return shiftedText;
}
  
const text1 = "aBc";
const text2 = "xyz";
const text3 = "aK89";
  
console.log(shiftCyclically(text1)); 
console.log(shiftCyclically(text2)); 
console.log(shiftCyclically(text3)); 
  