// ここにコードを書きながら確認しましょう！
//default exportはモジュールごとに1つしかエクスポートできない
//そのため、一つのモジュールに2回export default を書くことはできない
// const fuga = 'fuga';
// export default fuga;

//宣言とデフォエクの同時実行
// export default function testFn(text) {
//   return `Hello ${text}`;
// }

//ただし↓のように変数宣言とデフォエクの同時実行は無理
//export default const fuga = 'fuga';







// 練習問題
// 問題 2
export default function defaultFn() {
  return 'default export';
}