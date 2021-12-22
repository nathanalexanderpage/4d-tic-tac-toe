const readlineSync = require('readline-sync');

const GAME_DIMENSIONS = parseInt(readlineSync.question('How many dimensions are we playing tic-tac-toe in today? '));
const LENGTH_OF_BOARD = 3;

if (GAME_DIMENSIONS > 10) {
    console.log('not today, copper!');
    process.exit();
}

function getAllPossibleMovementDirections(dimensions) {
    const optionsOfDirection = ['=','+',"-"];
    let allDirectionPermutations = [];
    
    function createDirectionPermutations(directionString = ''){
        if (directionString.length === dimensions){
            allDirectionPermutations.push(directionString)
            return 
        } else {
            for(direction in optionsOfDirection){
                const newDirectionString = directionString + optionsOfDirection[direction]
                createDirectionPermutations(newDirectionString)
            }
        }
    }
    
    createDirectionPermutations();
    
    return allDirectionPermutations.slice(1);
}

function generateGameBoard(dimensions){
    const totalNumberOfBoardCells= 3 ** dimensions;

    const gameBoard = new Array(totalNumberOfBoardCells);

    return gameBoard;
}

const allPossibleMovementDirections = getAllPossibleMovementDirections(GAME_DIMENSIONS);
console.log(allPossibleMovementDirections);
const gameBoard = generateGameBoard(GAME_DIMENSIONS)
console.log(gameBoard.length)

const printBoard = () => {
    console.log(gameBoard);
}

const makeMove = (coordinates, value) => {
    let gameBoardIndex= 0;

    while (coordinates.length > 0){
        const dimension = coordinates.length;
        const dimensionCoordinate = coordinates.pop();
        let gameBoardIndexAddend = (LENGTH_OF_BOARD ** (dimension - 1)) * dimensionCoordinate;
        gameBoardIndex += gameBoardIndexAddend;
    }

    gameBoard[gameBoardIndex] = value;
}

const takeMoveInput = () => {
    const coordinateInput = readlineSync.question('May I have your move, sir? ');
    const coordinates = coordinateInput.split(',').map(coordinate => parseInt(coordinate));
    console.log(`You chose: ${coordinateInput}!`);
    return coordinates;
}

const player = ['X','O'];
let gameOngoing = true;
let roundCounter = 0;

printBoard();

while(gameOngoing) {
    const coordinates = takeMoveInput();
    console.log("coordinates:", coordinates);
    const thisRoundsPlayer = player[roundCounter % 2];
    makeMove(coordinates, thisRoundsPlayer)
    
    printBoard();
    
    roundCounter += 1;
    
    // const willTheGameEnd = !board.some((row) => {
    //     return row.includes(null);
    // });
    
    // console.log(willTheGameEnd);
    
    // if (willTheGameEnd) {
    //     gameOngoing = false;
    // }
}

console.log('Game is over!');

function evaluateWinCondition(coordinates) {
    return;
    
    // iterate through directional vectors
    // increment current direction
    // '+=-'
    // note cell contents if cell within board && cell contains current turn's player value
    // const resultsOfDirection = [true];
    // check opposite directional vector
    // '-=-'
    // const resultsOfOppositeDirection =[];
}

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
