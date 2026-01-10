const squares = document.getElementById('squares');

const winning = [
  ['one','two','three'],
  ['four','five','six'],
  ['seven','eight','nine'],
  ['one','four','seven'],
  ['two','five','eight'],
  ['three','six','nine'],
  ['one','five','nine'],
  ['three','five','seven']
];

let statesDefault = [
  ['one','empty', document.getElementById('1')],
  ['two','empty', document.getElementById('2')],
  ['three','empty', document.getElementById('3')],
  ['four','empty', document.getElementById('4')],
  ['five','empty', document.getElementById('5')],
  ['six','empty', document.getElementById('6')],
  ['seven','empty', document.getElementById('7')],
  ['eight','empty', document.getElementById('8')],
  ['nine','empty', document.getElementById('9')],
];

let states = [
  ['one','empty', document.getElementById('1')],
  ['two','empty', document.getElementById('2')],
  ['three','empty', document.getElementById('3')],
  ['four','empty', document.getElementById('4')],
  ['five','empty', document.getElementById('5')],
  ['six','empty', document.getElementById('6')],
  ['seven','empty', document.getElementById('7')],
  ['eight','empty', document.getElementById('8')],
  ['nine','empty', document.getElementById('9')],
];

const h2reset = document.getElementById('restartH1')

const restartBtn = document.getElementById('restart');

restartBtn.addEventListener('click', restartGame);

function restartGame() {
  // reset game state
  gameWon = false;
  turn = 'player1';

  // reset states + UI
  for (let i = 0; i < states.length; i++) {
    states[i][1] = 'empty';
    states[i][2].querySelector('.decision').textContent = '';
  }

  // reset text
  h2reset.textContent = "player x's turn";
}

let gameWon = false;
let turn = 'player1';
const player1T = 'x';
const player2T = 'o';

function checkWin(token) {
  const moves = states
    .filter(s => s[1] === token)
    .map(s => s[0]);

  return winning.some(([a,b,c]) =>
    moves.includes(a) && moves.includes(b) && moves.includes(c)
  );
}

    squares.addEventListener('click', (e) => {
    if (gameWon) return;

    const square = e.target.closest('.square');
    if (!square) return;

    const index = Number(square.id) - 1;
    const cell = states[index];

    if (cell[1] !== 'empty') return;
    const token = (turn === 'player1') ? player1T : player2T;
    const nextToken = token === 'x' ? 'o' : 'x';
    h2reset.textContent = `player ${nextToken}'s turn`;

    // set state + UI
    cell[1] = token;
    square.querySelector('.decision').textContent = token;

    // win check
    if (checkWin(token)) {
    gameWon = true;
    h2reset.innerHTML = `player ${token} won`
    console.log(`player ${token} won`);
    return;
    }

    // switch turn ONCE
  turn = (turn === 'player1') ? 'player2' : 'player1';
});

// game winning logic
// combinations
/*
rows

--- 123 
xxx xxx
xxx xxx

xxx xxx
--- 456
xxx xxx

xxx xxx
xxx xxx
--- 789


columns

-xx 1xx
-xx 4xx
-xx 7xx

x-x x2x
x-x x5x
x-x x8x

xx- xx3
xx- xx6
xx- xx9

diaganol
-xx 1xx
x-x x5x
xx- xx9

xx- xx3
x-x x5x
-xx 7xx
*/
