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
let states = {
    'one': 'empty',
    'two': 'empty',
    'three': 'empty',
    'four': 'empty',
    'five': 'empty',
    'six': 'empty',
    'seven': 'empty',
    'eight': 'empty',
    'nine': 'empty',
}

let turn = 'Player'

const restart = document.getElementById('restart')
restart.addEventListener('click', () => {

})


one.addEventListener('click', () => {
    console.log('Hello world!')
})