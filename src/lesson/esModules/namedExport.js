// ここにコードを書きながら確認しましょう！
// const hoge = 'hoge';

// 変数hogeをnamed exportによってエクスポートしている
// export { hoge };

// 宣言とエクスポートを同時に行っている
// export function testFn(text) {
//   return `Hello ${text}`;
// }











// 練習問題
// 問題 1
const nameFn = () => {
  return 'Gizumo taro';
};

const calcFn = (num) => {
  return num * 10;
}

//一辺にエクスポートする処理
export {nameFn, calcFn};
