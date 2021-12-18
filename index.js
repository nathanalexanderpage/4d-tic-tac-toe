const readlineSync = require('readline-sync');

const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

// 4D board
const coolestBoard = [
    // 3D board #1
    [
        [
            [1,1,1],
            [1,1,1],
            [1,1,1],
        ],
        [
            [1,1,1],
            [1,1,1],
            [1,1,1],
        ],
        [
            [1,1,1],
            [1,1,1],
            [1,1,1],
        ],
    ],
    // 3D board #2
    [
        [
            [1,1,1],
            [1,1,1],
            [1,1,1],
        ],
        [
            [1,1,1],
            [1,1,1],
            [1,1,1],
        ],
        [
            [1,1,1],
            [1,1,1],
            [1,1,1],
        ],
    ],
    // 3D board #3
    [
        [
            [1,1,1],
            [1,1,1],
            [1,1,1],
        ],
        [
            [1,1,1],
            [1,1,1],
            [1,1,1],
        ],
        [
            [1,1,1],
            [1,1,1],
            [1,1,1],
        ],
    ],
];

const printBoard = () => {
    console.log(board);
}

const makeMove = (coordinate, value) => {
    board[coordinate.x][coordinate.y] = value;
}

const takeMoveInput = () => {
    const coordinates = {};

    const coordinateInput = readlineSync.question('May I have your move, sir? ');

    coordinates.x = parseInt(coordinateInput.split(',')[0]);
    coordinates.y = parseInt(coordinateInput.split(',')[1]);

    console.log(`You chose: ${coordinateInput}!`);

    return coordinates;
}
const player =[9,11];
let gameOngoing = true;
let roundCounter = 0;

printBoard();

while(gameOngoing) {
    const coordinates = takeMoveInput();
    console.log("coordinates:", coordinates);
    const thisRoundsPlayer = player[roundCounter % 2];
    makeMove(coordinates,thisRoundsPlayer)

    printBoard();

    roundCounter += 1;


    const willTheGameEnd = !board.some((row) => {
        return row.includes(null);
    });

    console.log(willTheGameEnd);

    if (willTheGameEnd) {
        gameOngoing = false;
    }
}

console.log('Game is over!');

evaluateWinCondition(coordinates){
    for 
}