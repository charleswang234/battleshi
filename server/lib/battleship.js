
const gridWidth = 10;
const boardSize = gridWidth * gridWidth;



const playerVisibleBoard = [
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

const computerVisibleBoard = [
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

const computerActualBoard = [
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];


const playerShips = {carrier: {horizontal: true,
                              length: 5,
                              coords: false,
                              hit: [0, 0, 0, 0, 0]},
                    battleship: {horizontal: true,
                              length: 4,
                              coords: false,
                              hit: [0, 0, 0, 0, 0]},
                    cruiser: {horizontal: true,
                              length: 3,
                              coords: false,
                              hit: [0, 0, 0, 0, 0]},
                    submarine: {horizontal: true,
                              length: 3,
                              coords: false,
                              hit: [0, 0, 0, 0, 0]},
                    destroyer: {horizontal: true,
                              length: 2,
                              coords: false,
                              hit: [0, 0, 0, 0, 0]}};

const computerShips = {carrier: {horizontal: true,
                              length: 5,
                              coords: false,
                              hit: [0, 0, 0, 0, 0]},
                    battleship: {horizontal: true,
                              length: 4,
                              coords: false,
                              hit: [0, 0, 0, 0, 0]},
                    cruiser: {horizontal: true,
                              length: 3,
                              coords: false,
                              hit: [0, 0, 0, 0, 0]},
                    submarine: {horizontal: true,
                              length: 3,
                              coords: false,
                              hit: [0, 0, 0, 0, 0]},
                    destroyer: {horizontal: true,
                              length: 2,
                              coords: false,
                              hit: [0, 0, 0, 0, 0]}};

// all ships
const carrier = {horizontal: true, length: 5};
const battleship = {horizontal: true, length: 4};
const cruiser = {horizontal: true, length: 3};
const submarine = {horizontal: true, length: 3};
const destroyer = {horizontal: true, length: 2};


// **********************************************************************************


// returns a random integer from 0 to max (inclusive for 0 and exclusive for max)
function generateRandomInteger(max) {
  return Math.floor(Math.random() * Math.floor(max));
}



// ruturns the row index of the given board coordinate
function rowCoord(boardCoord) {
  return Math.floor(boardCoord / gridWidth);
}

// returns the column index of the given board coordinate
function columnCoord(boardCoord){
  return boardCoord - rowCoord(boardCoord) * gridWidth;
}


// adds the given type of ship to board using the coordinate boardCoord
// returns true if added sucessfully and returns false if failed
function addShip (ship, boardCoord, board) {

}


// returns a
function constructComputerBoard(board) {
  const boardCoord = generateRandomInteger(boardSize);
  const columnCoordinate = columnCoord(boardCoord);
  const rowCoordinate = rowCoord(boardCoord);
  board[rowCoordinate][columnCoordinate] = 1;
}

constructComputerBoard(computerActualBoard);
console.log(computerActualBoard);


