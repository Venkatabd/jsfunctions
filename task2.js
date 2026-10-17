// // Declare variables using var, let, and const. Reassign and redeclare them wherever allowed, then print the results.


// var  a=10;
// let b=10;
// const c=10;

// // reassign
// a=11;
// b=11;

// // redeclare
// var a=12;

// console.log(a);
// console.log(b);
// console.log(c);

// // Create variables for your name, age, and programming knowledge. Print each variable and its data type using typeof.

// var name="venkat";
// var age =26;
// var programmingknowledge="JavaScript";

// console.log(typeof(name));

// console.log(typeof(age));
// console.log(typeof(programmingknowledge));


// // Create an array of 5 fruits. Print the complete array, the first element, and the last element.

// let arr=["apple","oramge","mango","pineapple","strawberry"];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[arr.length-1]);

// // Create an object containing your name, role, and CGPA. Print each property separately.

// let obj=
// {
//     name:"venkat",
//     role:"Front end developer",
//     Cgpa:7

// }
// console.log(obj.name);
// console.log(obj.role);
// console.log(obj.Cgpa);


// // Take the user's name and age using prompt(). Display the name using alert() and print the age in the console.


// let name1=prompt("Enter your name");
// alert(name1);

// let age1=20;
// console.log(age1);


// // Declare two numbers and perform addition, subtraction, multiplication, division, modulus, and exponentiation.

// let num1=10;
// let num2=5;

// console.log(num1+num2);
// console.log(num1-num2);
// console.log(num1*num2);
// console.log(num1/num2);
// console.log(num1%num2);
// console.log(num1**num2);


// // Predict the ouput

// // let x= 5;
// // console.log(x++);//5
// // console.log(x);//6
// // console.log(++x);//7


// let a1= 10;
// let b1 = a1--;
// let c1= --a1;


// console.log(a1);//8
// console.log(b1);//10
// console.log(c1);//8

// Use the +=, -=, *=, /=, and %= assignment operators on a variable and print the final value after each operation.

// sum=2;
// sum+=2;
// console.log(sum);

// sum=4;
// sum-=4;
// console.log(sum);

// sum=2;
// sum*=2;
// console.log(sum);

// sum=2;
// sum/=2;
// console.log(sum);

// sum=2;
// sum%=2;
// console.log(sum);

// console.log(5 == "5");
// console.log(5 === "5");
// console.log(10 != "10");
// console.log(10 !== "10");


// // Use &&, ||, and ! to check different combinations of conditions.

// console.log(true&&false);
// console.log(true&&true);
// console.log(true||false);
// let num=10;
// console.log(num!=num);
// console.log(num!==num);

// // Use the ternary operator to check whether a user's age is 18 or above and print an appropriate message.

// let licenseage=1;
// console.log(licenseage >=18 ? "Eliglible to apply":"not eliglible ");

// // Predict the data type of each expression:


// console.log(typeof ("hello" + 10));
// console.log(typeof (10 + true));
// console.log(typeof (10 + null));
// console.log(typeof ("hello" + undefined));


// // Use Number() to convert a value received through prompt() into a number. Add 10 and print the result.

// let number=prompt("enter the number");
// number+=10;
// console.log(number);


// // Use Boolean() to check the Boolean values of an empty string, a non-empty string, 0, and true.

// console.log(Boolean(""));
// console.log(Boolean("venkat"));
// console.log(Boolean(0));
// console.log(Boolean("true"));


// // Write an if-else statement to check whether a number is positive or not.

// let numm=1
// if(numm >0 )
// {
//     console.log("positive number");
    
// }
// else
// {
//     console.log("negative number");
    
// }


// Use else-if to display a message based on the time entered by the user: early morning, morning, afternoon, evening, or night.

// let time=prompt("Enter the time ");

// if(time >=5 && time <=11)
// {
// console.log("Its morning");

// }

//  else if(time >=12 && time <=15)
// {
// console.log("Its afternoon time");

// }
//  else if(time >=16 && time <=18)
// {
// console.log("Its evening");

// }

// else if(time >=19  && time <=24)
// {
// console.log("Its night time");

// }



// // Create a nested if statement to check eligibility based on age, height, and weight, following the conditions in your code.


// let age=18;
// let height=160;
// let weight=20;


// if (age >= 18 && height >= 160 && weight >= 60) {
//     console.log("Eligible to apply for Police training");
// } else if (age < 18) {
//     console.log("Age is not eligible to apply for police training");
// } else if (height < 160) {
//     console.log("Height is not eligible to apply for police training");
// } else if (weight < 60) {
//     console.log("Weight is not eligible to apply for police training");
// }


// Use switch to display a message based on a traffic light color: red, yellow, or green. Display an error for an invalid color.

//  let color="red";
//   switch(color)
//   {
//     case "red":
//         console.log("Stop");
//         break;
        
//     case "green":
//         console.log("Go");
//       break;
//      case "Yellow":
//         console.log(" Be Ready");
//          break;
         
//       default: console.error("invalid color , Enter Red ,Yellow, And green color");
        
        
//   }





// //   Use a for loop to print numbers from 1 to 20.

// let num=10;
// for(let i=1;i<=num;i++)
//     {
// console.log(i);

//     }   

// // Use a for loop to print all even numbers from 2 to 20.

// let even=20;
// for(let i=1;i<=even;i++)
//     {
//         if(i%2==0)
//         {
//       console.log(i);
//         }


//     }   
// Use a while loop to print numbers from 10 down to 1.

// let rev=10;
//  while(rev>=0)
//  {
//     console.log(rev);
//     rev--;
    
//  }

// // // Use a do-while loop to print numbers from 1 to 10.

// let x=1;
// do
// {
//     console.log(x);
//     x++;
// }
// while(x<=10);



// Use a for-of loop to print each character in the string "JavaScript".
// let str="JavaScript"
// for( let m of str)
// {
// console.log(m);

// }


// // Use a for-of loop to print every element in an array of 5 student names.

//  let arr=["aa","bb","cc","dd","ee"];

//  for(let arr1 of arr) 
//  {
//     console.log(arr1);
 

//  }
// // Use a for-in loop to print all keys and values of this object:
//  let students = {
//      name: "Rames",
//      role: "Frontend Developer",
//      cgpa: 9
//  };

//  for(s1 in students)
//  {
//     console.log(s1+":"+students[s1]);
    
//  }
 
//  Take two numbers using prompt() and display their sum, difference, product, and remainder.

//     let d1=prompt("enter number1");
//      let d2=prompt("enter number2");

//      let x=d1+d2;
//      console.log(x);

//      let y=d1-d2;
//      console.log(y);
    
//      let z=d1*d2;
//      console.log(z);

//      let t=d1%d2;
//      console.log(t);

     


// // Create an array of 5 numbers and use a loop to print only the numbers greater than 10.

// let arr1=[12,11,4,5,6]
// {

//      for (let i =0; i<arr1.length ;i++)
//      {
//     if(arr1[i]>10)
//      {
//          console.log(arr1[i]);
        
//      }
//     }
// }

// // Take a user's age using prompt(). Use a conditional statement to check eligibility, then display the result using alert().

// let UserAge=prompt("Enter your age");

// if(UserAge>=3)
// {
//     alert("eligible to join the schoool");
// }
// else{
//      alert(" you are not eligible to join the schoool");
// }

// // Create a simple menu using switch with these options: addition, subtraction, multiplication, and division. Take two numbers from the user and display the selected operation's result.


// let num1=Number(prompt("enter the number1"));
// let num2=Number(prompt("enter the number2"));
// let choice=prompt("enter operation");
// switch(choice)
// {
//     case "add":
//         result=num1+num2;
//         break;

//         case "subract":
//         result=num1-num2;
//         break;

//          case "multiply":
//         result=num1*num2;
//         break;

//           case "division":
//         result=num1/num2;
//         break;

//         default:

//         console.log( "invalid number");      
// }
        
//          console.log(result);









