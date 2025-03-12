console.log('#1. Приклад домашнього завдання з JavaScript')



var myNumber = 10;
var myString = "Some string";
var myBool = true;
var myArr = [1, 2, 3, 4, 5];
var myObj = { first: 'First Name', last: 'Last Name' };

console.log(myNumber)
console.log(myString)
console.log(myBool)
console.log(myArr)
console.log(myObj)




var myNumber = 10;
var decimal2 = myNumber.toFixed(2)

console.log(decimal2)




var i = 5;

console.log("i", i);


console.log("i++", i++);
console.log("i++", i);


console.log("++i", ++i);


console.log("i--", i--);
console.log("i--", i);


console.log("--i", --i);




var myTest = 20;

console.log(myTest);

myTest += 5;
console.log(myTest);

myTest -= 5;
console.log(myTest)

myTest *= 5;
console.log(myTest);

myTest /= 5;
console.log(myTest);

myTest %= 5;
console.log(myTest);



var myPi = Math.PI;
console.log("myPi:", myPi);

var myRound = Math.round(89.279);
console.log("myRound;", myRound);

var myRandom = Math.random() * 10;
console.log("myRandom:", myRandom);

var myPow = Math.pow(3, 5);
console.log("myPow:", myPow);



var strObj = {
    str: "Мама мыла раму, рама мыла маму",
    length: "Мама мыла рамуб рама мыла маму".length
};
console.log("strObj", strObj)




var isRamaPos = strObj.str.indexOf("рама");
console.log("isRamaPos:", isRamaPos);

var isRama = isRamaPos !== -1;
console.log("isRama:", isRama);




var strReplace = strObj.str
    .replace("мыла", "моет")
    .replace("рама", "Рама")
    .replace("мыла", "держит");

console.log("strReplace:", strReplace);




var someStr = "some STRING"

var upperStr = someStr.toUpperCase();
console.log("upperStr:", upperStr);

var lowerStr = someStr.toLowerCase();
console.log("lowerStr:", lowerStr);
