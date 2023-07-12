const expr1 = /\b(January|February|March|April|May|June|July|August|September|October|November|December)\s\d{1,2},\s\d{4}\b/
const expr2 = /\b(\d+[a-zA-Z]|[a-zA-Z]\d+)\b/;
const expr3 = /\b[a-zA-Z]+\.(txt|java|cpp)\b/;
const expr4 = /\b([\w\W])([\w\W])\w\2\1\b/;
const expr5 = /\b[b-yB-Y]+\b/gi;
const expr6 = /<(\S*?)[^>]*>.*?<\/\1>/gi;

console.log(expr1.test('February 99, 0001'),1);
console.log(expr1.test('Enero 99, 0001'),1);
console.log(expr2.test('d747')),2;
console.log(expr3.test('program.cpp'),3);
console.log(expr4.test('_<i<_'),4);
console.log(expr4.test('_<<_'),4);
let text1 ='Bee zapp Crow Eagle Zorro  mouse Ape  you'
console.log(text1.match(expr5),5);

let text2 = 'Is <b>4 < -1/12</b> true? The <b>answer</b> will <em>surprise</em> you.'
console.log(text2.match(expr6),6);
