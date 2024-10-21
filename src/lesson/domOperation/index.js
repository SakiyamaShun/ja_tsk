import 'animate.css';

// ここにコードを書きながら確認しましょう！
const title = document.getElementById('title');
console.log(title);

//セレクタから(該当する最初の)要素を取得
const button = document.querySelector('.button');
console.log(button);

//セレクタから(該当する全ての要素)を取得
const list = document.querySelectorAll('.card-type--mocha .menu li');
console.log(list);

//mochaカードの要素取得
const card_mocha = document.querySelector('article.card-type--mocha');

//yellowカードの要素取得
const card_yellow = document.querySelector('article.card-type--yellow');

button.addEventListener('click', () => {
  title.classList.add('animate__hinge');
  

  setTimeout(() => {
    title.classList.remove('animate__hinge');
    card_mocha.classList.add('card-animation');  //mochaカードにアニメーション追加
    card_yellow.classList.add('animate__fadeInUp');  //yellowカードにアニメーション追加
    card_yellow.style.display = '';  //yellowカードのdisplay:noneを解除
  }, 2000);
});







// ↑ 練習問題はここまで書いてきたコードに追記する形で実装してください。 ↑
