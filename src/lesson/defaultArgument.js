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
function discountRateCalc(price , rate = 5) {
  return price * (1 - rate * 0.01);
}

// 4500円の5%引き
console.log(discountRateCalc(4500)); 

// 6000円の20%引き
console.log(discountRateCalc(6000, 20)); 