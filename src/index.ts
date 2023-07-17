// *tsc --init
// *tsc fileName.ts
// !tsc  without fileName runs for all folders
// *node fileNme.js

let age: number = 20;
age = 5;

//*without declaring the type typescript kniw the type according to the first item of the value but if you add another type after the first value it's gonna give a type error
let num = 555;

const firstName: string = 'Fred',
  secondName: string = 'Kydd';

const result = typeof firstName === 'string' && "typeof firstName's string";
console.log(result);

let user: [number, string] = [7, 'Farid'];
user.push(5);
console.log(user);
