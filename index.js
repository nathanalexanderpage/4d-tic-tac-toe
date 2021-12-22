const readlineSync = require('readline-sync');

const gameDimensions = 3;

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

const allPossibleMovementDirections = getAllPossibleMovementDirections(gameDimensions);
console.log(allPossibleMovementDirections);

const printBoard = () => {
    console.log('Print board here');
}

const makeMove = (coordinate, value) => {
    board[coordinate.x][coordinate.y] = value;
}

const takeMoveInput = () => {
    const coordinates = {};
    
    const coordinateInput = readlineSync.question('May I have your move, sir? ');
    
    // TODO: make dynamic per dimension
    coordinates.x = parseInt(coordinateInput.split(',')[0]);
    coordinates.y = parseInt(coordinateInput.split(',')[1]);
    
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
    
    
    const willTheGameEnd = !board.some((row) => {
        return row.includes(null);
    });
    
    console.log(willTheGameEnd);
    
    if (willTheGameEnd) {
        gameOngoing = false;
    }
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
