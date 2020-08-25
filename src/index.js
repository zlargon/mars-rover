const scanf = require('scanf');
const marsRover = require('./marsRover');

const [width, height] = scanf('%d %d');
for (;;) {
  const [x, y] = scanf('%d %d');
  if (x === null) break; // EOF

  const direct = scanf('%s');
  const dest = { x, y, direct };
  const moves = scanf('%s').split('');
  marsRover(width, height, dest, moves);
}
