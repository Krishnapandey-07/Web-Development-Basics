// Arithmetic Opertors

let a = 10; 
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);



// Comparision Operators

let x = 10;
let y = "10";

console.log(x == y);
console.log(x === y);

console.log(3 > 5);
console.log(5 == "5");
console.log(10 <= 10);
console.log(4 != 4);

//Logical Operators


// Eligible for movie or not

let age = 18;
let withAdult = true;

console.log(age >= 16 && withAdult == true);


// Precedence

console.log(5 + 10 * 2); //25
console.log(5 + 10 * 2); //25
console.log(20 / 5 * 2); //8
console.log(2 ** 3 * 2); //16
console.log(10 % 3 + 4); //5


console.log(5 + 10 > 12); //true
console.log(5 + 10 > 20); //false
console.log(5 + 5 === 10); //true
console.log(5 + 5 === "10"); //false
console.log(10 > 5 == true); //true


console.log("5" + 10 * 2); //520
console.log("5" + (10 * 2)); //520
console.log("5" + 5 + 2); //552
console.log(5 + 2 + "5"); //75

console.log(true + true + true); //true=1
console.log(false + false + false);  //false=0

console.log("5" + true + true);

//Conditional Statement

let weather = "Rainy";

if (weather == "Rainy"){
    console.log("Take an umbrella");
}
else{
    console.log("Dont take");
}

let mark = 71;

if(mark>=90){
    console.log("A");
}
else if(mark>=80 && mark<90){
    console.log("B");
}
else if(mark>=70 && mark<80){
    console.log("C");
}
else if(mark>=60 && mark<70){
    console.log("D");
}
else{
    console.log("E");
}

let marks = prompt("Enter your marks (0 - 100):");
marks = Number(marks); //Typecasting
console.log(mark);