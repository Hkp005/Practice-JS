// // const student={
// // fullName : "rahul Yadav",
// // age:16 

// // }
// // student["age"]=student["age"] + 1
// // console.log(student.age)
// let a = 2;
// let b = 9;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);
// // a++;
// console.log(a++)
// console.log(a)


// let a = 9;
// let b = 9;

// console.log("a === b", a === b);

//logical operaters
// let a = 9;
// let b = 5;

// let cond1 = a > b;
// let cond2 = a === b;

// console.log(!(cond1));


//conditional statements

// let age = 5;
// if (age >18){
//     console.log("can vote");
// } 
// else{
//     console.log("cannot vote");
// }

// let num = 5;
// if (num % 2 === 0){
//        console.log("even numer");
// } else if(num > 5) {
//     console.log("odd number");
// }else{
//     console.log("kuch to hai")
// }


// let num = prompt("Enter a number:");
// if(num % 5 === 0){
//     console.log("It is a prime number");
// }else{
//     console.log("Prime number nahi hai");
// }

// let grades = prompt("Grade kya aaya???");
// if(grades === 100){
//     console.log("A");
// }else if(grades >=80){
//     console.log("A");
// }else if(grades >=70){
//     console.log("B");
// }else if(grades >=60){
//     console.log("C");
// }else if(grades >=50){
//     console.log("D");
// }else{
//     console.log("F")
// }


// let grade = prompt("Score Kya aaya??");

// if(grade >=90 && grade <= 100){
//     console.log("A")
// }else if(grade >=70 && grade <= 89){
//     console.log("B");
// }else if(grade >=60 && grade <= 69){
//     console.log("C");
// }else if(grade >=50 && grade <= 59){
//     console.log("D");
// }else if(grade >100){
//     console.log("Bhai itne kisi ke nahi aate");
// }else{
//     console.log("A");
// }

// Loops In Javascript

//For Loop:

// for(let n=1; n<=5 ;n++){
//     console.log("I Know JavaScript");
// }

//Calculate sum  of n numbers 

// let sum = 0;
// for (let i = 1; i <= 5; i++){
//    sum = sum + i;
// }
// console.log("sum =", sum);
// console.log("Loop has ended");


// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//     sum = sum + i;
// }
// console.log("sum =", sum);
// console.log("Loop has ended");

//WHILE Loop

// let i = 1;
// while(i <= 5){
//     console.log("i is equal to", i);
//     i++
// }

// DO while

// let i = 4;
// do {
// console.log("Kuch to hai");
// i++
// }while(i<=2);
 
// let str = "Kuch to aagya";
// for(let i of str){
//     console.log("i equals to", i);
// }


// let str = "Kuch to aagya";
// let size = 0;
// for(let i of str){
//     console.log("i equals to", i);
//     size++
// }

// console.log("string ki size =", size); 

// let student = {
//     name : "naam hai",
//     age : 25,
//     college : "GECR",
//     CGPA : 7.2,

// };
// for(let i in student){
//     console.log("Key is ", i, "value is", student[i]);
// };

//Print all even numbers from 0 to 100


// for(let x = 1; x<=100; x++ ){
//     if(x%2 === 0){
//         console.log("X is a Prime Number", x);
// }
// }


// Game of numbers 



// solutions below is incorrect
// let num = prompt("Type a random Number");
// do{
//     if(num === 89){
//         console.log("You have guessed the correct number");
//     }else{
//             console.log("guess anoter number");
//     }
// }while(num != 89);

// console.log("You Won the game");

// let gnum = 89;
// let unum = prompt("Please Guess a number");
// while(gnum != unum){
//     unum = prompt("you have guessed the wrong number guess again");
// }
// console.log("You have guessed the right num");


// Strings 
// let str = "Kya Baat hai paisa";
// console.log(str);

// Template Literals

// let str = `Kya bolu`;
// console.log(str);

// let cars = {
//     luxuary : "Mercedes",
//     Sedan : "Sail",
//     Hutchabck : "Beat",
// };
// console.log(`this is ${cars.luxuary} and ${cars.Hutchabck}`);


// let name = prompt("Apna naam bata chal :");
// let uname = "@" + name + name.length
// console.log(uname);


// Arrays in Javascript

// let politician = ["Modi", "yogi" ,"pappu", "didi"];

// for(let idx = 0; idx<politician.length; idx++){
//     console.log(politician[idx]);
// }


// let politician = ["Modi", "yogi" ,"pappu", "didi"];
// for(let i of politician[0]){
//     console.log(politician[0][0]);
// };

// let smarks = [85,97,44,37,76,60];
// let sum = 0;
// for(let n of smarks){
//     sum += n; or sum + n = sum
// };
    
// console.log(sum/smarks.length);

// let items = [250,645,300,900,50];

// let newPrice ;
// for(let price of items){
//       newPrice = (price/10)*100; 
// }
// console.log(items);


// Write a program that takes a number as input and determines whether it's even or odd.

// let number = prompt("Give number to check");
// if(number&2 === 0){
//       console.log("It is an even number");
// }else {
//     console.log("it is an odd number");
// };

// Write a program that takes three numbers as input and outputs the largest one.

// let number1 = prompt("give number 1");
// let number2 = prompt("Give Number 2");
// let number3 = prompt("give number 3");
// if(number1 > number2 & number3){
//     console.log(number1);
// }else if(number2 > number1 & number3){
//     console.log(number2);
// }else{
//     console.log(number3);
// };

// Write a program that determines whether a given year is a leap year.

// let year = prompt("Give a Year in input");
// if(year % 4 === 0  && (year % 100 !== 0 || year % 400 ===0)){
//     console.log("Yes it is a leap year");
// }else{
//     console.log("it is not a leap year");
// };

// Write a program that accepts a numerical grade (0-100) and outputs the corresponding letter grade (A, B, C, D, or F).

// let num = prompt("Put your marks to check your grades");

// if(num === 100){
//     console.log("Your Grade is A");
// }else if(num >= 80){
//     console.log("Your Grade is A");
// }else if(num <= 80){
//     console.log("Your Grade is B");
// }else if(num <= 70){
//     console.log("Your Grade is C");
// }else{
//     console.log("You failed the exam");
// };

// let grades = prompt("Grade kya aaya???");
// if(grades === 100){
//     console.log("A");
// }else if(grades >=80){
//     console.log("A");
// }else if(grades >=70){
//     console.log("B");
// }else if(grades >=60){
//     console.log("C");
// }else if(grades >=50){
//     console.log("D");
// }else{
//     console.log("F")
// };

// Write a program that takes the lengths of three sides of a triangle as input and determines whether it's equilateral, isosceles, or scalene.

// let x = prompt("Give value of side 1");
// let y = prompt("Give value of side 2");
// let z = prompt("Give value of side 3");

// if(x === y && y === z){
//     console.log("It is A Equillateral Triangle");
// }else if(x === y || side1 === side3 ||side2 === side3){
//     console.log("It is A Isocilaes Triangle");
// }else{
//     console.log("It is A Scalene Triangle");
// };
// let a = prompt("Give value of side 1");
// let b = prompt("Give value of side 2");
// let c = prompt("Give value of side 3");


// let side1 = prompt("Give value of side 1");
// let side2 = prompt("Give value of side 2");
// let side3 = prompt("Give value of side 3");
// if (side1 > 0 && side2 > 0 && side3 > 0) {
//     if (side1 === side2 && side2 === side3) {
//         console.log("Equilateral Triangle");
//     } else if (side1 === side2 || side2 === side3 || side1 === side3) {
//         console.log("Isosceles Triangle");
//     } else {
//         console.log("Scalene Triangle");
//     }
// } else {
//     console.log("Invalid input");
// }

// if (a + b <= c || a + c <= b || b + c <= a) {
//     console.log("Not a valid triangle");
// }
// else if (a === b && b === c) {
//     console.log("Equilateral triangle");
// }
// else if  (a === b || b === c || a === c) {
//     console.log("Isosceles triangle");
// }
// else{
//     console.log("Scalene triangle");
// };



// Array Methods in JS

// Push Method  In array(add the value in the end)

// let x = ["hello ","my","name","is"];
// x.push("hritik");

// Pop method in array, element is removed from th end and return.

// Array to String Method
// array splice

// let x = [5,9,7,6,3,4,1];
// x.splice(2,2,124,421);
// console.log(x);


// let comp = ["Bloomberg","Microsoft","Uber","google","IBM","Netflix"];
// comp.splice(0,1);
// console.log(comp);


// functions
// make a function two add two nummbers

// function sum(x,y){
//     s = x+y;
//     return s;
// }

// let a = sum(45,56);
// console.log(a);


// function countVowels(str){
//     let count = 0;
//    for(const char of str){
//     if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//             count++;
//     }
//    }
//    console.log(count);
// }

// function countVowels(str) {
//         let count = 0;
//         for (const char of str.toLowerCase()) {
//             if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//                 count++;
//             }
//         }
//         console.log(count);
//     }
    

// const countVow = (str) => {
//         let count = 0;
//         for (const char of str.toLowerCase()) {
//             if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//                 count++;
//             }
//         }
//         return count;
// // }
// let dund = [1,2,3,6,4,8];
// dund.forEach((huake) =>{
//        console.log(huake*huake);
// }
// );


// let num = [87,93,64,96,98,100];

// let kth = num.filter((val) =>{
//         return val >= 90; 
// }
// )
// console.log(kth);

// let n = prompt("Put some value for n");

// let arr = [];
// for(let i = 1; i <= n; i++ ){
//         arr[i-1]=i;
// }

// console.log(arr);

// let array = function sum(x,y){
//         return x+y;
// }
// console.log(array);

// let array = ((a,b)=>{
//         return  a+b;
// })
// console.log(array);



// let val = parseFloat('2.3') + parseFloat('2.4');
// console.log("2.3 + 2.4 = " + val);
 
// function kyapata() {
//     console.log("2.3 + 2.4 = "
//         + (parseFloat('2.3') +
//             parseFloat('2.4')).toFixed(2));
// }
// kyapata()

// function checkoe(number){
//         return (number | 1) === number ? "Odd" : "even" ;

// }

// let number = prompt("Check Wether the number is even or odd");
// console.log(checkoe(Number(number)));

// let  a= prompt("Give me a number");

// let b = prompt("Give me a number");

// a = parseInt(a);
// b = parseInt(b);
// function add(a,b){
//         console.log(a+b);
// }

// function calci(a,b,add){
//         add(a,b);
// }

// calci(a,b,add);


// let  a= prompt("Give me a number");

// let b = prompt("Give me a number");

// a = parseInt(a);
// b = parseInt(b);
// function add(a,b){
//         console.log(a+b);
// }

// function calci(add){
//         add(a,b);
// }

// calci(add);


// function getData(dataId, getNextData ){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//               console.log("data is", dataId);
//               reject("Error hai bhai sahi code likh");
//               if(getNextData){
//               getNextData();} 
//         },5000)
        
//     });
        
// }
// getData(1 , () => {
//         getData(2,() => {
//                 getData(3);
//         });
// })


// will do it using promises


// function getData(dataId){
//         return new Promise((resolve, reject) => {
//          setTimeout(() => {
//          console.log("Ye le teri id", dataId);
//         resolve("success");
//         }, 2000);
                
//         })
// }
// getData(1).then((res) =>{
//         console.log(res);
//         getData(2).then(() =>{
//                 console.log(res);
//         })
// })
//  we can also do one more thing
// getData(1)
// .then((res) => {
//    return getData(2);
// })
// .then((res)=>{
//         console.log(res);
// })






// function delayedGreeting(name, time) {
//         setTimeout((person,hour) => {
//             console.log(`Hello, It's been  hour.`);
//         }, 1000);
//     }
//     function delayedGreeting(name, time) {
//         setTimeout(() => {
//             console.log(`Hello, ${name}! It's been ${time} hours.`);
//         }, time*1000);
//     }


// function processNumbers(operation, a, b) {
//         const result = operation(a, b);
//         console.log(`Result: ${result}`);
//     }
    
//     const add = (x, y) => x + y;
//     const subtract = (x, y) => x - y;
//     const multiply = (x, y) => x * y;
    
    // Using processNumbers with arrow functions as arguments
//     processNumbers(add, 5, 3);       // Result: 8
//     processNumbers(subtract, 8, 2);  // Result: 6
//     processNumbers(multiply, 4, 7);  // Result: 28







// let promise = new Promise((resolve, reject) => {
//         console.log("Kuch to hai ");
// })

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("Bande mai dam hai");
// //     resolve("Success");
// reject("Bhai Sahi se coding kar");
//     })
// };

// let promise = getPromise();
// promise.then((res) => {
//         console.log("Ke Hua");
// })

// promise.catch((err) => {
//         console.log("Kuch aur try karte hai");
// })






// function asyncfunc1(){
//         return new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                    console.log("data1");
//                    resolve("success");
//                 },3000)
//         })
         
// }
// function asyncfunc2(){
//         return new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                    console.log("data2");
//                    resolve("success");
//                 },3000)
//         })
         
// }
// console.log("fetching data 1");
// asyncfunc1().then(() => {
//         console.log("fetching data 2");
//         asyncfunc2().then(() => {})
// })








// function simfunc(){
//         return new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                         console.log("Done Checking Data 1"); 
//                         resolve("Data 1 is checked");
//                 },4000)
//         })
// }
// function simfunc2(){
//         return new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                         console.log("Done checking Data 2"); 
//                         resolve("Data 2 is also checked");
//                 },4000)
//         })
// }

// console.log("take data 1 and check it")
// simfunc().then(() => {
//         console.log("take data2 and check it");
//         simfunc2().then(() =>{})
// })




// function numberChecking(num){
//         switch (Math.sign(num)) {
//                 case 1:
//                        console.log("Number is Positive"); 
//                         break;
//                 case -1:
//                         console.log("Number is Negative"); 
//                          break;
//                 default:
//                         console.log("Number is Zero");
//                         break;
//         }
// }
// let number = prompt("Enter A number");
// if (number > 0) {
//         console.log("It is a positvie number");
// }else if(number < 0){
//         console.log("It is negative number");
// }else{
//         console.log("It is zero");
// };



// function checkNumberSign(){
//         const input = prompt("Enter a Number");
//         const number = Number(input);
        
//         if(isNaN(input)){
//                 console.log("It is not a number");
//         }else {
//                 const result = 
//                 number === 0 ? "the number is zero" :
//                 number >= 0 ? `${number} is positive`: `${number} is negative `; 
//         console.log(result);
//         }
// }
// checkNumberSign();


// let a = 10;
// let b = 20;
// let tem;

// console.log(`before swap a = ${a}`);
// console.log(`before swap b = ${b}`);

// tem = a;
// a = b;
// b = tem;
// console.log(`after swap a = ${a}`);
// console.log(`after swap b = ${b}`);




// let a = 10;
// let b = 20;
// let tem ;

// console.log(`before swap a = ${a}`);
// console.log(`before swap b = ${b}`);

// a = a+b;
// b = a-b;
// a = a-b;

// console.log(`after swap a = ${a}`);
// console.log(`after swap b = ${b}`);




// let a = 10;
// let b = 20;


// console.log(`before swap a = ${a}`);
// console.log(`before swap b = ${b}`);

// [a,b]=[b,a];

// console.log(`after swap a = ${a}`);
// console.log(`after swap b = ${b}`);


// function findSum(n){
//         let sum = 0;
//         for(let i = 1; i <= n ; i++)
//         sum = sum + i;
//         return sum;
// }

// let n = prompt("Give a number");
// n = parseInt(n);
// let result = findSum(n);
// console.log(result);

// function findSum(){
//         if (n !== 0)
//         return n + findSum(n-1);
//         else 
//         return n
// }
// const n = 5;
// console.log(findSum(n));




// function findSum(n) {
//     if (n !== 0)
//         return n + findSum(n - 1);
//     else
//         return n;
// }
// const n = 5;
// console.log(findSum(n));

// function kuchbhi(n){
//         return n*(n+1)/2;
// }
// const n = 5;
// console.log(kuchbhi(n));


// function getIt(n){
//         if (n!== 0){
//                 return n + getIt(n-1);
//         }else 
//         return n; 
// }
// const n = 6;
// console.log(getIt(n));



// function sumTo(n){
//         let sum = 0;
//         for(let i=1; i <= n ; i++)
//          sum = sum + i;
//         return sum;
// }
// let n = 100;
// console.log(sumTo(n));

// let str = "Mai hu na";
  
// console.log(typeof (str + 3));


// const obja = {
//         Name : "hritik",
//         Age : 22,
//         Sex : "Male"
// };
// obja["freind"] = "Dina";


// const dict = {
//         Apologise : "mafi  mangna ",
//         cuss : "gali",
//         Mai : "mafi tu",
//         Tu : "mai",
// };
//         Apologise : "mafi  mangna ",
//         cuss : "gali",
//         Mai : "mafi tu",
//         Tu : "mai",
// };
//         Apologise : "mafi  mangna ",
//         cuss : "gali",
//         Mai : "mafi tu",
//         Tu : "mai",
// };

// let a  = 10;
// let b = 4;
// console.log("++a" , ++a);
// console.log("a++" , a++);
// console.log("--a" , --a);
// console.log("a--" , a--);
// console.log("a" , a);
// console.log("a--" , a--);
// let age = prompt("What is your age?")
//  switch (age) {
//         case '14':
//                 console.log("Your age is 14");
//                 break;
//         case '12':
//                 console.log("Your age is 12");
//                 break; 
//         case '16':
//                         console.log("Your age is 16");
//                         break;               
//         default:
//                 console.log("Tu amar hai bhai");
//                 break;
//  }

// let num = prompt("Number de de bhai");
// num = parseInt(num);

// if(num % 2 == 0 || num % 3 == 0){
//         console.log("Bhai 2 ya 3 se divisibe hai");
// }else {
//         console.log("Kisi s ebhi divisible nahi hai mere bhai");
// };


// let mul = 1;
// let n = prompt("Number do ftafat");
// n = Number.parseInt(n);

// for (let i = 1; i <  n; i++) {
//         mul  = mul * i     
// }
// console.log(n*mul);



// Ye For in loop hua
// let studentMarks = {
//         Rhaul : "86",
//         Shivam : "95",
//         Dina : "96",
//         Bhuvam : "100"
// }
// for(let a in studentMarks){
//      console.log("Marks of  " + a + " is " + studentMarks[a])
// };

// Ab simple for loop se karenge

// let marks = {
//         Rhaul : "86",
//         Shivam : "95",
//         Dina : "96",
//         Bhuvam : "100"
//  }
//  for(let i = 0; i <Object.keys(marks).length ; i++){
//         console.log("Marks of "+ Object.keys(marks)[i] + " is " + marks[Object.keys(marks)[i]])
//  };

// let num = prompt("Number likh")
// num = Number.parseInt(num)
//  switch (num) {
//         case 9:
//               alert("galat hai pfir se try kar");  
//                 break;
//         case 12:
//                 console.log("Bhai tu to topper hai"); 
//                           break;        
//         case 13:
//                 alert("galat hai pfir se try kar");  
//                                   break;
//         default:
//                 alert("Tu rehne de tere bas ki nahi hai");
//                 break;
// }

// let cn = 5;
// let i
// while(i != cn){
//         i = prompt("number de");
// }
// console.log("Sahi jawab");

//  function mean(a,b,c,d,e) {
//         console.log((a+b+c+d+e)/mean.length);
//  }
//  mean(1,2,3,4,5);

let mean = (a,b,c,d,e)=>{
        return ((a+b+c+d+e)/mean.length);
}
console.log(mean(1,2,3,4,5));