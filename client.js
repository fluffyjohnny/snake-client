const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  console.log("Connecting ...");


  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: toe');
    // conn.write('Move: up');
    // setTimeout(() => {
    //   conn.write('Move: up');
    // }, 1000);
  });

  conn.on('data', (message) => {
    console.log('Server says: ', message.toString());
  });
  
  return conn;
};




module.exports = connect;


