const translationMap = {
  a: '4',
  b: '8',
  e: '3',
  l: '1',
  o: '0',
  s: '5',
  t: '7',
  i: '!'
};

function toLeetSpeak(text) {
  let translatedText = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase();
    const translatedChar = translationMap[char] || char;
    translatedText += translatedChar;
  }

  return translatedText;
}
  
const poem = "In the land where dreams take flight,\n" +
  "Where stars shine with eternal light,\n" +
  "I yearn to go, to make my mark,\n" +
  "In the city of angels, so vibrant and stark.\n" +
  "\n" +
  "I seek the power of lines and code,\n" +
  "To shape a future, to break the mold,\n" +
  "For in Los Angeles, where innovation thrives,\n" +
  "I aim to build my dreams, where ambition survives.\n" +
  "\n" +
  "With each keystroke, I'll unravel the maze,\n" +
  "Unleashing my potential in coding arrays,\n" +
  "I crave to learn, to program with grace,\n" +
  "To master the art, at a rapid pace.\n" +
  "\n" +
  "From HTML to Python's embrace,\n" +
  "JavaScript's magic, and databases to chase,\n" +
  "I'll delve into frameworks, expanding my skill,\n" +
  "To conquer challenges, I'm determined to fulfill.\n" +
  "\n" +
  "Through countless loops and debugging nights,\n" +
  "I'll embrace the bugs, for they're just insights,\n" +
  "With patience and passion, I'll conquer the screen,\n" +
  "Creating wonders, like a technological dream.\n" +
  "\n" +
  "In the land of Hollywood and Silicon Bay,\n" +
  "I'll seize opportunities that come my way,\n" +
  "With skills honed sharp, like a virtual sword,\n" +
  "I'll code my destiny, a programmer adored.\n" +
  "\n" +
  "So, guide me, O Angels, on this destined quest,\n" +
  "To navigate through complexities, I'll do my best,\n" +
  "For I yearn to learn, to program with might,\n" +
  "And in Los Angeles, my future takes flight.";

const translatedText = toLeetSpeak(poem);
  
console.log(translatedText);
  