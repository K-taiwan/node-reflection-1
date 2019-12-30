console.log('Welcome to Reflection~ \u{1F92F}');
console.log($,'Jquery is here!');

const getAllStudentsSuccess = (studentData) => {
    // console.log(studentData);
    studentData.data.forEach((student) => {
        // console.log(student.name);
        const $studentList = $('.student-list');
        const template = `
            <div id="${student._id}">
                <h4>strong>Name</strong>: ${student.name}</h4>
                <p><strong>Email</strong>: ${student.email}</p>
                <p><strong>Age</strong>: ${student.age}</p>
                <p><strong>Hobbies</strong>: </p>
                <ul>
                    ${student.hobbies.map((hobby) => {
                        return `<li>${hobby}</li>`
                    }).join('')};
                </ul>
            </div>
        `;
        $studentList.append(template);
    });
};

const handleError = (errorObj) => {
    console.log(errorObj);
};

const getAllStudents = () => {
    $.ajax({
        method: "GET",
        url: "localhost:3000/api/v1/students",
        success: getAllStudentsSuccess,
        error: handleError,
    });
};

getAllStudents();