const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let students = '';
  const consoleLog = console.log;
  console.log = (msg) => { students += `\n${msg}`; };
  await countStudents(process.argv[2]);
  console.log = consoleLog;
  res.send(`This is the list of our students${students}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
