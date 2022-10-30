// console.log('hi');
// const myStr = ""; // Change this line
// const sampleStr = "I am a \"double quoted\" string inside \"double quotes\"."
// console.log(sampleStr);
// console.log('I am a "double quoted" string inside "double quotes".');
// const myStr = "FirstLine \n \t \\SecondLine \nThirdLine"
// console.log(myStr);
// const functionWithArgs =  (a,b) =>{
//     return a+b;
//     }
//      console.log(functionWithArgs(1,2));
// function trueOrFalse(wasThatTrue) {
// Only change code below this line
//   return wasThatTrue?'Yes, that was true':'No, that was false';
// Only change code above this line
//   }
// console.log(trueOrFalse(true));

// function caseInSwitch(val) {
//     let answer = "";
//     // Only change code below this line
//   switch (val) {
//     case 1:
//         answer = "alpha";
//       break;
//     case 2:
//         answer = "beta";
//       break;
//     case 3:
//         answer = "gamma";
//       break;
//     case 4:
//         answer = "delta";
//       break;
//   }
//     // Only change code above this line
//     return answer;
//   }

//   caseInSwitch(3);
// function sequentialSizes(val) {
//     let answer = "";
//     // Only change code below this line
//   switch(val){
//     case 1:
//     case 2:
//     case 3:
//     answer = "Low"
//     break;
//     case 4:
//     case 5:
//     case 6:
//         answer = "Mid"
//     break;
//     case 7:
//     case 8:
//     case 9:
//         answer = "High"
//   }
//     // Only change code above this line
//     return answer;
//   }
//   sequentialSizes(1);

// function chainToSwitch(val) {
//     let answer = "";
//     // Only change code below this line

//     if (val === "bob") {
//         answer = "Marley";
//     } else if (val === 42) {
//         answer = "The Answer";
//     } else if (val === 1) {
//         answer = "There is no #1";
//     } else if (val === 99) {
//         answer = "Missed me by this much!";
//     } else if (val === 7) {
//         answer = "Ate Nine";
//     }
//     switch (val) {
//         case "bob":
//             answer = "Marley";
//             break;
//         case 42:
//             answer = "The Answer";
//             break;
//         case 1:
//             answer = "There is no #1";
//             break;
//         case 99:
//             answer = "Missed me by this much!";
//             break;
//         case 7:
//             answer = "Ate Nine";
//             break;
//         default:
//             break;
//     }
//     // Only change code above this line
//     return answer;
// }

// chainToSwitch(7);

// function abTest(a, b) {
//     // Only change code below this line
//   if(a<0 || b<0) {
//     return undefined
//   }
//     // Only change code above this line
//     return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
//   }
//   console.log(abTest(-2, 2));

// Setup
// const testObj = {
//     12: "Namath",
//     16: "Montana",
//     19: "Unitas"
//   };
// Only change code below this line
//   const playerNumber = 16;  // Change this line
//   const player = testObj[playerNumber];   // Change this line
//   console.log(player);
// function phoneticLookup(val) {
// const lookup = {
//     alpha:"Adams",
//     bravo:"Boston",
//     charlie:"Chicago",
//     delta:"Denver",
//     echo:"Easy",
//     foxtrot:"Frank",
//     "":undefined,
// }
// return lookup[val];
// }
// console.log(phoneticLookup("charlie"));


// function checkObj(obj, checkProp) {
//     // Only change code below this line
//    return obj.hasOwnProperty(checkProp)?obj[checkProp]:"Not Found";
//     // Only change code above this line
//   }

//   console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"));


// const myStorage = {
//     "car": {
//       "inside": {
//         "glove box": "maps",
//         "passenger seat": "crumbs"
//        },
//       "outside": {
//         "trunk": "jack"
//       }
//     }
//   };

//     const gloveBoxContents = myStorage.car.inside["glove box"];
//   console.log();



// function multiplyAll(arr) {
//     let product = 1;
//     // Only change code below this line
//   for (let i = 0; i < arr.length; i++) {
//     for (let x = 0; x < arr[i].length; x++) {
//         product *= arr[i][x];        
//     }


//   }
//     // Only change code above this line
//     return product;
//   }

//   console.log(multiplyAll([[1, 6], [3, 8], [5, 6, 14]]));         

// const myArray = [];
// let i = 10;

// // Only change code below this line
// do {
//  myArray.push(i);
//   i++;
// } while (i < 5);
// console.log(myArray);


// function multiply(arr, n) {
//     let product = 1;
//     for (let i = 0; i < n; i++) {
//       product *= arr[i];
//     }
//     return product;
//   }


//   console.log(multiply([10,15,5], 10));
//   function multiply(arr, n) {
//     if (n <= 0) {
//       return 0;
//     } else {
//       return multiply(arr, n - 1) + arr[n - 1];
//     }
//   }
//   console.log( multiply([2, 3, 4, 5], 3));

// Setup
// const contacts = [
//     {
//         firstName: "Akira",
//         lastName: "Laine",
//         number: "0543236543",
//         likes: ["Pizza", "Coding", "Brownie Points"],
//     },
//     {
//         firstName: "Harry",
//         lastName: "Potter",
//         number: "0994372684",
//         likes: ["Hogwarts", "Magic", "Hagrid"],
//     },
//     {
//         firstName: "Sherlock",
//         lastName: "Holmes",
//         number: "0487345643",
//         likes: ["Intriguing Cases", "Violin"],
//     },
//     {
//         firstName: "Kristian",
//         lastName: "Vos",
//         number: "unknown",
//         likes: ["JavaScript", "Gaming", "Foxes"],
//     },
// ];


// function lookUpProfile(name, prop) {

//     // Only change code below this line
//     for (let i = 0; i < contacts.length; i++) {


//         if (contacts[i].firstName === name) {
//             if (contacts[i].hasOwnProperty(prop)) {
//                 return contacts[i][prop]
//             }else {
//                 return "No such property";
//               }
//         }
//     }
//     return 'No such contact'

    // Only change code above this line
// }


// console.log(lookUpProfile("Kristian", "lastName")); //No such property


// function randomRange(myMin, myMax) {
//     // Only change code below this line
//     return Math.floor(Math.random() * (myMax - myMin + 1));
//     // Only change code above this line
//   }

// //   console.log(randomRange(10,20));


//  console.log( 45 + Math.floor(Math.random()* (50 - 45 + 1)));

 
// function convertToInteger(str) {
//     return Math.floor(str)
//     }
    
//   console.log(  convertToInteger("56"));


// function checkEqual(a, b) {
//   return  (a===b)?'Equal':'Not Equal'
//     }    
//    console.log(checkEqual(1, 2));
// const s = [5, 7, 2];
// function editInPlace() {
//   // Only change code below this line
// s[0] = 2;
// s[1]=5;
// s[2]=7;
//   // Only change code above this line
// }
// console.log(s);
// editInPlace();
// console.log(s);
  // Using s = [2, 5, 7] would be invalid

//   const LOCAL_FORECAST = {
//     yesterday: { low: 61, high: 75 },
//     today: { low: 64, high: 77 },
//     tomorrow: { low: 68, high: 80 }
//   };
  
  // Only change code below this line
    
  // const lowToday = LOCAL_FORECAST.today.low;
  // const highToday = LOCAL_FORECAST.today.high;
  
//   const {today:{low:lowToday,high:highToday}} 
  
  
  // Only change code above this line