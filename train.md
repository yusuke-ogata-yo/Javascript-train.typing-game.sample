# typeing game

## html
id="target"：文字列表示部分
class="info"：score、miss、timerの表示部分
id="score"：score表示部分
id="miss"：miss表示部分
id="timer"：timer表示部分


## css
body：font-family: 'courie New', monospace;
#target：letter-spaceing
.info：color

## javascript
### 変数
let word
let loc
let score
let miss
const timeLimit(ms)
let startTime
let isPlaying

const target
const scoreLabel
const missLabel
const timerLabel

### 関数
function updateTarget() :入力が正解した場合、'_'の文字を表示する
function updateTimer() ：タイマーの更新と表示。ゲームが終了した場合の結果表示。リプレイの表示
function showResult() ：結果の表示、score、miss、accuracyをアラームウインドウで表示
window.addEventListener('click', () => {...}) ：クリックしたらゲームを開始する。各種変数の初期化とupdateTimer()の呼び出し
window.addEventListener('keydown', (e) => {}) ：key入力値とtarget文字列を比較して、正解・不正解を判定する。scoreLabel、missLabelの表示更新。

###