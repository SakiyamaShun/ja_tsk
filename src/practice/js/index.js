// 必要な関数をモジュールからインポートする
import axios from 'axios';
import { createErrorElement } from './createElement.js';

// // HTMLのパース（解析）が完了したら実行される
window.addEventListener('DOMContentLoaded', () => {
  // ポケモンの画像と名前表示する要素
  const characterElement = document.getElementById('list');
// リクエスト①：すべてのポケモンを取得リクエスト
  axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151').then(({data}) => {

    console.log(data);

      // 以下3行はforEachを使う場合の処理
      // data.results.forEach(element => {
        // console.log(element);
        // const pokemonData = element.url;

    // ポケモンの数(151回)分、以下の処理を繰り返す
    // for(let i =0; i < data.results.length; i++) {

    // 詳細情報のリクエスト先URL 
    // const pokemonUrl = data.results[i].url;

    data.results.map(value => {

      const pokemonUrl = value.url;

      // リクエスト②：ポケモンの詳細情報を取得リクエスト
      axios.get(pokemonUrl).then(({data}) => {

        // ポケモンの画像URLを代入
        const imgPath = data.sprites.other['official-artwork'].front_default;

        // 日本語訳リクエスト先URL
        const jaRequestUrl = data.species.url;

        // リクエスト③：日本語訳を取得リクエスト
        axios.get(jaRequestUrl).then(({data}) => {

          // ポケモン名の日本語訳
          const characterName = data.names[0].name;

          // <li>タグを追加
          let newLi = document.createElement("li");

          // <li>タグにクラス名を付ける
          newLi.className ="list-item";

          // 画像のHTML要素の文字列を代入
          let imgElement = `<div class="character">
                              <img src = "${imgPath}" width="475" height="475" alt="" class="character__img">
                            </div>
                            <p class="character__name">${characterName}</p>`;

          // liタグの中にdivタグ、pタグを追加している
          newLi.innerHTML = imgElement;

          // 作成したHTML要素をDOMに反映
          characterElement.appendChild(newLi);

        // リクエスト③に失敗した場合のエラー処理
        }).catch(() => {
          characterElement.after(createErrorElement('日本語訳の取得に失敗しました。'));
        });

    // リクエスト②に失敗した場合のエラー処理
      }).catch(() => {
        characterElement.after(createErrorElement('詳細情報の取得に失敗しました。'));
      });
    // } // forの終わり
    //}); // forEacheの終わり
  });

        // リクエスト①に失敗した場合のエラー処理
  }).catch(error => {
    // リクエスト失敗の場合、エラーメッセージを表示
    switch(error.response && error.response.status) {
    // エラーが404の場合、サーバーから帰ってきたエラーメッセージを表示
      case 404:
         characterElement.after(createErrorElement(error.message));
        break;
        // ↑出ない場合、共通メッセージを表示
        default:
          characterElement.after(createErrorElement('404意外のエラーが発生しました。時間をおいて再度お試しください。'));
          break;
    }
  });
  // ここに処理を書いていく

});