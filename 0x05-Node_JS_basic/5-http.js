const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      let students = '';
      const consoleLog = console.log;
      console.log = (msg) => { students += students.length > 0 ? `\n${msg}` : `${msg}`; };
      await countStudents(process.argv[2]);
      console.log = consoleLog;
      students = students.trim();
      res.statusCode = 200;
      res.end(`This is the list of our students\n${students}`);
    } catch (error) {
      if (error.message === 'Cannot load the database') {
        res.statusCode = 200;
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
