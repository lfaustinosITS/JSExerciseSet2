function findWordPalindromes(text) {
  const wordsm = text.match(/\b\w+\b/g);
  const words = [];
  for (let i=0;i<wordsm.length;i++){
    let bigword = wordsm[i];
    for(let j=i+1;j<wordsm.length;j++){
        bigword += wordsm[j]
        words.push(bigword);
      }
      words.push(wordsm[i])  
    }
    
  const palindromes = [];
  
  if (words) {
    for (const word of words) {
      if (isPalindrome(word) && word.length>1) {
        palindromes.push(word);
      }
    }
  }
  
  return palindromes;
}
  
function isPalindrome(word) {
  const cleanedWord = word.replace(/[\W_]/g, '').toLowerCase();
  const reversedWord = cleanedWord.split('').reverse().join('');
  return cleanedWord === reversedWord;
}
  
const text = "A man, a plan, a canal, Panama! Racecar, Anita lava la tina,  and radar are also palindromes emordnilap.";
  
const palindromes = findWordPalindromes(text);
console.log(palindromes);
  