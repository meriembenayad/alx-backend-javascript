// Import required fs module
const fs = require('fs');

// Define the countStudents function
function countStudents(path) {
  let data;
  try {
    // Attempt to read file synchronously
    data = fs.readFileSync(path, 'utf-8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  // Split the file into lines
  const lines = data.split('\n');

  // filter out empty lines
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

  console.log(`Number of students: ${students.length - 1}`);
  for (const field in fields) {
    if (Object.prototype.hasOwnProperty.call(fields, field)) {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    }
  }
}

// Export the function
module.exports = countStudents;
