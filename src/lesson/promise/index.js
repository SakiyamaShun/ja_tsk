// ここにコードを書きながら確認しましょう！
//非同期：前の処理の完了を待たずに次の処理をする
// console.log('1番目の処理')

// setTimeout(() => { 
//   console.log('2番目の処理');
// },5000);

// console.log('3番目の処理');


// setTimeout(() => { 
//   console.log('2番目の処理'); 
//   setTimeout(() => {
//     console.log('3番目の処理');
//   }, 1000);
// }, 2000);

// const promise = new Promise((resolve, reject) => {

//   reject('非同期が失敗しました');
// });

// promise.catch(err => {
//   console.log(err);
// });

// console.log(promise);

//Promise:非同期処理完了or失敗を表すオブジェクトで
//Fulfilled:非同期成功、 Rejected:非同期失敗、 Pending:待機状態

//resolve:Fulfilledにし、thenメソッドのコールバック関数の処理実行
//reject:Rejectedにし、catchメソッドのコールバック関数の処理実行

// 練習問題
// 問題 1
// return new Promiseは何を返している？
const returnPromise = () => {
  return new Promise((_resolve, reject) => {
    setTimeout(() => {
      reject('エラーが発生しました！');
    }, 3000);
  });
};

//returnされるのはPromiseオブジェクトなので、そのPromiseオブジェクトを呼び出す
//returnPromiseは()=空という引数になっているため、呼び出すときも"()"をつけてオブジェクトにする
//rejectの中身がdataに入る
returnPromise().catch((data) => 
  console.log(data));