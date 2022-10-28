number = 10;
function add() {
  return (number += 5);
}
add(); 
function subtract(){
    return (number -=5);
}
subtract();
function multiply(){
    return (number *= 5);
}
multiply();
function divide(){
    return (number /= 5);
}
divide();
function add(a, b){
    return (a + b);
}
add(1,2);
function subtract(a, b){
    return (a - b);
}
subtract(4,2);
function multiply(a, b){
    return (a * b);
}
multiply(2, 3);
function divide(a, b){
    return (a/b);
}
divide(8, 4);
function increment(n){
    return (++n);
}
increment(5);
function decrement(n){
    return (--n);
}
decrement(5);

function makeInt(string){
    return parseInt(string,10)
  }
  function preserveDecimal(string){
    return parseFloat(string)
  }