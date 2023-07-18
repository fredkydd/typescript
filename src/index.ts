// *tsc --init
// *tsc fileName.ts
// !tsc  without fileName runs for all folders
// *node fileNme.js

let age: number = 20;
age = 5;

//*without declaring the type typescript kniw the type according to the first item of the value but if you add another type after the first value it's gonna give a type error
let num = 555;
// !NUMBER, STRING, ARRAY

const firstName: string = 'Fred',
  secondName: string = 'Kydd';

const result = typeof firstName === 'string' && "typeof firstName's string";
console.log(result);

// !TUPLE
// *Tuple just keep only two values
let user: [number, string] = [7, 'Farid'];
// *push methods will be render and it will become number string number which i didn't wanted
// *let user: [number, string, boolean ] = [7, 'Farid', true];
user.push(5);
console.log(user);

// !ENUM
// const small = 1,
//   medium = 2,
//   large = 3;

// *Size.small automatically declared as 0
// *enum will create a function unless we declare it as a constant || a variable
enum Size {
  small,
  medium,
  large,
}
let mySize = Size.medium;
console.log(mySize);

// *if we define as a astring we've declare explicitly
enum SizeExample1 {
  small = 's',
  medium = 'm',
  large = 8,
  xlarge = 'string',
}
const mySize1 = SizeExample1.medium,
  mySize2 = SizeExample1.large;
console.log(`${mySize1}\n${mySize2}`);

// *we defined enum as const , enum will not been seen in the js file
const enum SizeConst {
  small,
  medium,
  large,
  xlarge,
}
const SizeConstExample = SizeConst.xlarge;
console.log(SizeConstExample);

// !FUNCTIONS(
// *function calculate(income: number :void means function returns nothing
// function calculate(income: number) {}

// *function calculate(income: number): number
// function calculate(income: number) {
//   return 0;
// }

// *manually declared the return value must be number
// *if we add any type except number after return it's gonna be error 😁 try return 'string'
// function calculate(income: number): number {
//   return 0;
// }

function calculate(income: number, taxYear: number): number {
  // let x;
  if (taxYear <= 2023) return income * 2;
  // undefined
  // *if income's greater than 50_000 it's gonna give me undefined again for that we add another return statement
  return income * 1.5;
}
console.log(calculate(10_000, 2023));

// !OBJECTS
