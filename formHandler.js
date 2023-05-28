// formHandler.js
const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const formData = querystring.parse(body);
      console.log('Received form data:', formData);
      // Здесь вы можете выполнить дополнительные действия с полученными данными, например, сохранить их в базу данных или отправить уведомление по электронной почте
      res.end('Form data received');
    });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
