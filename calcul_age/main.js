

let strNum = prompt("entre l’année de naissance");

// function getAge(strNum) {
//   let dateT = new Date();

//   console.log(dateT.getFullYear());
//   return  Math.floor(dateT.getFullYear() - Number(strNum));

  
// }

function getAge(strNum) {
  let dateT = new Date();

  console.log(dateT.getFullYear());
  console.log(strNum.split("."));
  return  Math.floor(dateT.getFullYear() - Number(strNum.split(".").slice(-1)));

  
}


alert(getAge(strNum));



// function foo(num) {
//   if (num === 1) {
//     return 1;
//   }else {
    
//      return num*foo(num - 1);
//   }
  
// }
// console.log(foo(4));
