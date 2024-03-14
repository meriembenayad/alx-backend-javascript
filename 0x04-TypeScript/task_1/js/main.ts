// Task 1: Teacher Interface
interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	// Possibily to add any attribute to the Object
	[key: string]: any;
}

// Task 2: Interface Directors extends Teacher
interface Directors extends Teacher {
	numberOfReports: number;
}

// Task 3: Interface printTeacherFunction
interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

// Task 3: Printing teachers function
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
	return `${firstName[0]}. ${lastName}`;
}
