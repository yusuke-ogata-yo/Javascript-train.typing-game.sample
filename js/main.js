'use strict';

{
  const words = [
    'apple',
    'sky',
    'blue',
    'middle',
    'set',
  ];


  /**
   * タイプする文字列
   * @type {String}
   */
  let word;
  /**
   * タイプする位置
   * @type {Number}
   */
  let loc;
  /**
   * スコア
   * @type {Number}
   */
  let score;
  /**
   * ミスしたタイプ数
   * @type {Number}
   */
  let miss;
  /**
   * 制限時間（ミリ秒）
   * @type {Number}
   */
  const timeLimit = 3 * 1000;
  /**
   * 開始時刻。経過時刻の計算に用いる。
   * @type {Number}
   */
  let startTime;
  /**
   * ゲーム中である場合true
   * @type {Boolean}
   */
  let isPlaying = false;


  const target = document.getElementById('target');
  const scoreLabel = document.getElementById('score');
  const missLabel = document.getElementById('miss');
  const timerLabel = document.getElementById('timer');
  

  /**
   * 表示されている文字を'_'で表示
   */
  function updateTarget() {
    let placeHolder = '';
    for (let i = 0; i < loc; i++){
      placeHolder += '_';
    }
    target.textContent = placeHolder + word.substring(loc);
  }


  /**
   * 定期的に呼び出し、時刻のカウントと、
   *     ゲームのタイマーが満了しているか判定し
   *     時間が0になった場合の処理を実施
   */
  function updateTimer() {
    const timeLeft = startTime + timeLimit - Date.now();
    timerLabel.textContent = (timeLeft / 1000).toFixed(2);

    const timeoutId = setTimeout( ()=> {
      updateTimer();
    }, 10);

    if (timeLeft < 0) {
      isPlaying = false;

      clearTimeout(timeoutId);
      timerLabel.textContent = '0.00';
      setTimeout( () => {
        showResult();
      }, 100);

      target.textContent = 'click to replay';
    }
  }


  /**
   * タイピング結果をalertウィンドウにて表示する
   */
  function showResult() {
    const accuracy = score + miss === 0 ? 0 : score / (score + miss) * 100;
    alert(`${score} letters, ${miss} misses, ${accuracy.toFixed(2)}% accuracy!`);
  }

  /**
   * click された時の処理
   */
  window.addEventListener('click', () => {
    if (isPlaying === true) {
      return;
    }
    isPlaying = true;

    loc = 0;
    score = 0;
    miss = 0;
    scoreLabel.textContent = score;
    missLabel.textContent = miss;
    word = words[Math.floor(Math.random() * words.length)];
    target.textContent = word;
    startTime = Date.now();
    updateTimer();
  })


  /**
   * keydown された時の処理
   */
  window.addEventListener('keydown', (e) => {
    if (isPlaying !== true) {
      return;
    }

    if (e.key === word[loc]){
      loc++;
      if (loc === word.length) {
        word = words[Math.floor(Math.random() * words.length)];
        loc = 0;
      }
      updateTarget();
      score++;
      scoreLabel.textContent = score;
    } else {
      miss++;
      missLabel.textContent = miss;
    }

  });
}