
// Solution 1

const sqr = document.querySelectorAll(".sqr")
const message = document.getElementById("message")

    function play(e) {
        if (message.innerText === "It's X's turn"){
        if (e.target.id === "0"){
                sqr[0].innerText = 'X'
                if (sqr[0].innerText ==='X' && sqr[1].innerText === 'X' && sqr[2].innerText === 'X'){
                    message.innerText = "X won!"
                return
            } else if (sqr[3].innerText ==='X' && sqr[4].innerText === 'X' && sqr[5].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[6].innerText ==='X' && sqr[7].innerText === 'X' && sqr[8].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[0].innerText ==='X' && sqr[3].innerText === 'X' && sqr[6].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[1].innerText ==='X' && sqr[4].innerText === 'X' && sqr[7].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[2].innerText ==='X' && sqr[5].innerText === 'X' && sqr[8].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[0].innerText ==='X' && sqr[4].innerText === 'X' && sqr[8].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[2].innerText ==='X' && sqr[4].innerText === 'X' && sqr[6].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else {            
            message.innerText = "It's O's turn"
            }
        }
        if (e.target.id === "1"){
            sqr[1].innerText = 'X'
            if (sqr[0].innerText ==='X' && sqr[1].innerText === 'X' && sqr[2].innerText === 'X'){
                message.innerText = "X won!"
                return
            } else if (sqr[3].innerText ==='X' && sqr[4].innerText === 'X' && sqr[5].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[6].innerText ==='X' && sqr[7].innerText === 'X' && sqr[8].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[0].innerText ==='X' && sqr[3].innerText === 'X' && sqr[6].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[1].innerText ==='X' && sqr[4].innerText === 'X' && sqr[7].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[2].innerText ==='X' && sqr[5].innerText === 'X' && sqr[8].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[0].innerText ==='X' && sqr[4].innerText === 'X' && sqr[8].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[2].innerText ==='X' && sqr[4].innerText === 'X' && sqr[6].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else {            
            message.innerText = "It's O's turn"
            }
        }
        if (e.target.id === "2"){
            sqr[2].innerText = 'X'
            if (sqr[0].innerText ==='X' && sqr[1].innerText === 'X' && sqr[2].innerText === 'X'){
                message.innerText = "X won!"
                return
            } else if (sqr[3].innerText ==='X' && sqr[4].innerText === 'X' && sqr[5].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[6].innerText ==='X' && sqr[7].innerText === 'X' && sqr[8].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[0].innerText ==='X' && sqr[3].innerText === 'X' && sqr[6].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[1].innerText ==='X' && sqr[4].innerText === 'X' && sqr[7].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[2].innerText ==='X' && sqr[5].innerText === 'X' && sqr[8].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[0].innerText ==='X' && sqr[4].innerText === 'X' && sqr[8].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[2].innerText ==='X' && sqr[4].innerText === 'X' && sqr[6].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else {            
            message.innerText = "It's O's turn"
            }
        }
        if (e.target.id === "3"){
            sqr[3].innerText = 'X'
            if (sqr[0].innerText ==='X' && sqr[1].innerText === 'X' && sqr[2].innerText === 'X'){
                message.innerText = "X won!"
                return
            } else if (sqr[3].innerText ==='X' && sqr[4].innerText === 'X' && sqr[5].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[6].innerText ==='X' && sqr[7].innerText === 'X' && sqr[8].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[0].innerText ==='X' && sqr[3].innerText === 'X' && sqr[6].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[1].innerText ==='X' && sqr[4].innerText === 'X' && sqr[7].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[2].innerText ==='X' && sqr[5].innerText === 'X' && sqr[8].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[0].innerText ==='X' && sqr[4].innerText === 'X' && sqr[8].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[2].innerText ==='X' && sqr[4].innerText === 'X' && sqr[6].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else {            
            message.innerText = "It's O's turn"
            }
        }
        if (e.target.id === "4"){
            sqr[4].innerText = 'X'
            if (sqr[0].innerText ==='X' && sqr[1].innerText === 'X' && sqr[2].innerText === 'X'){
                message.innerText = "X won!"
                return
            } else if (sqr[3].innerText ==='X' && sqr[4].innerText === 'X' && sqr[5].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[6].innerText ==='X' && sqr[7].innerText === 'X' && sqr[8].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[0].innerText ==='X' && sqr[3].innerText === 'X' && sqr[6].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[1].innerText ==='X' && sqr[4].innerText === 'X' && sqr[7].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[2].innerText ==='X' && sqr[5].innerText === 'X' && sqr[8].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[0].innerText ==='X' && sqr[4].innerText === 'X' && sqr[8].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[2].innerText ==='X' && sqr[4].innerText === 'X' && sqr[6].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else {            
            message.innerText = "It's O's turn"
            }
        }
        if (e.target.id === "5"){
            sqr[5].innerText = 'X'
            if (sqr[0].innerText ==='X' && sqr[1].innerText === 'X' && sqr[2].innerText === 'X'){
                message.innerText = "X won!"
                return
            } else if (sqr[3].innerText ==='X' && sqr[4].innerText === 'X' && sqr[5].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[6].innerText ==='X' && sqr[7].innerText === 'X' && sqr[8].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[0].innerText ==='X' && sqr[3].innerText === 'X' && sqr[6].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[1].innerText ==='X' && sqr[4].innerText === 'X' && sqr[7].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[2].innerText ==='X' && sqr[5].innerText === 'X' && sqr[8].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[0].innerText ==='X' && sqr[4].innerText === 'X' && sqr[8].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[2].innerText ==='X' && sqr[4].innerText === 'X' && sqr[6].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else {            
            message.innerText = "It's O's turn"
            }
        }
        if (e.target.id === "6"){
            sqr[6].innerText = 'X'
            if (sqr[0].innerText ==='X' && sqr[1].innerText === 'X' && sqr[2].innerText === 'X'){
                message.innerText = "X won!"
                return
            } else if (sqr[3].innerText ==='X' && sqr[4].innerText === 'X' && sqr[5].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[6].innerText ==='X' && sqr[7].innerText === 'X' && sqr[8].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[0].innerText ==='X' && sqr[3].innerText === 'X' && sqr[6].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[1].innerText ==='X' && sqr[4].innerText === 'X' && sqr[7].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[2].innerText ==='X' && sqr[5].innerText === 'X' && sqr[8].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[0].innerText ==='X' && sqr[4].innerText === 'X' && sqr[8].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[2].innerText ==='X' && sqr[4].innerText === 'X' && sqr[6].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else {            
            message.innerText = "It's O's turn"
            }
        }
        if (e.target.id === "7"){
            sqr[7].innerText = 'X'
            if (sqr[0].innerText ==='X' && sqr[1].innerText === 'X' && sqr[2].innerText === 'X'){
                message.innerText = "X won!"
                return
            } else if (sqr[3].innerText ==='X' && sqr[4].innerText === 'X' && sqr[5].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[6].innerText ==='X' && sqr[7].innerText === 'X' && sqr[8].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[0].innerText ==='X' && sqr[3].innerText === 'X' && sqr[6].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[1].innerText ==='X' && sqr[4].innerText === 'X' && sqr[7].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[2].innerText ==='X' && sqr[5].innerText === 'X' && sqr[8].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[0].innerText ==='X' && sqr[4].innerText === 'X' && sqr[8].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[2].innerText ==='X' && sqr[4].innerText === 'X' && sqr[6].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else {            
            message.innerText = "It's O's turn"
            }
        }
        if (e.target.id === "8"){
            sqr[8].innerText = 'X'
            if (sqr[0].innerText ==='X' && sqr[1].innerText === 'X' && sqr[2].innerText === 'X'){
                message.innerText = "X won!"
                return
            } else if (sqr[3].innerText ==='X' && sqr[4].innerText === 'X' && sqr[5].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[6].innerText ==='X' && sqr[7].innerText === 'X' && sqr[8].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[0].innerText ==='X' && sqr[3].innerText === 'X' && sqr[6].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[1].innerText ==='X' && sqr[4].innerText === 'X' && sqr[7].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[2].innerText ==='X' && sqr[5].innerText === 'X' && sqr[8].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[0].innerText ==='X' && sqr[4].innerText === 'X' && sqr[8].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else if (sqr[2].innerText ==='X' && sqr[4].innerText === 'X' && sqr[6].innerText === 'X') {
                message.innerText = "X won!"
                return
            } else {            
            message.innerText = "It's O's turn"
            }
        }
    } else if (message.innerText === "It's O's turn") {
        if (e.target.id !=="" && e.target.id === "0"){
            sqr[0].innerText = 'O'
            if (sqr[0].innerText ==='O' && sqr[1].innerText === 'O' && sqr[2].innerText === 'O'){
                message.innerText = "O won!"
                return
            } else if (sqr[3].innerText ==='O' && sqr[4].innerText === 'O' && sqr[5].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[6].innerText ==='O' && sqr[7].innerText === 'O' && sqr[8].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[0].innerText ==='O' && sqr[3].innerText === 'O' && sqr[6].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[1].innerText ==='O' && sqr[4].innerText === 'O' && sqr[7].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[2].innerText ==='O' && sqr[5].innerText === 'O' && sqr[8].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[0].innerText ==='O' && sqr[4].innerText === 'O' && sqr[8].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[2].innerText ==='O' && sqr[4].innerText === 'O' && sqr[6].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else {            
            message.innerText = "It's X's turn"
            }
        }
        if (e.target.id !=="" && e.target.id === "1"){
            sqr[1].innerText = 'O'
            if (sqr[0].innerText ==='O' && sqr[1].innerText === 'O' && sqr[2].innerText === 'O'){
                message.innerText = "O won!"
                return
            } else if (sqr[3].innerText ==='O' && sqr[4].innerText === 'O' && sqr[5].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[6].innerText ==='O' && sqr[7].innerText === 'O' && sqr[8].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[0].innerText ==='O' && sqr[3].innerText === 'O' && sqr[6].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[1].innerText ==='O' && sqr[4].innerText === 'O' && sqr[7].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[2].innerText ==='O' && sqr[5].innerText === 'O' && sqr[8].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[0].innerText ==='O' && sqr[4].innerText === 'O' && sqr[8].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[2].innerText ==='O' && sqr[4].innerText === 'O' && sqr[6].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else {            
            message.innerText = "It's X's turn"
            }
        }
        if (e.target.id !=="" && e.target.id === "2"){
            sqr[2].innerText = 'O'
            if (sqr[0].innerText ==='O' && sqr[1].innerText === 'O' && sqr[2].innerText === 'O'){
                message.innerText = "O won!"
                return
            } else if (sqr[3].innerText ==='O' && sqr[4].innerText === 'O' && sqr[5].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[6].innerText ==='O' && sqr[7].innerText === 'O' && sqr[8].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[0].innerText ==='O' && sqr[3].innerText === 'O' && sqr[6].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[1].innerText ==='O' && sqr[4].innerText === 'O' && sqr[7].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[2].innerText ==='O' && sqr[5].innerText === 'O' && sqr[8].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[0].innerText ==='O' && sqr[4].innerText === 'O' && sqr[8].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[2].innerText ==='O' && sqr[4].innerText === 'O' && sqr[6].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else {            
            message.innerText = "It's X's turn"
            }
        }
        if (e.target.id !=="" && e.target.id === "3"){
            sqr[3].innerText = 'O'
            if (sqr[0].innerText ==='O' && sqr[1].innerText === 'O' && sqr[2].innerText === 'O'){
                message.innerText = "O won!"
                return
            } else if (sqr[3].innerText ==='O' && sqr[4].innerText === 'O' && sqr[5].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[6].innerText ==='O' && sqr[7].innerText === 'O' && sqr[8].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[0].innerText ==='O' && sqr[3].innerText === 'O' && sqr[6].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[1].innerText ==='O' && sqr[4].innerText === 'O' && sqr[7].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[2].innerText ==='O' && sqr[5].innerText === 'O' && sqr[8].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[0].innerText ==='O' && sqr[4].innerText === 'O' && sqr[8].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[2].innerText ==='O' && sqr[4].innerText === 'O' && sqr[6].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else {            
            message.innerText = "It's X's turn"
            }
        }
        if (e.target.id !=="" && e.target.id === "4"){
            sqr[4].innerText = 'O'
            if (sqr[0].innerText ==='O' && sqr[1].innerText === 'O' && sqr[2].innerText === 'O'){
                message.innerText = "O won!"
                return
            } else if (sqr[3].innerText ==='O' && sqr[4].innerText === 'O' && sqr[5].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[6].innerText ==='O' && sqr[7].innerText === 'O' && sqr[8].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[0].innerText ==='O' && sqr[3].innerText === 'O' && sqr[6].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[1].innerText ==='O' && sqr[4].innerText === 'O' && sqr[7].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[2].innerText ==='O' && sqr[5].innerText === 'O' && sqr[8].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[0].innerText ==='O' && sqr[4].innerText === 'O' && sqr[8].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[2].innerText ==='O' && sqr[4].innerText === 'O' && sqr[6].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else {            
            message.innerText = "It's X's turn"
            }
        }
        if (e.target.id !=="" && e.target.id === "5"){
            sqr[5].innerText = 'O'
            if (sqr[0].innerText ==='O' && sqr[1].innerText === 'O' && sqr[2].innerText === 'O'){
                message.innerText = "O won!"
                return
            } else if (sqr[3].innerText ==='O' && sqr[4].innerText === 'O' && sqr[5].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[6].innerText ==='O' && sqr[7].innerText === 'O' && sqr[8].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[0].innerText ==='O' && sqr[3].innerText === 'O' && sqr[6].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[1].innerText ==='O' && sqr[4].innerText === 'O' && sqr[7].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[2].innerText ==='O' && sqr[5].innerText === 'O' && sqr[8].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[0].innerText ==='O' && sqr[4].innerText === 'O' && sqr[8].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[2].innerText ==='O' && sqr[4].innerText === 'O' && sqr[6].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else {            
            message.innerText = "It's X's turn"
            }
        }
        if (e.target.id !=="" && e.target.id === "6"){
            sqr[6].innerText = 'O'
            if (sqr[0].innerText ==='O' && sqr[1].innerText === 'O' && sqr[2].innerText === 'O'){
                message.innerText = "O won!"
                return
            } else if (sqr[3].innerText ==='O' && sqr[4].innerText === 'O' && sqr[5].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[6].innerText ==='O' && sqr[7].innerText === 'O' && sqr[8].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[0].innerText ==='O' && sqr[3].innerText === 'O' && sqr[6].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[1].innerText ==='O' && sqr[4].innerText === 'O' && sqr[7].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[2].innerText ==='O' && sqr[5].innerText === 'O' && sqr[8].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[0].innerText ==='O' && sqr[4].innerText === 'O' && sqr[8].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[2].innerText ==='O' && sqr[4].innerText === 'O' && sqr[6].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else {            
            message.innerText = "It's X's turn"
            }
        }
        if (e.target.id !=="" && e.target.id === "7"){
            sqr[7].innerText = 'O'
            if (sqr[0].innerText ==='O' && sqr[1].innerText === 'O' && sqr[2].innerText === 'O'){
                message.innerText = "O won!"
                return
            } else if (sqr[3].innerText ==='O' && sqr[4].innerText === 'O' && sqr[5].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[6].innerText ==='O' && sqr[7].innerText === 'O' && sqr[8].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[0].innerText ==='O' && sqr[3].innerText === 'O' && sqr[6].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[1].innerText ==='O' && sqr[4].innerText === 'O' && sqr[7].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[2].innerText ==='O' && sqr[5].innerText === 'O' && sqr[8].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[0].innerText ==='O' && sqr[4].innerText === 'O' && sqr[8].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[2].innerText ==='O' && sqr[4].innerText === 'O' && sqr[6].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else {            
            message.innerText = "It's X's turn"
            }
        }
        if (e.target.id !=="" && e.target.id === "8"){
            sqr[8].innerText = 'O'
            if (sqr[0].innerText ==='O' && sqr[1].innerText === 'O' && sqr[2].innerText === 'O'){
                message.innerText = "O won!"
                return
            } else if (sqr[3].innerText ==='O' && sqr[4].innerText === 'O' && sqr[5].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[6].innerText ==='O' && sqr[7].innerText === 'O' && sqr[8].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[0].innerText ==='O' && sqr[3].innerText === 'O' && sqr[6].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[1].innerText ==='O' && sqr[4].innerText === 'O' && sqr[7].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[2].innerText ==='O' && sqr[5].innerText === 'O' && sqr[8].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[0].innerText ==='O' && sqr[4].innerText === 'O' && sqr[8].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else if (sqr[2].innerText ==='O' && sqr[4].innerText === 'O' && sqr[6].innerText === 'O') {
                message.innerText = "O won!"
                return
            } else {            
            message.innerText = "It's X's turn"
            }
        }
  }

}

function reset(){
    document.getElementById("0").innerText = ""
    document.getElementById("1").innerText = ""
    document.getElementById("2").innerText = ""
    document.getElementById("3").innerText = ""
    document.getElementById("4").innerText = ""
    document.getElementById("5").innerText = ""
    document.getElementById("6").innerText = ""
    document.getElementById("7").innerText = ""
    document.getElementById("8").innerText = ""
    message.innerText = "It's X's turn"
}

document.getElementById("0").addEventListener("click", play)
document.getElementById("1").addEventListener("click", play)
document.getElementById("2").addEventListener("click", play)
document.getElementById("3").addEventListener("click", play)
document.getElementById("4").addEventListener("click", play)
document.getElementById("5").addEventListener("click", play)
document.getElementById("6").addEventListener("click", play)
document.getElementById("7").addEventListener("click", play)
document.getElementById("8").addEventListener("click", play)

document.getElementById("reset").addEventListener("click", reset)
