// ここにコードを書きながら確認しましょう！
//Section6
// const numbers = [1, 2, 3];
// const newNumbers = [...numbers, 4, 5];
// console.log(newNumbers);

// const animal = ['cat', 'dog'];
// const first = ['apple', 'orange'];
// const mergeArray = [...animal, ...first];
// console.log(mergeArray);

// const company = {
//   name: 'Gizumo',
//   place: 'Shibuya',
// };
// const copy = {...company};
// console.log(copy);


// 練習問題
// 問題 1
const packageManager = ['npm', 'yarn', 'pnpm'];

function arrayFn(array) {
  const framework = ['Vue', 'React', 'Svelte'];
  const q01 = [...framework, ...array];
  return  q01;
}

console.log(arrayFn(packageManager));

// 問題 2
const objectA = {
  language: 'JavaScript',
  framework: 'Vue',
  version: 2,
};
objectA.routingLibrary = 'Vue Router';
// objectBでroutingLibraryを追加するのもあり？

const objectB = {
  version: 3,
};

const data = {...objectA, ...objectB};
console.log(data);