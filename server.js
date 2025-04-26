const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

console.log('WebSocket server berjalan di ws://localhost:8080');

wss.on('connection', function connection(ws) {
  console.log('Klien baru terhubung.');

  ws.on('message', function incoming(message) {
    console.log('Pesan diterima:', message);
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(`Server menerima: ${message}`);
      }
    });
  });

  ws.send('Selamat datang di server WebSocket!');
});
