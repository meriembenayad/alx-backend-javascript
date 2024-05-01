// Import required fs module
const fs = require('fs');

// Define the countStudents function
function countStudents(path) {
  try {
    // Attempt to read file synchronously
    const data = fs.readFileSync(path, 'utf-8');

    // Split the file into lines
    const lines = data.split('\n');

    // filter out empty lines
    const emptyLine = lines.filter(line => line);

    // count number of students
    const numberOfStudents = emptyLine.length;
    console.log(`Number of students: ${numberOfStudents}`);

    // Dictionnary to store each field and corresponding students
    const fieldDict = {};

    for (let i = 1; i < emptyLine.length; i++) {
      const student = emptyLine[i].split(',');
      const field = student[3]
      const firstName = student[0];

      if (!fieldDict[field]) {
        fieldDict[field] = [];
      }

      fieldDict[field].push(firstName);
    }

    // Log the number of students on each field and the list of the fist names
    for (const field in fieldDict) {
      console.log(`Number of students in ${field}: ${fieldDict[field].length}. List: ${fieldDict[field].join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }

}

// Export the function
module.exports = countStudents;
