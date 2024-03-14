// Teacher Interface
interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	// Possibily to add any attribute to the Object
	[key: string]: any;
}

// Interface Directors extends Teacher
interface Directors extends Teacher {
	numberOfReports: number;
}
