console.log('javascript loaded');

// Rover Object Goes Here
var rover = {
  faceDirection: 'N',
  position: [2, 2],
  travelLog: []
}

// Mars Map Goes Here
var marsMap = [
  ['o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'x', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o']
]


//Functions to Move Rover
function turnLeft() {

  switch (rover.faceDirection) {
    case 'N':
      rover.faceDirection = 'W';
      break;
    case 'W':
      rover.faceDirection = 'S';
      break;
    case 'S':
      rover.faceDirection = 'E';
      break;
    case 'E':
      rover.faceDirection = 'N';
      break;
    }
}

function turnRight() {

  switch (rover.faceDirection) {
    case 'N':
      rover.faceDirection = 'E';
      break;
    case 'E':
      rover.faceDirection = 'S';
      break;
    case 'S':
      rover.faceDirection = 'W';
      break;
    case 'W':
      rover.faceDirection = 'N';
      break;
  }
}

function moveBackward() {

  switch (rover.faceDirection) {
    case 'N':
      rover.position[0]++;
      break;
    case 'E':
      rover.position[1]--;
      break;
    case 'S':
      rover.position[0]--;
      break;
    case 'W':
      rover.position[1]++;
      break;
  }
  if (rover.position[0] === -1) {
    rover.position[0] = 9
  }
  else if (rover.position[1] === -1) {
    rover.position[1] = 9
  }
  else if (rover.position[0] === 10) {
    rover.position[0] = 0
  }
  else if (rover.position[1] === 10) {
    rover.position[1] = 0
  }
  rover.travelLog.push(rover.position.concat())
}

function moveForward() {

  switch (rover.faceDirection) {
    case 'N':
      rover.position[0]--;
      break;
    case 'E':
      rover.position[1]++;
      break;
    case 'S':
      rover.position[0]++;
      break;
    case 'W':
      rover.position[1]--;
      break;
  }
  if (rover.position[0] === -1) {
    rover.position[0] = 9
  }
  else if (rover.position[1] === -1) {
    rover.position[1] = 9
  }
  else if (rover.position[0] === 10) {
    rover.position[0] = 0
  }
  else if (rover.position[1] === 10) {
    rover.position[1] = 0
  }
  rover.travelLog.push(rover.position.concat())
}



function orders() {

  var move = 'rffrfflfrff'
  for (i = 0; i <= move.length; i++) {
    var order = move[i];
    if (order === 'f') {
      moveForward()
      console.log(rover.position)
    }
    else if (order === 'r') {
      turnRight()
      console.log(rover.faceDirection)
    }
    else if (order === 'l') {
      turnLeft()
      console.log(rover.faceDirection)
    }
    else if (order === 'b') {
      moveBackward()
      console.log(rover.position)
    }
  }
  console.log(rover.travelLog)
}

orders()
