// eslint-disable-next-line no-unused-vars
let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log('Exited the game!');
    process.exit();
  }
};


const setupInput = function(conn) {
  const stdin = process.stdin;
  connection = conn;

  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  stdin.on('data', (key) => {
    if (key === 'w') {
      conn.write("Move: up");
    }
    if (key === 'a') {
      conn.write("Move: left");
    }
    if (key === 's') {
      conn.write("Move: down");
    }
    if (key === 'd') {
      conn.write("Move: right");
    }
    if (key === 'z') {
      conn.write("Say: MY APPLES");
    }
    if (key === 'x') {
      conn.write("Say: STOP TAKING MY APPLES");
    }
    if (key === 'c') {
      conn.write("Say: YOU'RE SURROUNDED");
    }
    if (key === 'v') {
      conn.write("Say: CHICKEN DINNER");
    }
  });
  return stdin;
};

module.exports = setupInput;