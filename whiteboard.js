// 3n+1 (Collatz Conjecture)
// 1. Odd Number ? 3n+1 : n/2
// Regardless of the number you start with => infinite loop 4-2-1

// 4 => 2 => 1 => 4 => 2 => 1
//  12: 12 => 6 => 3 => 10 => 5 => 16 => 8 => 4 => 2 => 1

// Write some function collatz, accepts any number, apply the 2 rules,
// and return the number of steps it takes to get to 1 (to enter the infinite loop)

function collatz(num) {
  let count = 0;
  while (num != 1) {
    if (num % 2 === 0) {
      num = num/2
      count ++
    }
    else if(num % 2 != 0){
      num = 3*num + 1
      count ++
    }
  }
  return count
}

console.log(collatz(4))
console.log(collatz(1))
console.log(collatz(12))