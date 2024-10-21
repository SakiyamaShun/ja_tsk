// ここにコードを書きながら確認しましょう！
//forEach:for文の別の書き方
// const test01 = [1, 2, 3, 4, 5];
// // test01.forEach(val => console.log(val));
// test01.forEach((val, index, array) => {console.log(val, index, array);
// });
//引数が一つだと配列の中身、二つめの引数があると配列番号が、三つ目の引数があると配列そのものを受け取る

//map:配列の値をコールバック関数に渡し、コールバック関数で処理した値から新しい配列を作成
// const test02 = [2, 4, 6, 8, 10];
// const newArray = test02.map(val => val * 2);
// console.log(newArray);



// 練習問題
// 問題 1
const array = [
  {
    tag: 'p',
    className: 'hoge',
  },
  {
    tag: 'div',
    className: 'fuga',
  },
  {
    tag: 'h1',
    className: 'piyo',
  },
];

//'c-' + val.className

//{}だと関数かオブジェクトの判断がつかないため()で囲って"({})"にすることでオブジェクトと判定される。
const newArray02 = array.map(val => ({...val, className: 'c-' + val.className}));
console.log(newArray02);