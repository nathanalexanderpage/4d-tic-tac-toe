// import  readlineSync.question from 'readline-sync';
// for in does not work the same way it does in python
// The following example show this:

// const array = ['marco','polo','travler'];
// for ( thing in array) {
//     console.log(thing);
// }

const readlineSync = require('readline-sync');
const GAME_DIMENSIONS = parseInt(readlineSync.question('How many dimensions are we playing tic-tac-toe in today? '));
const LENGTH_OF_BOARD = 3;
const MOVEMENT_PER_PLANE = {'=': 0, '+': 1, '-': -1};

if (GAME_DIMENSIONS > 10) {
    console.log('not today, copper!');
    process.exit();
}

function getAllPossibleMovementDirections(dimensions) {
    const optionsOfDirection = Object.keys(MOVEMENT_PER_PLANE);
    let allDirectionPermutations = [];
    
    function createDirectionPermutations(directionString = '') {
        if (directionString.length === dimensions) {
            allDirectionPermutations.push(directionString);
            return ;
        } else {
            for (directionIndex in optionsOfDirection) {
                const newDirectionString = directionString + optionsOfDirection[directionIndex];
                createDirectionPermutations(newDirectionString);
            }
        }
    }
    
    createDirectionPermutations();
    
    return allDirectionPermutations.slice(1);
}

function generateGameBoard(dimensions) {
    const totalNumberOfBoardCells = LENGTH_OF_BOARD ** dimensions;

    const gameBoard = new Array(totalNumberOfBoardCells);

    return gameBoard;
}

const allPossibleMovementDirections = getAllPossibleMovementDirections(GAME_DIMENSIONS);
console.log(allPossibleMovementDirections);
const gameBoard = generateGameBoard(GAME_DIMENSIONS);
console.log(gameBoard.length);

const printBoard = () => {
    console.log(gameBoard);
}

const getGameBoardIndex = (coordinates) => {
    let gameBoardIndex = 0;

    while (coordinates.length > 0) {
        const dimension = coordinates.length;
        const dimensionCoordinate = coordinates.pop();
        let gameBoardIndexAddend = (LENGTH_OF_BOARD ** (dimension - 1)) * dimensionCoordinate;
        gameBoardIndex += gameBoardIndexAddend;
    }

    return gameBoardIndex;
}

const makeMove = (coordinates, value) => {
    gameBoard[getGameBoardIndex(coordinates)] = value;
}

const takeMoveInput = () => {
    const coordinateInput = readlineSync.question('May I have your move, sir? ');
    const coordinates = coordinateInput.split(',').map(coordinate => parseInt(coordinate));
    console.log(`You chose: ${coordinateInput}!`);
    return coordinates;
}

const getThisRoundsPlayer = () => {
    const thisRoundsPlayer = player[roundCounter % 2];
    return thisRoundsPlayer;
}

const player = ['X','O'];
let gameOngoing = true;
let roundCounter = 0;

printBoard();


const isGameBoardFull = () =>{
    return roundCounter === gameBoard.length;
}

const incrementCoordinatesInDirection = (directionIndex,coordinates,isOpposite) => {
    const coordinatesToCheck = [];
    for (let i = 0; i < GAME_DIMENSIONS - 1; i++) {
        const indivdualDirection = MOVEMENT_PER_PLANE[allPossibleMovementDirections[directionIndex][i]];
        const newCoordinate = isOpposite ? coordinates[i] - indivdualDirection : coordinates[i] + indivdualDirection;
        coordinatesToCheck.push(newCoordinate);
    }
    return coordinatesToCheck;
}

const evaluateWinCondition = (coordinates) => {
    for (directionIndex in allPossibleMovementDirections) {
        
        let playersValueInARow = 0;

        let continueIncrementing = true;
        let coordinatesToCheck = coordinates;

        while (continueIncrementing) {
            coordinatesToCheck = incrementCoordinatesInDirection(directionIndex,coordinatesToCheck,false);
            
            if(gameBoard[getGameBoardIndex(coordinatesToCheck)] !== getThisRoundsPlayer()) {
                continueIncrementing = false;
            } else {
                playersValueInARow += 1;
            }
        }
        
        continueIncrementing = true;
        coordinatesToCheck = coordinates;

        while (continueIncrementing) {
            coordinatesToCheck = incrementCoordinatesInDirection(directionIndex,coordinatesToCheck,true);
            
            if(gameBoard[getGameBoardIndex(coordinatesToCheck)] !== getThisRoundsPlayer()) {
                continueIncrementing = false;
            } else {
                playersValueInARow += 1;
            }
        }

        console.log(playersValueInARow);

        if (playersValueInARow ===LENGTH_OF_BOARD - 1) {
            return true;
        }
        
    }
    
    return false;
    
    
    // iterate through directional vectors
    // check if that direction has been applied
    // decode directions 
    // increment current coordinates by direction
    // '+=-'
    // note cell contents if cell within board && cell contains current turn's player value
    // if players value not found skip current iteration
    // icrement instance counter if cell contains current turn's player value
    // repeat for LENGTH_OF_BOARD - 1
    // const resultsOfDirection = [true];
    // switch to inverse direction
    // check incerse directional vector 
    // store inverse direction as key
    // '-=-'
    // add instance counter from direction and inverser direction + 1(given for coordinates)
    // if equal to LENGTH_OF_BOARD return true
    //
    // const resultsOfOppositeDirection =[];
}

while (gameOngoing) {
    roundCounter += 1;
    const coordinates = takeMoveInput();
    console.log("coordinates:", coordinates);
    const thisRoundsPlayer = getThisRoundsPlayer();
    makeMove(coordinates, thisRoundsPlayer);
    
    printBoard();
    const testEvaluateWin = evaluateWinCondition(coordinates);

    if (testEvaluateWin) {
        console.log("wins");
        gameOngoing = false;
    }

    const testBoardFull = isGameBoardFull();
    if (testBoardFull) {
        console.log("draws");
        gameOngoing = false;
    }
    
    
    // const willTheGameEnd = !board.some((row) => {
    //     return row.includes(null);
    // });
    
    // console.log(willTheGameEnd);
    
    // if (willTheGameEnd) {
    //     gameOngoing = false;
    // }
}
    
console.log('Game is over!');

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
