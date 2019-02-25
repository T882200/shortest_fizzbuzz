// Simple solution
// for (var i=1; i < 101; i++){
//     if (i % 15 == 0) console.log("FizzBuzz");
//     else if (i % 3 == 0) console.log("Fizz");
//     else if (i % 5 == 0) console.log("Buzz");
//     else console.log(i);
// }

// Shortest solution
for(let i=0;i<100;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i);
// For more info, visit
// https://codeburst.io/javascript-breaking-down-the-shortest-possible-fizzbuzz-answer-94a0ad9d128a