// Import required fs module
const fs = require('fs').promises;

// Define the countStudents function
async function countStudents(path) {
  let data;
  try {
    data = await fs.readFile(path, 'utf-8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const lines = data.split('\n');
  const students = lines.filter((line) => line).map((line) => line.split(','));
  const fields = {};

  for (let i = 1; i < students.length; i += 1) {
    const field = students[i][3];
    const firstName = students[i][0];
    if (!fields[field]) {
      fields[field] = [];
    }
    fields[field].push(firstName);
  }

  console.log(`Number of students: ${students.length - 1}\n`);
  for (const field in fields) {
    if (Object.prototype.hasOwnProperty.call(fields, field)) {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    }
  }
}

module.exports = countStudents;
