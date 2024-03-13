## 0x04 - TypeScript

![JavaScript vs. TypeScript](js_vs_ts.jpeg)

### Resources

**Read or watch**:

- [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html "TypeScript in 5 minutes")
- [TypeScript documentation](https://www.typescriptlang.org/docs/handbook/basic-types.html "TypeScript documentation")

### Configuration Files

Please use these files for the following tasks

#### `package.json`

```sh

{
  "name": "typescript_dependencies",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start-dev": "webpack-dev-server --open",
    "build": "webpack",
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/plugin-proposal-export-default-from": "^7.5.2",
    "@babel/preset-typescript": "^7.7.2",
    "@types/jest": "^24.0.23",
    "@typescript-eslint/eslint-plugin": "^2.4.0",
    "@typescript-eslint/parser": "^2.4.0",
    "clean-webpack-plugin": "^3.0.0",
    "fork-ts-checker-webpack-plugin": "^1.5.1",
    "html-webpack-plugin": "^3.2.0",
    "jest": "^24.9.0",
    "source-map": "^0.7.3",
    "ts-jest": "^24.1.0",
    "ts-loader": "^6.2.0",
    "typescript": "^3.6.4",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.9",
    "webpack-dev-server": "^3.8.2"
  }
}
```

#### `.eslintrc.js`

```sh

module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
  },
  rules:  {
  },
};
```

#### `tsconfig.json`

```sh

{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "allowJs": true,
    "moduleResolution": "node",
        "skipLibCheck": true
  }
}
```

#### `webpack.config.js`

```sh
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: "./js/main.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Development"
    })
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
```

### Tasks

<details>
<summary>0. Creating an interface for a student</summary>

Please proceed with the following steps:

1. Transfer the given configuration files: `package.json`, `.eslintrc.js`, `tsconfig.json`, `webpack.config.js` into the directory named `task_0`.

2. In the `main.ts` file, you need to:

   - Define an interface called `Student` that includes the following properties: `firstName` (string), `lastName` (string), `age` (number), and `location` (string).
   - Construct two student objects and store them in an array named `studentsList`.
   - Utilize Vanilla Javascript to generate a table. For each item in the array, add a new row to the table.
   - Ensure that each row displays the student's first name and location.

3. Requirements:

   - Upon execution, Webpack should not report any type errors.
   - Make sure to use TypeScript for all variables where applicable.

**Files:**

- `task_0/js/main.ts`
- `task_0/package.json`
- `task_0/.eslintrc.js`
- `task_0/tsconfig.json`
- `task_0/webpack.config.js`

- </details>

<details>
<summary>1. Let's build a Teacher interface</summary>

1. Establish a directory named `task_1` and transfer the following configuration files into it: `package.json`, `tsconfig.json`, `webpack.config.js`.

2. In the `main.ts` file, you need to:

   - Define `firstName` (string) and `lastName` (string). These attributes should be modifiable only during the initial creation of a Teacher object.
   - Ensure `fullTimeEmployee` (boolean) is always defined.
   - `yearsOfExperience` (number) is an optional attribute.
   - `location` (string) should always be defined.
   - Allow the addition of any attribute to the object, such as `contract` (boolean), without specifying the attribute's name.

Here's an example:

```typescript
const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};

console.log(teacher3);

// The console output should be:
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"
```

**Files:**

- `task_1/js/main.ts`
- `task_1/webpack.config.js`
- `task_1/tsconfig.json`
- `task_1/package.json`

</details>

<details>
<summary>2. Extending the Teacher class</summary>

Write an interface called `Directors` that inherits from `Teacher`. It should include a property named `numberOfReports` (number).

Here's an example:

```typescript
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// The console output should be:
// Object
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "London"
// numberOfReports: 17
```

**Files:**

- `task_1/js/main.ts`

</details>

<details>
<summary>3. Printing teachers</summary>

1. Write a function named `printTeacher` that:

   - Takes in two parameters: `firstName` and `lastName`.
   - Returns the initial of the `firstName` and the complete `lastName`.
   - For instance, `printTeacher("John", "Doe")` should yield `J. Doe`.

2. Define an interface for this function and name it `printTeacherFunction`.

**Files:**

- `task_1/js/main.ts`

</details>

<details>
<summary>4. Writing a class</summary>

1. Write a class called `StudentClass` with the following specifications:

   - The constructor should take two parameters: `firstName` (string) and `lastName` (string).
   - The class should have a method `workOnHomework` that returns the string `Currently working`.
   - The class should also have a method `displayName` that returns the student's firstName.

2. The constructor of the class should be defined using an Interface.
3. The class itself should also be defined using an Interface.

4. Requirements:

   - You may reuse the Webpack configuration from the previous task to compile your code.
   - When executing `npm run build`, there should be no TypeScript errors.
   - Ensure that TypeScript is used for all variables where possible.

**Files:**

- `task_1/js/main.ts`

</details>

<details>
<summary>5. Advanced types Part 1</summary>

1. Define an interface named `DirectorInterface` with the following methods:

   - `workFromHome()`: Returns a string.
   - `getCoffeeBreak()`: Returns a string.
   - `workDirectorTasks()`: Returns a string.

2. Define an interface named `TeacherInterface` with the following methods:

   - `workFromHome()`: Returns a string.
   - `getCoffeeBreak()`: Returns a string.
   - `workTeacherTasks()`: Returns a string.

3. Create a `Director` class that implements `DirectorInterface`:

   - `workFromHome`: Returns the string `Working from home`.
   - `getToWork`: Returns the string `Getting a coffee break`.
   - `workDirectorTasks`: Returns the string `Getting to director tasks`.

4. Create a `Teacher` class that implements `TeacherInterface`:

   - `workFromHome`: Returns the string `Cannot work from home`.
   - `getCoffeeBreak`: Returns the string `Cannot have a break`.
   - `workTeacherTasks`: Returns the string `Getting to work`.

5. Create a function named `createEmployee` that:

   - Can return either a `Director` or a `Teacher` instance.
   - Accepts one argument: `salary` (either a number or a string).
   - If `salary` is a number and less than 500, it should return a new `Teacher`. Otherwise, it should return a `Director`.

Here's the expected output:

```typescript
console.log(createEmployee(200));
// Output: Teacher
console.log(createEmployee(1000));
// Output: Director
console.log(createEmployee("$500"));
// Output: Director
```

**Files:**

- `task_2/js/main.ts`
- `task_2/webpack.config.js`
- `task_2/tsconfig.json`
- `task_2/package.json`

</details>

<details>
<summary>6. Creating functions specific to employees</summary>

1. Write a function named `isDirector` that:

   - Takes in an argument named `employee`.
   - Serves as a type predicate to determine if the employee is a director.

2. Construct a function named `executeWork` that:

   - Takes in an argument named `employee`.
   - If the employee is a Director, it should invoke the `workDirectorTasks` method.
   - If the employee is a Teacher, it should invoke the `workTeacherTasks` method.

Here's the expected output:

```typescript
console.log(executeWork(createEmployee(200)));
// Output: Getting to work
console.log(executeWork(createEmployee(1000)));
// Output: Getting to director tasks
```

**Files:**

- `task_2/js/main.ts`

</details>

<details>
<summary>7. String literal types</summary>

1. Define a String literal type named `Subjects` that allows a variable to hold either `Math` or `History` as its value.

2. Construct a function named `teachClass` that:

   - Accepts an argument named `todayClass`.
   - If `todayClass` is `Math`, it should return the string `Teaching Math`.
   - If `todayClass` is `History`, it should return the string `Teaching History`.

Here's the expected output:

```typescript
console.log(teachClass("Math"));
// Output: Teaching Math
console.log(teachClass("History"));
// Output: Teaching History
```

**Files:**

- `task_2/js/main.ts`

</details>

<details>
<summary>8. Ambient Namespaces</summary>

1. Create a directory named `task_3` and transfer the following configuration files into it: `package.json`, `webpack.config.js`, `tsconfig.json`.

2. In a file named `interface.ts`, perform the following:

   - Define a type `RowID` that is equivalent to `number`.
   - Construct an interface `RowElement` that includes the fields `firstName` (string), `lastName` (string), and an optional field `age` (number).

3. As part of the application architecture, you aim to save entities to a database. Due to time constraints, you can't create a database connector, so you decide to download a library named `crud.js`. Copy this file into the `task_3/js` directory.

4. In the `task_3/js` directory, create an ambient file named `crud.d.ts` that contains type declarations for each function in `crud.js`. At the beginning of the file, import `RowID` and `RowElement` from `interface.ts`.

5. In `main.ts`, do the following:

   - At the top of the file, create a triple slash directive that includes all dependencies from `crud.d.ts`.
   - Import the `rowID` type and `rowElement` from `interface.ts`.
   - Import everything from `crud.js` as `CRUD`.

6. Create an object named `row` of type `RowElement` with the fields `firstName` set to `Guillaume` and `lastName` set to `Salva`.

7. Create a `const` variable named `newRowID` of type `RowID` and assign it the value returned by the `insertRow` function.

8. Next, create a `const` variable named `updatedRow` of type `RowElement` and update `row` with an `age` field set to `23`.

9. Finally, call the `updateRow` and `deleteRow` functions.

Here's the expected output:

```typescript
const obj = { firstName: "Guillaume", lastName: "Salva" };
CRUD.insertRow(obj);
// Output: Insert row {firstName: "Guillaume", lastName: "Salva"}

const updatedRow: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23,
};
CRUD.updateRow(newRowID, updatedRow);
// Output: Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}

CRUD.deleteRow(125);
// Output: Delete row id 125
```

Requirements:

- When running `npm run build`, there should be no TypeScript errors.
- Ensure that TypeScript is used for all variables where possible.
- Both the main file and the ambient file should import the types defined in the interface file.
- You can easily test your ambient file by checking the intellisense of your IDE when using the 3rd party functions.

**Files:**

- `task_3/js/main.ts`
- `task_3/js/interface.ts`
- `task_3/js/crud.d.ts`

</details>

<details>
<summary>9. Namespace & Declaration merging</summary>

Here's a rephrased version of your instructions:

1. Create a new directory named `task_4` and copy the provided `tsconfig.json` into it. Also, place the given `package.json` in the same directory.

```json
{
  "name": "task_4",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "webpack",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^2.4.0",
    "@typescript-eslint/parser": "^2.4.0",
    "clean-webpack-plugin": "^3.0.0",
    "fork-ts-checker-webpack-plugin": "^1.5.1",
    "html-webpack-plugin": "^3.2.0",
    "ts-loader": "^6.2.0",
    "typescript": "^3.6.4",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.9",
    "webpack-dev-server": "^3.8.2"
  }
}
```

2. In the `task_4/js/subjects` directory, perform the following:

   - Create a file named `Teacher.ts` and define a `Teacher` interface within a namespace called `Subjects`. The interface should have `firstName` and `lastName` as string attributes.

   - Create a file named `Subject.ts` and define a `Subject` class within the same `Subjects` namespace. The class should have a `teacher` attribute that implements the `Teacher` interface and a setter method `setTeacher` that accepts a `teacher` argument and sets the instance attribute `teacher` with it.

   - Create a file named `Cpp.ts` and make the following modifications within the same namespace:

     - Using declaration merging, add a new optional attribute `experienceTeachingC` (number) to the `Teacher` interface.
     - Define a `Cpp` class that extends from `Subject`.
     - Write a `getRequirements` method that returns the string `Here is the list of requirements for Cpp`.
     - Write a `getAvailableTeacher` method that returns the string `Available Teacher: <first name of teacher>`. If the teacher doesn’t have any experience in teaching C, then the method should return the string `No available teacher`.

   - Create a file named `React.ts` and define a `React` class within the same namespace:

     - Add a new attribute `experienceTeachingReact?` (number) to the `Teacher` interface.
     - In the class, write a `getRequirements` method that returns the string `Here is the list of requirements for React`.
     - Write a `getAvailableTeacher` method that returns the string `Available Teacher: <first name of teacher>`. If the teacher doesn’t have any experience in teaching React, then the method should return the string `No available teacher`.

   - Create a file named `Java.ts` and define a `Java` class within the same namespace:

     - Add a new attribute `experienceTeachingJava?` (number) to the `Teacher` interface.
     - In the class, write a `getRequirements` method that returns the string `Here is the list of requirements for Java`.
     - Write a `getAvailableTeacher` method that returns the string `Available Teacher: <first name of teacher>`. If the teacher doesn’t have any experience in teaching Java, then the method should return the string `No available teacher`.

**Files:**

- `task_4/package.json`
- `task_4/tsconfig.json`
- `task_4/js/subjects/Cpp.ts`
- `task_4/js/subjects/Java.ts`
- `task_4/js/subjects/React.ts`
- `task_4/js/subjects/Subject.ts`
- `task_4/js/subjects/Teacher.ts`

</details>

<details>
<summary>10. Update task_4/js/main.ts</summary>

1. Create and export a constant named `cpp` for Cpp Subjects.
2. Create and export a constant named `java` for Java Subjects.
3. Create and export a constant named `react` for React Subjects.
4. Create and export a `Teacher` object named `cTeacher` with `experienceTeachingC` set to `10`.
5. For the Cpp subject, log `C++` to the console, assign `cTeacher` as the teacher, invoke the methods `getRequirements` and `getAvailableTeacher`, and print the returned strings.
6. For the Java subject, log `Java` to the console, assign `cTeacher` as the teacher, invoke the methods `getRequirements` and `getAvailableTeacher`, and print the returned strings.
7. For the React subject, log `React` to the console, assign `cTeacher` as the teacher, invoke the methods `getRequirements` and `getAvailableTeacher`, and print the returned strings.

**Files:**

- `task_4/js/main.ts`

</details>

<details>
<summary>11. Brand convention & Nominal typing</summary>

1. Create a directory named `task_5` and place the following configuration files in its root: `package.json`, `tsconfig.json`, `webpack.config.js`.

2. In the `task_5/js/main.ts` file, perform the following:

   - Define two interfaces named `MajorCredits` and `MinorCredits`. Each interface should have a number attribute named `credits`.
   - Add a unique brand property to each interface for identification purposes.

3. In the same `main.ts` file, create two functions named `sumMajorCredits` and `sumMinorCredits`:

   - Each function should accept two arguments: `subject1` and `subject2`.
   - The `sumMajorCredits` function should return a `MajorCredits` value, while the `sumMinorCredits` function should return a `MinorCredits` value.
   - Each function should sum the credits of the two subjects.

**Files:**

- `task_5/js/main.ts`
- `task_5/package.json`
- `task_5/webpack.config.js`
- `task_5/tsconfig.json`

</details>
