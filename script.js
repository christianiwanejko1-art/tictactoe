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



let turn = 'Player1'

const restartH1 = document.getElementById('restartH1')

const restart = document.getElementById('restart')
restart.addEventListener('click', () => {
    restartH1.innerHTML = `Player X's Turn`;
    states = statesDefault
    statesDefault.forEach((x)=> {
        x[2].querySelector('.decision').innerHTML = '';
        turn = 'Player1';
    })
})


one.addEventListener('click', () => {
    if (turn === 'Player1' && states[0][1] == 'empty') {
        states[0][1] = 'x'
        states[0][2].querySelector('.decision').innerHTML = 'x';
        turn = 'Player2'
        restartH1.innerHTML = `Player o's Turn`
    } else if (turn === 'Player2' && states[0][1] == 'empty'){
        states[0][1] = 'o'
        states[0][2].querySelector('.decision').innerHTML = 'o';
        turn = 'Player1'
        restartH1.innerHTML = `Player 1's Turn`
    }
})

two.addEventListener('click', () => {
    if (turn === 'Player1' && states[1][1] == 'empty') {
        states[1][1] = 'x'
        states[1][2].querySelector('.decision').innerHTML = 'x';
        turn = 'Player2'
        restartH1.innerHTML = `Player o's Turn`
    } else if (turn === 'Player2' && states[1][1] == 'empty'){
        states[1][1] = 'o'
        states[1][2].querySelector('.decision').innerHTML = 'o';
        turn = 'Player1'
        restartH1.innerHTML = `Player x's Turn`    
    }
})

three.addEventListener('click', () => {
    if (turn === 'Player1' && states[2][1] == 'empty') {
        states[2][1] = 'x'
        states[2][2].querySelector('.decision').innerHTML = 'x';
        turn = 'Player2'
        restartH1.innerHTML = `Player o's Turn`
    } else if (turn === 'Player2' && states[2][1] == 'empty'){
        states[2][1] = 'o'
        states[2][2].querySelector('.decision').innerHTML = 'o';
        turn = 'Player1'
        restartH1.innerHTML = `Player x's Turn`    
    }
})

four.addEventListener('click', () => {
    if (turn === 'Player1' && states[3][1] == 'empty') {
        states[3][1] = 'x'
        states[3][2].querySelector('.decision').innerHTML = 'x';
        turn = 'Player2'
        restartH1.innerHTML = `Player o's Turn`
    } else if (turn === 'Player2' && states[3][1] == 'empty'){
        states[3][1] = 'o'
        states[3][2].querySelector('.decision').innerHTML = 'o';
        turn = 'Player1'
        restartH1.innerHTML = `Player x's Turn`    
    }
})

five.addEventListener('click', () => {
    if (turn === 'Player1' && states[4][1] == 'empty') {
        states[4][1] = 'x'
        states[4][2].querySelector('.decision').innerHTML = 'x';
        turn = 'Player2'
        restartH1.innerHTML = `Player o's Turn`
    } else if (turn === 'Player2' && states[4][1] == 'empty'){
        states[4][1] = 'o'
        states[4][2].querySelector('.decision').innerHTML = 'o';
        turn = 'Player1'
        restartH1.innerHTML = `Player x's Turn`    
    }
})

six.addEventListener('click', () => {
    if (turn === 'Player1' && states[5][1] == 'empty') {
        states[5][1] = 'x'
        states[5][2].querySelector('.decision').innerHTML = 'x';
        turn = 'Player2'
        restartH1.innerHTML = `Player o's Turn`
    } else if (turn === 'Player2' && states[5][1] == 'empty'){
        states[5][1] = 'o'
        states[5][2].querySelector('.decision').innerHTML = 'o';
        turn = 'Player1'
        restartH1.innerHTML = `Player x's Turn`    
    }
})

seven.addEventListener('click', () => {
    if (turn === 'Player1' && states[6][1] == 'empty') {
        states[6][1] = 'x'
        states[6][2].querySelector('.decision').innerHTML = 'x';
        turn = 'Player2'
        restartH1.innerHTML = `Player o's Turn`
    } else if (turn === 'Player2' && states[6][1] == 'empty'){
        states[6][1] = 'o'
        states[6][2].querySelector('.decision').innerHTML = 'o';
        turn = 'Player1'
        restartH1.innerHTML = `Player x's Turn`    
    }
})

eight.addEventListener('click', () => {
    if (turn === 'Player1' && states[7][1] == 'empty') {
        states[7][1] = 'x'
        states[7][2].querySelector('.decision').innerHTML = 'x';
        turn = 'Player2'
        restartH1.innerHTML = `Player o's Turn`
    } else if (turn === 'Player2' && states[7][1] == 'empty'){
        states[7][1] = 'o'
        states[7][2].querySelector('.decision').innerHTML = 'o';
        turn = 'Player1'
        restartH1.innerHTML = `Player x's Turn`    
    }
})

nine.addEventListener('click', () => {
    if (turn === 'Player1' && states[8][1] == 'empty') {
        states[8][1] = 'x'
        states[8][2].querySelector('.decision').innerHTML = 'x';
        turn = 'Player2'
        restartH1.innerHTML = `Player o's Turn`
    } else if (turn === 'Player2' && states[8][1] == 'empty'){
        states[8][1] = 'o'
        states[8][2].querySelector('.decision').innerHTML = 'o';
        turn = 'Player1'
        restartH1.innerHTML = `Player x's Turn`    
    }
})
