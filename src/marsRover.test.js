const marsRover = require('./marsRover');

jest.spyOn(console, 'log').mockImplementation(jest.fn());

test('Mars Rover', () => {
  const TestCases = [
    [[5, 5, 1, 2, 'N', 'LMLMLMLMM'], '1 3 N'],
    [[5, 5, 3, 3, 'E', 'MMRMMRMRRM'], '5 1 E'],
  ];

  for (const [input, output] of TestCases) {
    console.log.mockClear();
    const [width, height, x, y, direct, moves] = input;
    const dest = { x, y, direct };
    marsRover(width, height, dest, moves.split(''));
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(output);
  }
});
