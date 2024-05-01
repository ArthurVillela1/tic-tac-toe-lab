
// Solution 2

let squares = document.querySelectorAll(".sqr")
let message = document.getElementById("message")
let turn = 'X'
let winner = false
let tie = false

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]


let board = ['','','',
             '','','',
             '','','',]

function init(){
    render();
}

function render(){
    updateBoard();
    updateMessage();
}

function updateBoard(){
    board.forEach((cell, index)=>
    squares[index].innerText = cell
)};

function updateMessage(){
    if (winner === false && tie === false){
        // turn = 
    } else if (winner === false && tie === true){
        message.innerText === "It's a tie!"
    } else {
        // message.innerText ===
    }
}

squares.forEach((sqr) => {
    sqr.addEventListener('click', updateBoard);
});

