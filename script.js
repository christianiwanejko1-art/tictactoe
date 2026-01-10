const one = document.getElementById('1')
const two = document.getElementById('2')
const three = document.getElementById('3')
const four = document.getElementById('4')
const five = document.getElementById('5')
const six = document.getElementById('6')
const seven = document.getElementById('7')
const eight = document.getElementById('8')
const nine = document.getElementById('9')

// states
let statesDefault = [['one', 'empty', one], ['two', 'empty', two], ['three', 'empty', three], ['four', 'empty', four],  ['five', 'empty', five],  ['six', 'empty', six],  ['seven', 'empty', seven],  ['eight', 'empty', eight], ['nine', 'empty', nine]]
let states = [['one', 'empty', one], ['two', 'empty', two], ['three', 'empty', three], ['four', 'empty', four],  ['five', 'empty', five],  ['six', 'empty', six],  ['seven', 'empty', seven],  ['eight', 'empty', eight], ['nine', 'empty', nine]]

const winning = [['one','two','three'],['four','five','six'],['seven','eight','nine'], ['one','four','seven'], ['two','five','eight'], ['three','six','nine'], ['one','five','nine'],['three','five','seven']]

let gameWon = false

let turn = 'player1'
const player1T = 'x'
const player2T = 'o'
// let arrExample = ['one','three','four','two']

one.addEventListener('click', (x)=>{
    arr = states[0] // select the first array that correlates to square 1 -> ['one', 'empty', one]
    if (turn == 'player1'){
        if (arr[1] == 'empty'){
            arr[1] = player1T // player one goes first
            let target = x.target.querySelector('.decision')
            target.textContent = player1T
            let arrExample = []
            for (let i=0; i<states.length; i++){
                if (states[i][1] != 'empty'){
                    arrExample.push(states[i][0])
                }
            }
            for (let i=0; i<winning.length; i++){ // length of the winning array winning =full
                if (arrExample.includes(winning[i][0]) && arrExample.includes(winning[i][1]) && arrExample.includes(winning[i][2])){
                    gameWon = true
                }
                }
        }
    } else if (turn == 'player2'){
        if (arr[1] == 'empty'){
            arr[1] = player2T // player one goes first
            let target = x.target.querySelector('.decision')
            target.textContent = player2T
            let arrExample = []
            for (let i=0; i<states.length; i++){
                if (states[i][1] != 'empty'){
                    arrExample.push(states[i][0])
                }
            }
            for (let i=0; i<winning.length; i++){ // length of the winning array winning =full
                if (arrExample.includes(winning[i][0]) && arrExample.includes(winning[i][1]) && arrExample.includes(winning[i][2])){
                    console.log(true)
                }
                }
        }
    }
  turn = (turn === 'player1') ? 'player2' : 'player1';
})



two.addEventListener('click', (x)=>{
    arr = states[1] // select the first array that correlates to square 1 -> ['one', 'empty', one]
    if (turn == 'player1'){
        if (arr[1] == 'empty'){
            arr[1] = player1T // player one goes first
            let target = x.target.querySelector('.decision')
            target.textContent = player1T
            let arrExample = []
            for (let i=0; i<states.length; i++){
                if (states[i][1] != 'empty'){
                    arrExample.push(states[i][0])
                }
            }
            for (let i=0; i<winning.length; i++){ // length of the winning array winning =full
                if (arrExample.includes(winning[i][0]) && arrExample.includes(winning[i][1]) && arrExample.includes(winning[i][2])){
                    console.log(true)
                }
                }
        }
    } else if (turn == 'player2'){
        if (arr[1] == 'empty'){
            arr[1] = player2T // player one goes first
            let target = x.target.querySelector('.decision')
            target.textContent = player2T
            let arrExample = []
            for (let i=0; i<states.length; i++){
                if (states[i][1] != 'empty'){
                    arrExample.push(states[i][0])
                }
            }
            for (let i=0; i<winning.length; i++){ // length of the winning array winning =full
                if (arrExample.includes(winning[i][0]) && arrExample.includes(winning[i][1]) && arrExample.includes(winning[i][2])){
                    console.log(true)
                }
                }
        }
    }
  turn = (turn === 'player1') ? 'player2' : 'player1';
})

three.addEventListener('click', (x)=>{
    arr = states[2] // select the first array that correlates to square 1 -> ['one', 'empty', one]
    if (turn == 'player1'){
        if (arr[1] == 'empty'){
            arr[1] = player1T // player one goes first
            let target = x.target.querySelector('.decision')
            target.textContent = player1T
            let arrExample = []
            for (let i=0; i<states.length; i++){
                if (states[i][1] != 'empty'){
                    arrExample.push(states[i][0])
                }
            }
            for (let i=0; i<winning.length; i++){ // length of the winning array winning =full
                if (arrExample.includes(winning[i][0]) && arrExample.includes(winning[i][1]) && arrExample.includes(winning[i][2])){
                    console.log(true)
                }
                }
        }
    } else if (turn == 'player2'){
        if (arr[1] == 'empty'){
            arr[1] = player2T // player one goes first
            let target = x.target.querySelector('.decision')
            target.textContent = player2T
            let arrExample = []
            for (let i=0; i<states.length; i++){
                if (states[i][1] != 'empty'){
                    arrExample.push(states[i][0])
                }
            }
            for (let i=0; i<winning.length; i++){ // length of the winning array winning =full
                if (arrExample.includes(winning[i][0]) && arrExample.includes(winning[i][1]) && arrExample.includes(winning[i][2])){
                    console.log(true)
                }
                }
        }
    }
  turn = (turn === 'player1') ? 'player2' : 'player1';
})

four.addEventListener('click', (x)=>{
    arr = states[3] // select the first array that correlates to square 1 -> ['one', 'empty', one]
    if (turn == 'player1'){
        if (arr[1] == 'empty'){
            arr[1] = player1T // player one goes first
            let target = x.target.querySelector('.decision')
            target.textContent = player1T
            let arrExample = []
            for (let i=0; i<states.length; i++){
                if (states[i][1] != 'empty'){
                    arrExample.push(states[i][0])
                }
            }
            for (let i=0; i<winning.length; i++){ // length of the winning array winning =full
                if (arrExample.includes(winning[i][0]) && arrExample.includes(winning[i][1]) && arrExample.includes(winning[i][2])){
                    console.log(true)
                }
                }
        }
    } else if (turn == 'player2'){
        if (arr[1] == 'empty'){
            arr[1] = player2T // player one goes first
            let target = x.target.querySelector('.decision')
            target.textContent = player2T
            let arrExample = []
            for (let i=0; i<states.length; i++){
                if (states[i][1] != 'empty'){
                    arrExample.push(states[i][0])
                }
            }
            for (let i=0; i<winning.length; i++){ // length of the winning array winning =full
                if (arrExample.includes(winning[i][0]) && arrExample.includes(winning[i][1]) && arrExample.includes(winning[i][2])){
                    console.log(true)
                }
                }
        }
    }
  turn = (turn === 'player1') ? 'player2' : 'player1';
})

five.addEventListener('click', (x)=>{
    arr = states[4] // select the first array that correlates to square 1 -> ['one', 'empty', one]
    if (turn == 'player1'){
        if (arr[1] == 'empty'){
            arr[1] = player1T // player one goes first
            let target = x.target.querySelector('.decision')
            target.textContent = player1T
            let arrExample = []
            for (let i=0; i<states.length; i++){
                if (states[i][1] != 'empty'){
                    arrExample.push(states[i][0])
                }
            }
            for (let i=0; i<winning.length; i++){ // length of the winning array winning =full
                if (arrExample.includes(winning[i][0]) && arrExample.includes(winning[i][1]) && arrExample.includes(winning[i][2])){
                    console.log(true)
                }
                }
        }
    } else if (turn == 'player2'){
        if (arr[1] == 'empty'){
            arr[1] = player2T // player one goes first
            let target = x.target.querySelector('.decision')
            target.textContent = player2T
            let arrExample = []
            for (let i=0; i<states.length; i++){
                if (states[i][1] != 'empty'){
                    arrExample.push(states[i][0])
                }
            }
            for (let i=0; i<winning.length; i++){ // length of the winning array winning =full
                if (arrExample.includes(winning[i][0]) && arrExample.includes(winning[i][1]) && arrExample.includes(winning[i][2])){
                    console.log(true)
                }
                }
        }
    }
  turn = (turn === 'player1') ? 'player2' : 'player1';
})


six.addEventListener('click', (x)=>{
    arr = states[5] // select the first array that correlates to square 1 -> ['one', 'empty', one]
    if (turn == 'player1'){
        if (arr[1] == 'empty'){
            arr[1] = player1T // player one goes first
            let target = x.target.querySelector('.decision')
            target.textContent = player1T
            let arrExample = []
            for (let i=0; i<states.length; i++){
                if (states[i][1] != 'empty'){
                    arrExample.push(states[i][0])
                }
            }
            for (let i=0; i<winning.length; i++){ // length of the winning array winning =full
                if (arrExample.includes(winning[i][0]) && arrExample.includes(winning[i][1]) && arrExample.includes(winning[i][2])){
                    console.log(true)
                }
                }
        }
    } else if (turn == 'player2'){
        if (arr[1] == 'empty'){
            arr[1] = player2T // player one goes first
            let target = x.target.querySelector('.decision')
            target.textContent = player2T
            let arrExample = []
            for (let i=0; i<states.length; i++){
                if (states[i][1] != 'empty'){
                    arrExample.push(states[i][0])
                }
            }
            for (let i=0; i<winning.length; i++){ // length of the winning array winning =full
                if (arrExample.includes(winning[i][0]) && arrExample.includes(winning[i][1]) && arrExample.includes(winning[i][2])){
                    console.log(true)
                }
                }
        }
    }
  turn = (turn === 'player1') ? 'player2' : 'player1';
})

seven.addEventListener('click', (x)=>{
    arr = states[6] // select the first array that correlates to square 1 -> ['one', 'empty', one]
    if (turn == 'player1'){
        if (arr[1] == 'empty'){
            arr[1] = player1T // player one goes first
            let target = x.target.querySelector('.decision')
            target.textContent = player1T
            let arrExample = []
            for (let i=0; i<states.length; i++){
                if (states[i][1] != 'empty'){
                    arrExample.push(states[i][0])
                }
            }
            for (let i=0; i<winning.length; i++){ // length of the winning array winning =full
                if (arrExample.includes(winning[i][0]) && arrExample.includes(winning[i][1]) && arrExample.includes(winning[i][2])){
                    console.log(true)
                }
                }
        }
    } else if (turn == 'player2'){
        if (arr[1] == 'empty'){
            arr[1] = player2T // player one goes first
            let target = x.target.querySelector('.decision')
            target.textContent = player2T
            let arrExample = []
            for (let i=0; i<states.length; i++){
                if (states[i][1] != 'empty'){
                    arrExample.push(states[i][0])
                }
            }
            for (let i=0; i<winning.length; i++){ // length of the winning array winning =full
                if (arrExample.includes(winning[i][0]) && arrExample.includes(winning[i][1]) && arrExample.includes(winning[i][2])){
                    console.log(true)
                }
                }
        }
    }
  turn = (turn === 'player1') ? 'player2' : 'player1';
})

eight.addEventListener('click', (x)=>{
    arr = states[7] // select the first array that correlates to square 1 -> ['one', 'empty', one]
    if (turn == 'player1'){
        if (arr[1] == 'empty'){
            arr[1] = player1T // player one goes first
            let target = x.target.querySelector('.decision')
            target.textContent = player1T
            let arrExample = []
            for (let i=0; i<states.length; i++){
                if (states[i][1] != 'empty'){
                    arrExample.push(states[i][0])
                }
            }
            for (let i=0; i<winning.length; i++){ // length of the winning array winning =full
                if (arrExample.includes(winning[i][0]) && arrExample.includes(winning[i][1]) && arrExample.includes(winning[i][2])){
                    console.log(true)
                }
                }
        }
    } else if (turn == 'player2'){
        if (arr[1] == 'empty'){
            arr[1] = player2T // player one goes first
            let target = x.target.querySelector('.decision')
            target.textContent = player2T
            let arrExample = []
            for (let i=0; i<states.length; i++){
                if (states[i][1] != 'empty'){
                    arrExample.push(states[i][0])
                }
            }
            for (let i=0; i<winning.length; i++){ // length of the winning array winning =full
                if (arrExample.includes(winning[i][0]) && arrExample.includes(winning[i][1]) && arrExample.includes(winning[i][2])){
                    console.log(true)
                }
                }
        }
    }
  turn = (turn === 'player1') ? 'player2' : 'player1';
})

nine.addEventListener('click', (x)=>{
    arr = states[8] // select the first array that correlates to square 1 -> ['one', 'empty', one]
    if (turn == 'player1'){
        if (arr[1] == 'empty'){
            arr[1] = player1T // player one goes first
            let target = x.target.querySelector('.decision')
            target.textContent = player1T
            let arrExample = []
            for (let i=0; i<states.length; i++){
                if (states[i][1] != 'empty'){
                    arrExample.push(states[i][0])
                }
            }
            for (let i=0; i<winning.length; i++){ // length of the winning array winning =full
                if (arrExample.includes(winning[i][0]) && arrExample.includes(winning[i][1]) && arrExample.includes(winning[i][2])){
                    console.log(true)
                }
                }
        }
    } else if (turn == 'player2'){
        if (arr[1] == 'empty'){
            arr[1] = player2T // player one goes first
            let target = x.target.querySelector('.decision')
            target.textContent = player2T
            let arrExample = []
            for (let i=0; i<states.length; i++){
                if (states[i][1] != 'empty'){
                    arrExample.push(states[i][0])
                }
            }
            for (let i=0; i<winning.length; i++){ // length of the winning array winning =full
                if (arrExample.includes(winning[i][0]) && arrExample.includes(winning[i][1]) && arrExample.includes(winning[i][2])){
                    console.log(true)
                }
                }
        }
    }
  turn = (turn === 'player1') ? 'player2' : 'player1';
})
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
