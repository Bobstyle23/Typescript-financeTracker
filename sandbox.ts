const character = 'mario';
console.log(character);

const inputs = document.querySelectorAll('input');
console.log(inputs);

inputs.forEach(input => {
    console.log(input);
    
})

const addBtn = document.getElementsByTagName('button');


let age = 25;
console.log(age);


const circle = (diameter: number) => {
    return diameter * Math.PI;
}

console.log(circle(2));


let mixedTypes = ['Bob', 25, 'Web Developer', 23];
mixedTypes.push("023");
mixedTypes.forEach((value, index) => {
    console.log(`${value} and it's index -> ${index}`);
    
})

let myAge: number;
let myName: string;
let isMarried: boolean;

let myData = {
    myAge : 25,
    myName : "Bob",
    isMarried :false
}

console.log(myData.myAge);

let newArray : (string|boolean|number)[] = [];

newArray.push(23);
newArray.push("Bob");
newArray.push(true)

newArray.forEach((data, index, value) => {
    console.log(`this array contains my data ${index} ${value}`);
})

let newObject : object;

newObject = {name: "Bob", age: 23, isMarried: false};

for (let key in newObject) {
    let value = newObject[key]
    console.log(value);
}


