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
  
  