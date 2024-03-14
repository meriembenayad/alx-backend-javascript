// Define the Student Interface
interface Student {
	firstName : string;
	lastName : string;
	age : number;
	location : string
}

// Create two students
let studentOne: Student = {
	firstName: 'Mira',
	lastName: 'Ben',
	age: 20,
	location: 'Tangier'
}

let studentTwo: Student = {
	firstName: 'Roky',
	lastName: 'Ben',
	age: 30,
	location: 'Denver'
}

// Create an array named studentsList containing the two students
let studentsList: Student[] = [studentOne, studentTwo];

// Using Vanilla JS, render a table
let table: HTMLTableElement = document.createElement('table');
let tbody: HTMLTableSectionElement = document.createElement('tbody');

studentsList.forEach((student: Student) => {
	let row: HTMLTableRowElement = document.createElement('tr');
	let celOne: HTMLTableCellElement = document.createElement('td');
	let celTwo: HTMLTableCellElement = document.createElement('td');

	celOne.textContent = student.firstName;
	celTwo.textContent = student.location;

	row.appendChild(celOne);
	row.appendChild(celTwo);
	tbody.appendChild(row);
})

table.appendChild(tbody);
document.body.appendChild(table);
