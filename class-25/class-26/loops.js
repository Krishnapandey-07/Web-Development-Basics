// // // conditional statement

// // //Ternary Operator

// // let IsHungry = true;

// // let action = IsHungry ? "Eat Food" : "Work" ; 

// // console.log(action);

// // //Switch Statement

// // let day = "Thursday";

// // switch (day) {
// //     case "Monday" :
// //         console.log("first day");
// //         break;
// //     case "Tuesday" : 
// //         console.log("Second day");
// //         break;
// //     case "Friday" :
// //         console.log("Last day");
// //         break;
// //     default :
// //         console.log("Just another day");

// // }


// // // Marks distribution

// // let marks = 77 ; 

// // switch (true) {
// //     case (marks>=90) :
// //         console.log("Excellent");
// //         break;
// //     case (marks>=80) :
// //         console.log("Better");
// //         break;
// //     case (marks>=70) :
// //         console.log("Good");
// //         break;
// //     default :
// //         console.log("Can do better");

// // }

// // //loops

// // //for loop

// // for (let i=1; i<=5; i++){
// //     console.log(i);
// // }

// // //while loop

// // let i=6;

// // while(i<=10){
// //     console.log(i);
// //     i++;
// // }

// // let m=9;
// // while(m>=1){
// //     console.log(m);
// //     m--;
// // }



// //Pattern Printing

// let n = 5;
// let star = 1;
// let space = n - 1;

// for (let i = 1; i <= n; i++) {
//     let row = "";

//     for (let j = 1; j <= space; j++) {
//         row += " ";
//     }
//     for (let j = 1; j <= star; j++) {
//         row += "*";
//     }

//     console.log(row);
//     star += 2;
//     space--;
// }



// //Functions

function sum(a,b){
    return a+b;
}
console.log(sum(7,8));