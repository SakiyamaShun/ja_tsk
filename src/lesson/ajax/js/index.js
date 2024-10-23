import axios from 'axios';
import { createErrorElement, createElements } from './createElement.js';

// HTMLのパース（解析）が完了したら実行される
window.addEventListener('DOMContentLoaded', () => {

  // formタグを取得
  const formElement = document.forms['search-form'];

  // 「検索」ボタンをクリックした後の処理
  formElement.addEventListener('submit', (event) => {

    // formのデフォルト動作をキャンセル
    event.preventDefault();

    // ポケモンの画像と名前表示する要素
    const characterElement = document.getElementById('character');
    // エラーメッセージを表示する要素
    const messageElement = document.getElementById('error-message');
    // 入力した図鑑番号を代入
    const pictureBookId = formElement.elements['id'].value;

    // 表示の初期化
    // エラーメッセージ表示用のHTML要素が存在すれば削除
    if(messageElement !== null) messageElement.remove();
    while(characterElement.lastChild) {
      characterElement.removeChild(characterElement.lastChild);
    }

    // APIリクエスト①(サーバーにリクエストを送る)：ポケモンの情報取得のための
    // 成功時の処理
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pictureBookId}`).then(({data}) => {

      // ポケモンの画像URLを代入
      const imgPath = data.sprites.other['official-artwork'].front_default;

      // 日本語訳リクエスト先URL
      // ※ポケモン名前が英語で帰ってくるため、日本語をレスポンスしてくれるサーバーにリクエストする。
      const jaRequestUrl = data.species.url;

      // APIリクエスト②：ポケモン名の日本語訳を取得
      axios.get(jaRequestUrl).then(({data}) => {

        // ポケモン名の日本語訳
        const characterName = data.names[0].name;

        // 画像のHTML要素の文字列を代入
        const imgElement = `<img src="${imgPath}" width="475" height="475" alt="" class="character__img">`;
        // ポケモンの名前のHTML要素の文字列を代入
        const nameElement = `<p class="character__name">${characterName}</p>`;
        // createElement.jsからインポートして実行
        const fragment = createElements(imgElement + nameElement);

        // 作成したHTML要素をDOMに反映
        characterElement.appendChild(fragment);

        // APIリクエスト②エラー処理
      }).catch(() => {
        formElement.after(createErrorElement('エラーが発生しました。時間をおいて再度お試しください。'));
      });

      // APIリクエスト①のエラー処理
    }).catch(error => {

      // リクエストに失敗した場合はエラーメッセージを表示
      switch(error.response && error.response.status) {
        // エラーが404だった場合、サーバーから帰ってきたエラーメッセージ表示
        case 404:
          formElement.after(createErrorElement(error.message));
          break;
          // ↑出ない場合、共通メッセージを表示
          default:
            formElement.after(createErrorElement('エラーが発生しました。時間をおいて再度お試しください。'));
            break;
      }

    });

    console.log('検索ボタンがクリックされました!');
  });
});