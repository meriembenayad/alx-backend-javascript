/** Task 5. Advanced types Part 1 */
// interface DirectorInterface
interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

// interface TeacherInterface
interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

// class Director implements DirectorInterface
class Director implements DirectorInterface {
	workFromHome() {
		return `Working from home`;
	}

	getCoffeeBreak() {
		return `Getting a coffee break`;
	}

	workDirectorTasks() {
		return `Getting to director tasks`;
	}
}

// class Teacher implements TeacherInterface
class Teacher implements TeacherInterface {
	workFromHome() {
		return `Cannot work from home`;
	}

	getCoffeeBreak() {
		return `Cannot have a break`;
	}

	workTeacherTasks() {
		return `Getting to work`;
	}
}

// createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
	if (typeof salary === 'number' && salary < 500) {
		return new Teacher();
	} else {
		return new Director();
	}
}

/** Task 6. Creating functions specific to employees */
// function isDirector
function isDirector(employee: Director | Teacher): employee is Director {
	return (employee as Director).workDirectorTasks() !== undefined;
}

// function executeWork
function executeWork(employee: Director | Teacher): string {
	if (isDirector(employee)) {
		return employee.workDirectorTasks();
	} else {
		return employee.workTeacherTasks();
	}
}
