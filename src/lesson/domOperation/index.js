import 'animate.css';

// ID=titleとついているタグ<h1>を指定
const title = document.getElementById('title');
// console.log(title);

// buttonセレクタ(buttonクラス)の<button>を指定
const button = document.querySelector('.button');
// console.log(button);

//セレクタから(該当する全ての要素)を取得
// const list = document.querySelectorAll('.card-type--mocha .menu li');
// console.log(list);

// article.card-type--mochaセレクタ(card-type card-type--mochaクラス)の<article>を指定
const card_mocha = document.querySelector('article.card-type--mocha');

// article.card-type--yellowセレクタ(card-type--yellowクラス)の<article>を指定
const card_yellow = document.querySelector('article.card-type--yellow');

// イベントでクリックして指定し、
button.addEventListener('click', () => {

  // title要素に.animate__hingeクラス(落ちるアニメーション)を付与
  title.classList.add('animate__hinge');
  

  setTimeout(() => {

    // title要素から.animate__hingeクラスを削除
    title.classList.remove('animate__hinge');

    // mochaカードにcard-animationクラス(上に上がるアニメ)追加
    card_mocha.classList.add('card-animation');

    // yellowカードにanimate__fadeInUpクラス(下から上がってくるアニメ)追加
    card_yellow.classList.add('animate__fadeInUp');

    // yellowカードのdesplay none(非表示)
    card_yellow.style.display = '';
  }, 2000);
});







// ↑ 練習問題はここまで書いてきたコードに追記する形で実装してください。 ↑
