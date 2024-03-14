// Create two students
var studentOne = {
    firstName: 'Mira',
    lastName: 'Ben',
    age: 20,
    location: 'Tangier'
};
var studentTwo = {
    firstName: 'Roky',
    lastName: 'Ben',
    age: 30,
    location: 'Denver'
};
// Create an array named studentsList containing the two students
var studentsList = [studentOne, studentTwo];
// Using Vanilla JS, render a table
var table = document.createElement('table');
var tbody = document.createElement('tbody');
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var celOne = document.createElement('td');
    var celTwo = document.createElement('td');
    celOne.textContent = student.firstName;
    celTwo.textContent = student.location;
    row.appendChild(celOne);
    row.appendChild(celTwo);
    tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
