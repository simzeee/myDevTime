// 3n+1 (Collatz Conjecture)
// 1. Odd Number ? 3n+1 : n/2
// Regardless of the number you start with => infinite loop 4-2-1

// 4 => 2 => 1 => 4 => 2 => 1
//  12: 12 => 6 => 3 => 10 => 5 => 16 => 8 => 4 => 2 => 1

// Write some function collatz, accepts any number, apply the 2 rules,
// and return the number of steps it takes to get to 1 (to enter the infinite loop)

// function collatz(num) {
//   let count = 0;
//   while (num != 1) {
//     if (num % 2 === 0) {
//       num = num/2
//       count ++
//       console.log(num)
//     }
//     else if(num % 2 != 0){
//       num = 3*num + 1
//       count ++
//       console.log(num)
//     }
//   }
//   return count + " FINAL!!"
// }

// console.log(collatz(4))
// console.log(collatz(1))
// console.log(collatz(12))
// console.log(collatz(11293874))

/*
let count = 0;

while (n !== 1){
  n % 2 === 0 ? n = n / 2 : n = 3 * n + 1
  count++
}

return count
*/

let makeArt = () => {
  const tinyart = document.getElementById('tinyart');
  const context = tinyart.getContext("2d");

  for (let x = 0; x<255; x++){
    for(let y = 0; y<255; y++){
      if((x * y) % 255){
        context.fillRect(x*4, y*4, 4, 4)
        context.fillStyle = `rgb(${(x * y) % 255}, ${(x * y) % 255}, ${(x * y) % 255})`
      }
    }
  }
};

makeArt()


