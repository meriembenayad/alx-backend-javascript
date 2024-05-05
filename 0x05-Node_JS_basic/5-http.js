const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      let students = '';
      const consoleLog = console.log;
      console.log = (msg) => { students += `\n${msg}`; };
      await countStudents(process.argv[2]);
      console.log = consoleLog;
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(`This is the list of our students${students}`);
    } catch (error) {
      if (error.message === 'Cannot load the database') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('This is the list of our students\nDatabase not available');
      } else {
        res.statusCode = 500;
        res.end(error.message);
      }
    }
  } else {
    res.statusCode = 404;
    res.end('Not found\n');
  }
});

app.listen(1245);

module.exports = app;
