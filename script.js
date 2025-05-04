//Declared variables to calculate CGPA
let totalGradePoints = 0;
let totalcreditsHours = 0;
let cgpa = 0;

function addCourse() {
    const courseName = document.getElementById('CourseInput').value;
    const creditHours = document.getElementById('creditHoursInput').value;
    const grade = document.getElementById('gradesInput').value;

    if (!courseName || !creditHours || !grade) {
        return;
    }

    const courseList = document.querySelector('.courseList');

    //creating a item class
    const item = document.createElement('div');
    item.classList.add('courseItem');

    //adding content taken through input fields to class
    item.innerHTML = `
    <div>${courseName}</div>
    <div>${creditHours}</div>
    <div>${grade}</div>`;

    //defining gradepoints map
    const gradePointsMap = {
        "A+": 4.0,
        "A": 3.75,
        "A-": 3.5,
        "B+": 3.25,
        "B": 3.0,
        "B-": 2.75,
        "C+": 2.5,
        "C": 2.25,
        "C-": 2.0,
        "F": 0.0
    };

    let gradePoints = gradePointsMap[grade] || 0;

    // Update totalGradePoints and totalcreditsHours
    totalGradePoints += parseFloat(creditHours) * gradePoints;
    totalcreditsHours += parseFloat(creditHours);

    // Recalculate CGPA
    cgpa = totalGradePoints / totalcreditsHours;

    // Display CGPA
    const showCgpa = document.querySelector('.showCgpa')
    showCgpa.textContent = `${cgpa.toFixed(2)}`;

    courseList.appendChild(item);

    // Reset inputs
    document.getElementById('CourseInput').value = '';
    document.getElementById('creditHoursInput').value = '';
    document.getElementById('gradesInput').selectedIndex = 0;
}

function reset() {
    document.getElementById('CourseInput').value = '';
    document.getElementById('creditHoursInput').value = '';
    document.getElementById('gradesInput').selectedIndex = 0;

    const courseList = document.querySelector('.courseItem');
    courseList.innerHTML = '';

    // Reset CGPA display
    document.querySelector('.showCgpa').textContent = '-';

    // Reset totalGradePoints and totalcreditsHours
    totalGradePoints = 0;
    totalcreditsHours = 0;
}