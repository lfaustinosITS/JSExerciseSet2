    const expr1 = /.abc/
    const expr2 = /a+b?!!1{4}/
    const expr3 = /.{3}a.b/
    const expr4 = /\w/
    const expr5 = /\s/
    const expr6 = /\d/
    const expr7 = /./
    const expr8 = /[abc]/
    const expr9 = /(abc)/
    const expr10 = /[a-zA-Z_$.]+[A-Za-z_$0-9.]@[a-zA-Z_$.]+[a-zA-Z_$0-9.].(com|net|org){1}/
    const expr11 = /[0oOn]1(|\s)[0oOn]1[0oOn]1(|\s)[0oOn]1/
    


    console.log(expr1.test('zabc'),1);
    console.log(expr2.test('a!!1111'),2);
    console.log(expr3.test('123a.b'),3);
    console.log(expr4.test('A'),4);
    console.log(expr5.test(' '),5);
    console.log(expr6.test('1'),6);
    console.log(expr7.test('z'),7);
    console.log(expr8.test('b'),8);
    console.log(expr9.test('abc'),9);
    console.log(expr10.test('leonardo@faustinos.com'),10);
    console.log(expr11.test('n1 n1n1 n1'),11);
