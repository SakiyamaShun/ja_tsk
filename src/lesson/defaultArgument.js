// ここにコードを書きながら確認しましょう！
//Section04
// function argFn(arg = 'Hello') {
//   console.log(arg);
// }

// argFn();


// function totalPrice(price, tax = 1.10) {
//   return price * tax;
// }
// console.log(totalPrice(1000)); 



// 練習問題
// 問題 1
function discountRateCalc(price = 4500, rate = 5) {
  return price * (1 - rate * 0.01);
}
console.log(discountRateCalc()); 


function discountRateCalc02(price = 6000, rate = 20) {
  return price * (1 - rate * 0.01);
}

console.log(discountRateCalc02()); 