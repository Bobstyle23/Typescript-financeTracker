var character = 'mario';
console.log(character);
var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
});
var addBtn = document.getElementsByTagName('button');
var age = 25;
console.log(age);
var circle = function (diameter) {
    return diameter * Math.PI;
};
console.log(circle(2));
var mixedTypes = ['Bob', 25, 'Web Developer', 23];
mixedTypes.push("023");
mixedTypes.forEach(function (value, index) {
    console.log(value + " and it's index -> " + index);
});
var myAge;
var myName;
var isMarried;
var myData = {
    myAge: 25,
    myName: "Bob",
    isMarried: false
};
console.log(myData.myAge);
var newArray = [];
newArray.push(23);
newArray.push("Bob");
newArray.push(true);
newArray.forEach(function (data, index, value) {
    console.log("this array contains my data " + index + " " + value);
});
var newObject;
newObject = { name: "Bob", age: 23, isMarried: false };
for (var key in newObject) {
    var value = newObject[key];
    console.log(value);
}
