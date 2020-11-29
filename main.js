function averageCompute() {
    var cellMarks = document.querySelectorAll("#out td.average");
    var sum = 0;
    for (var i = 0; i < cellMarks.length; i++) {
        sum += Number(cellMarks[i].innerText);
    }
    var average = sum / cellMarks.length;
    document.querySelector('p').innerHTML = "average=" + average;
}

function readJSON(url) {
    var xhr = new XMLHttpRequest();
    var obj;
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            obj = JSON.parse(xhr.responseText);
        }
    }
    xhr.open("GET", url, false);
    xhr.send(null);
    return obj;
}

var studentJson = readJSON("base.json");

var students = [];
for (var i = 0; i < studentJson.length; i++) {
    var name = studentJson[i].name;
    var surname = studentJson[i].surname;
    var age = studentJson[i].age;
    var average = Number(studentJson[i].average).toFixed(2);
    students.push(new Student(name, surname, age, average));
}

var table = new TableCreator("#out tbody");
for (var i = 0; i < student.length; i++) {
    table.addRow(student[i], true);
}

var tableFooter = new TableCreator("#out tfoot");

document.getElementById("submit").addEventListener("click", function(e) {
    e.preventDefault();
    addStudent();
})

document.getElementById("out").addEventListener("click", function(e) {
    if (e.target.tagName == "BUTTON" && e.target.className == "deleteButton") {
    }
})

function addStudent() {
    var addingForm = document.forms["addingForm"];
    var studentName = String(addingForm.elements["studentName"].value);
    var studentSurname = String(addingForm.elements["studentSurname"].value);
    var studentAge = parseInt(addingForm.elements["studentAge"].value, 10);
    var studentAverage = Number(addingForm.elements["studentAverage"].value).toFixed(2);
    student.push(new Student(studentName, studentSurname, studentAge, studentAverage));
    table.addRow(student[student.length - 1], true);
    averageCompute();
}

