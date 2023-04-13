
const gameFrame = document.getElementById("gameframe");

// player setup //
const playerOne = {
    player: 'one',
    marker: 'x',
};
const playerTwo = {
    player: 'two',
    marker: 'o',
};

// board square array //

const boardSquares = [];

// game board setup //
const gameBoard = () => {
    for (i = 0; i < 9; i++) {
        boardSquares.push(i)
    }
    const createSquares = () => boardSquares.forEach(function() {
        let newSquare = document.createElement('div');
        newSquare.className = 'board_square';
        gameFrame.appendChild(newSquare);
    })
    return {
        createSquares
    }
}

// game board display //
const boardDisplay = gameBoard();
boardDisplay.createSquares();

const playGame = () => {
    let allSquares = document.querySelectorAll('.board_square');
    const addSquareFunctions = () => {
        allSquares.forEach(() => {
            addEventListener('click', () => {
                console.log(boardSquares);
            })
        }
        )
    }
    return {
        addSquareFunctions
    }
}

const gameFunctions = playGame();
gameFunctions.addSquareFunctions();





