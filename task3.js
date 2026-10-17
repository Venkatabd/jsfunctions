

// Create a function welcome() that prints "Welcome to JavaScript".

// function welcome() 
// {
//     console.log("Welcome to JavaScript");
// }
// welcome();

// Create a function studentDetails(name, age, cgpa) that prints all three values. Call it with two different students.

// function studentDetails(name, age, cgpa)
// {
//     console.log(name + " is " + age + " years old and  CGPA of " + cgpa);
// }
// studentDetails("Venkat", 24, 8);
// studentDetails("Raju", 22, 7);


// Create a function calculateFee(fee) that returns the student fee. Store the returned value in a variable and print it.

// function calculatefee(fee)
// {
//     return fee;
// }
// let fees=calculatefee(10000);
// console.log("Student fees is"+ " "+fees);


//  Create a function discount(percent) that calculates a discount on a fee of ₹200,000 and prints the final fee.

// function discount(feees) {
    
//     return feees;
    
// }

// let a=discount(200000);
// let finalfee=a*10/100;
// console.log(a-finalfee);


//  Create a function studentForm(name, age, disability = "no"). Call it three times, including once without passing the disability argument.


// function studentForm(name,age,disablility="no")
// {
//     console.log("your name is "+ name);
//     console.log("your age is "+ age);
//     console.log("your disability is "+ disablility);

    
// }

// studentForm("Venky",25,"no");
// studentForm("Ram",22,"yes");
// studentForm("Hari",34);


//  Function Types and Scope 
// Create a named function that accepts a message and prints it.

// function named(aa) {
//     console.log(aa);
    
// }

// named("Iam named fucnction");

// // Create an anonymous function and store it in a variable. Pass a name to it and print the name.

// let name=function (Anonymousfuction) {

//     console.log(Anonymousfuction);
    
// }
// name("hi im anonymous function");


// // Create an arrow function that accepts a number and prints it.

//  let num=(demo)=>
    
//     {
//             console.log(demo);
            
    
//     }
//     num(17);

// // Create a function containing var, let, and const inside an if block. Check which variables can be accessed inside and outside the block.

// function c()
// {
//     if(1)
//     {
//         var a=10;
//         let b=2;
//         const c=23;

//          console.log(a);
//           console.log(b);
//          console.log(c);
          

//     }
//     console.log(a);
//     //  console.log(b);// let is block scope
//     //      console.log(c);//const is block scope 
    
// }
 

//   c();


// // Predict the output of this code:


// console.log(value);
//  var value = 10; //undefined


//  Create two functions, first() and second(). Pass second as a callback to first() and execute it inside first().

// function first(num1,callback)
// {
//     console.log(num1);
//     callback();
    
// }
// function second()

// {
//     console.log("im callback function");
    
    
// }
// first(10,second)

// Create an add(callback, a, b) function that prints the sum of two numbers and then calls the callback with two numbers.

// function addition(callback, a, b) {

//     console.log(a+b);
//     callback(20,30)
    
// }

// let demo=(a1,a2) =>
// {
//     console.log(a1);
//     console.log(a2);

    
// }
// addition(demo,10,20);



// Create a sub(num1, num2) arrow function and pass it as a callback to the add() function.

// function sub(add,num1,num2) 
// {
//     console.log(num1-num2);
//     add(1,2);
    
    
// }

// let test=(a1,a2)=>
// {
//     console.log(a1);
//    console.log(a2);
// }
// sub(test,10,5);

// Create a multiply(callback, a, b) function that prints the multiplication result and then executes the callback.

// function multiply(callback,x,y)
// {
//     console.log(x*y);
//     callback(30,30);
    
// }
// let multi=(x1,y2)=>
// {
//     console.log(x1*y2);
    
// }

// multiply(multi,20,20)




// Create a divide(num1, num2) function and pass it as a callback to another function.

// function divide(callback,num1,num2)
// {
//     console.log(num1/num2);
//     callback(10,10);
    
// }
// let divi=(n1,n2) =>
// {
//     console.log(n1);
//     console.log(n2);
    
// }

// divide(divi,100,20)
// Create a higher-order function that accepts a callback and calls it with a student's name.

// function student(callback)
// {
// callback("venky")
// }
// let x=(name)=>
// {
//     console.log("student name is:" +name);
    
// }
// student(x)

// Create a generator function that yields these values one by one: "10% cashback", "30% cashback", and "Better luck next time".

// function* cashgen()
// {
//     yield "10% cashback"
//     yield "30% cashback"
//     yield "better luck next time"

// }

// let cashback=cashgen();
// console.log(cashback.next());
// console.log(cashback.next());
// console.log(cashback.next());


// Call .next() three times on a generator object and observe the returned values.

// function* gen()
// {
//     yield "hello yout got 10$"
//     yield "hello you got 20$"
//     yield "better luck next time"
// }
//  let newgen=gen()
//  console.log(newgen.next());
//  console.log(newgen.next());
//  console.log(newgen.next());
 

// Create a generator function that yields five different discount messages. Print each yielded value using a for-of loop.

// function* discountgen()
// {
//     yield "you have 10% dicount"
//     yield "you have 20% dicount"
//     yield "you have 30% dicount"
//     yield "you have 40% dicount"
//     yield "you have 50% dicount"
//     yield "No discount"
// }
//   for (let value of discountgen())
//   {
// console.log(value);

//   }
 
  

// Create a generator function that yields three student names. Use a for-of loop to display them.

// function* studentname()
// {
//     yield "Arun";
//     yield "Babu";
//     yield "dinesh";
// }

// for (let name of studentname()) {
//     console.log(name);
// }

// Create a generator function with four yield statements. Check the done property after the yielded values have been consumed.

// function* colors()
// {
//     yield "red";
//     yield "green";
//     yield "blue";
//     yield "yellow";
// }
//  let color=colors();
//  console.log(color.next().value);
//  console.log(color.next().value);
//  console.log(color.next().value);
//  console.log(color.next().value);
//  if(color.next().done)
//  {
//         console.log("all colors are printed");
//  }


// Create a normal function add(a, b, c) that prints the sum of three numbers.

    //  function add1(a, b, c) {
    //     console.log(a + b + c);
    //  }
    //  add1(10, 20, 30)
     

// Convert the add(a, b, c) function into a curried function using nested functions.

// function add(a) {
//     return function(b) {
//         return function(c) {
//             console.log(a + b + c);
//         };
//     };
// }
// add(10)(20)(30);

// Call a curried function with values 5, 10, and 15 using this format: functionName(5)(10)(15).

// function functionName(x)
// {
//    return function(y)
//    {
//     return function(z)
//     {
//         console.log(x);
//         console.log(y);
//         console.log(z);
//     }
//    }
// }
// functionName(5)(10)(15);

// Create a curried function that accepts product price, discount percentage, and quantity, then calculates the total discounted price.

// function totalPrice(price) {
//      return function(discount) {
//             return function(quantity) {

//                 let discountedPrice = (price / 100 * discount);
//                 console.log("Total discounted price is "+ (price - discountedPrice) + " for quantity " + quantity);
//             }
//         }
// }
//  totalPrice(100)(20)(5);

// Write a normal three-parameter function and its curried equivalent. Call both with the same values and compare their results.
  

// function normalFunction(a, b, c) 
// {
//     console.log(a ,b,c);
// }

// function   curriedFunction(a) 
// {
//     return function(b)
//     {
//         return function(c)
//         {
//              console.log(a ,b,c);
            
            
     
//         }
//     }
// }

// normalFunction(1, 2, 3);
// curriedFunction(1,2,3);


 
// Create an IIFE that accepts a product name and discount percentage, then displays a sale message using a template string.

// (function(product, discount)
// {
// alert(`fliplart big billion days is going on ${product} and the discount% ${discount}`)
// }
// )
// ("mobile",50);

// Create a function that returns a number. Store the returned value in a variable and print it.
 
// function add(a,b)
// {
//     return a+b;
// }

// let value=add(10,30);
// console.log(value);

// Create a function that accepts a student's marks and returns the marks. Use the returned value in another variable.

// function studentMarks(mark) {
//     return mark;
// }
// let finalmark=studentMarks(80);
// console.log(finalmark);



// Create a student fee calculator using a function with a default parameter, a callback function to calculate the discount, and a return value for the final fee.


function calculateDiscount(fee, discountPercent) {
  return (fee * discountPercent) / 100;
}

function studentFeeCalculator(fee, discountPercent = 10, callback) {
  let discount = callback(fee, discountPercent);
  let finalFee = fee - discount;
  return finalFee;
}

let finalFee = studentFeeCalculator(10000, 20, calculateDiscount);
console.log("Final Fee:", finalFee);


let finalFee2 = studentFeeCalculator(10000, undefined, calculateDiscount);
console.log("Final Fee with default 10%:", finalFee2);
