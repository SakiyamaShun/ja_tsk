// ここにコードを書きながら確認しましょう！
//Section05
// const array = ['one', 'two', 'three'];
// const [hoge, fuga, piyo] = array;
// console.log(hoge);
// console.log(fuga);
// console.log(piyo);

// function testFn() {
//   return ['Hello', 2022]
// }
// const [text, year] = testFn();
// console.log(text);
// console.log(year)

// const gizumo = {
//   name: 'Gizumo',
//   established: '2015年5月15日',
//   place:'Shibuya',
// };
// const{name: companyName, established, place} = gizumo;
// console.log(companyName);
// console.log(established);
// console.log(place);


// 練習問題
// 問題 1
function arrayFn(arg) {
  return ['jQuery', 'Vue', arg];
}

const [test01, test02, test03] = arrayFn('テスト');
console.log(test03);

// 問題 2
function objectFn() {
  console.log(S5_Q2);
}

const argObject = {
  name: 'Gizumo',
  place: 'Shibuya',
};

const {name: S5_Q2} = argObject;

objectFn(argObject);
