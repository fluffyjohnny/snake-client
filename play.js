const connect = require('./client');

const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log('Exited the game!');
    process.exit();
  }
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

connect();
setupInput();