
let students = [];

// HTML elements select karna
let nameInput = document.querySelector(".input");
let ageInput = document.querySelector(".input2");
let courseInput = document.querySelector(".select");

let addBtn = document.querySelector(".btn");
let clearBtn = document.querySelector(".btn2");

let counter = document.getElementById("counter");
let studentContainer = document.getElementById("studentContainer");


// Input Event
nameInput.addEventListener("input", function () {
    console.log("Student Name:", nameInput.value);
});


// Add Student Event
addBtn.addEventListener("click", function () {

    let name = nameInput.value.trim();
    let age = Number(ageInput.value);
    let course = courseInput.value;

    // Validation
    if (name === "" || ageInput.value === "" || age <= 0 || course === "") {
        alert("Please fill all fields correctly!");
        return;
    }

    // Age Status
    let status;

    if (age >= 18) {
        status = "Adult";
    } else {
        status = "Under 18";
    }

    // Student Object
    let student = {
        name: name,
        age: age,
        course: course,
        status: status
    };

    // Array mein student add karna
    students.push(student);

    // Page par students show karna
    displayStudents();

    // Counter update karna
    counter.innerText = "Total Students: " + students.length;

    // Inputs clear karna
    nameInput.value = "";
    ageInput.value = "";
    courseInput.value = "";
});


// Display Students Function
function displayStudents() {

    studentContainer.innerHTML = "";

    students.forEach(function (student) {

        let card = document.createElement("div");

        card.classList.add("student-card");

        let heading = document.createElement("h3");
        heading.innerText = student.name;

        let agePara = document.createElement("p");
        agePara.innerText = "Age: " + student.age;

        let coursePara = document.createElement("p");
        coursePara.innerText = "Course: " + student.course;

        let statusPara = document.createElement("p");
        statusPara.innerText = "Status: " + student.status;

        card.appendChild(heading);
        card.appendChild(agePara);
        card.appendChild(coursePara);
        card.appendChild(statusPara);

        studentContainer.appendChild(card);
    });
}


// Clear All Event
clearBtn.addEventListener("click", function () {

    students = [];

    displayStudents();

    counter.innerText = "Total Students: 0";
});
