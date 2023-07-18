"use strict";
let age = 20;
age = 5;
let num = 555;
const firstName = 'Fred', secondName = 'Kydd';
const result = typeof firstName === 'string' && "typeof firstName's string";
console.log(result);
let user = [7, 'Farid'];
user.push(5);
console.log(user);
var Size;
(function (Size) {
    Size[Size["small"] = 0] = "small";
    Size[Size["medium"] = 1] = "medium";
    Size[Size["large"] = 2] = "large";
})(Size || (Size = {}));
let mySize = Size.medium;
console.log(mySize);
var SizeExample1;
(function (SizeExample1) {
    SizeExample1["small"] = "s";
    SizeExample1["medium"] = "m";
    SizeExample1[SizeExample1["large"] = 8] = "large";
    SizeExample1["xlarge"] = "string";
})(SizeExample1 || (SizeExample1 = {}));
const mySize1 = SizeExample1.medium, mySize2 = SizeExample1.large;
console.log(`${mySize1}\n${mySize2}`);
const SizeConstExample = 3;
console.log(SizeConstExample);
function calculate(income, taxYear) {
    if (taxYear <= 2023)
        return income * 2;
    return income * 1.5;
}
console.log(calculate(10_000, 2023));
