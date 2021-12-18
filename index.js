const readlineSync = require('readline-sync');

const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
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



printBoard();
const coordinates = takeMoveInput();
console.log("coordinates:", coordinates);
makeMove(coordinates, 'x');
printBoard();
