// 1. Variables : let and const

console.log("Variables");
const studentName = "Sakif Anam";
const university = "IIUC";

let completedTask = 3;

completedTask = 4;

console.log("Student Name :", studentName);
console.log("University :", university);
console.log("Completed Task:", completedTask);
console.log("\n");

// 2. Data types

console.log("Data types");
const courseName = "Software Development";
const semester = 3;
const isEnrolled = true;

let assignment;
const selectedCourse = null;

const largeNumber = 1234567890n; // bigint
const uniqueID = Symbol("id"); // symbol

console.log(typeof courseName);
console.log(typeof semester);
console.log(typeof isEnrolled);
console.log(typeof assignment); // "object" is a JavaScript quirk
console.log(typeof largeNumber);
console.log(typeof uniqueID);
console.log("\n");

// 3. Type Conversion

console.log("Type Conversion");
const inputMark = "85";

console.log(Number(inputMark));
console.log(String(100));
console.log(Boolean(1));
console.log(Boolean(0));
console.log("\n");


// 4. Operators

console.log("Operators");
const mark1 = 80;
const mark2 = 90;

console.log(mark1 + mark2);
console.log(mark1 - mark2);
console.log(mark1 * mark2);
console.log(mark2 / mark1);
console.log(mark1 % 3);

console.log(mark1 > mark2);
console.log(mark1 === 80);
console.log(mark1 !== mark2);

console.log(5 === "5"); // false
console.log(5 == "5"); // true

const hasPaid = true;
const hasRegistered = true;

console.log(hasPaid && hasRegistered);
console.log(hasPaid || hasRegistered);
console.log(!hasPaid);
console.log("\n");

// 5. Conditions

console.log("Conditions");

const mark = 75;

if(mark >= 80) {
    console.log("Grade: A+");
}
else if(mark >= 70) {
    console.log("Grade: A");
}
else if(mark >= 60) {
    console.log("Grade: B");
}
else {
    console.log("Needs Improvement");
}

const result = mark >= 40 ? "Pass" : "Fail";

console.log(result);

const day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the week\n");
        break;

    case "Friday":
        console.log("End of the working week\n");
        break;
        
    default:
        console.log("Regular day\n");
}


// 6. Loops

console.log("Loops");

for (let i = 1; i <= 3; i++) {
    console.log("Task", i);
}

let count = 1;

while (count <= 3) {
    console.log("Count:", count);
    count++;
}

let choice;

do {
    console.log("1. View courses");
    console.log("2. Exit");

    choice = 2;
} while (choice !== 2);

console.log("Program ended.\n");

// 7. Functions

console.log("Functions");
function calculateTotal (price, quantity) {
    return price * quantity;
}

console.log(calculateTotal(500, 2));

const calculateDiscount = function (price, discount) {
    return price - (price * discount / 100);
}

console.log(calculateDiscount(1000, 10));

const greetStudent = (name) => `Welcome, ${name}!`;

console.log(greetStudent("Sakif Anam"));
console.log("\n");

// 8. Arrays

console.log("ARRAYS")
const courses = [
    "Web Development",
    "Data Mining",
    "Machine Learning"
];

console.log(courses[0]);
console.log(courses.length);
console.log(courses.includes("Data Mining"));

courses.push("Software Engineering");

console.log(courses);

courses.pop();

courses.forEach((course) => {
    console.log("Course:", course);
})

const marks = [45, 82, 67, 91, 38];

const passedMarks = marks.filter((value) => value >= 40);

console.log(passedMarks);

const firstHighMark = marks.find((value) => value >= 80);

console.log(firstHighMark);
console.log("\n");

// 9. Objects

console.log("Objects");
const student = {
    name: "Sakif",
    department: "CSE",
    semester: 3,
    isActive: true
};

console.log(student.name);
console.log(student["department"]);

student.semester = 4;

student.email = "student@example.com";

console.log(student);

delete student.email;

console.log(student);
console.log("\n");


// 10. Array of objects

console.log("Array of objects");
const courseList = [
    { name: "Web Development", progress: 82 },
    { name: "Data Mining", progress: 68 },
    { name: "Machine Learning", progress: 54 },
];

courseList.forEach((course) =>
    console.log(`${course.name}: ${course.progress}%`));

const completedCourses = courseList.filter((course) =>
    course.progress >= 80);

console.log(completedCourses);
console.log("\n");

// 11. Template Literals

console.log("Template Literals");
const instructor = "Sakif Anam";
const duration = 12;

const message = `${instructor} teaches a ${duration}-week course`;

console.log(message);
console.log("\n");
