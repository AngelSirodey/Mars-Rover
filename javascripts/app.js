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

// Initial status
console.log('Face direction: ' + rover.faceDirection)
console.log('Position: ' + rover.position)

//Functions to Move Rover
function orders(order) {
  switch (order) {
    case 'f':
      moveForward()
      break;
    case 'r':
      turnRight()
      break;
    case 'l':
      turnLeft()
      break;
    case 'b':
      moveBackward()
      break;
  }
  console.log('Face direction: ' + rover.faceDirection)
  console.log('Position: ' + rover.position)
  console.log(rover.travelLog)
}

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
  if (rover.position.toString() === '2,4' ||
    rover.position.toString() === '3,5' ||
    rover.position.toString() === '7,2') {
    alert('your rover have been crashed')
    location.reload()
  }
  if (rover.position[0] === -1) {
    rover.position[0] = 9
  } else if (rover.position[1] === -1) {
    rover.position[1] = 9
  } else if (rover.position[0] === 10) {
    rover.position[0] = 0
  } else if (rover.position[1] === 10) {
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
  if (rover.position.toString() === '2,4' ||
    rover.position.toString() === '3,5' ||
    rover.position.toString() === '7,2') {
    alert('your rover have been crashed')
    location.reload()
  }
  if (rover.position[0] === -1) {
    rover.position[0] = 9
  } else if (rover.position[1] === -1) {
    rover.position[1] = 9
  } else if (rover.position[0] === 10) {
    rover.position[0] = 0
  } else if (rover.position[1] === 10) {
    rover.position[1] = 0
  }
  (rover.travelLog.push(rover.position.concat()))
}
