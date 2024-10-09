document.addEventListener("DOMContentLoaded", function() { //event handler to call for the entire html document to be fully loaded
   
    // add course data for each semester as an array of objects
    // First semester courses data (First Year)
    let firstSemesterCourses = [
        { course: "NSTP01", description: "Civic Welfare Training Service 1", unit: "3.0", grade: "1.20", remarks: "Passed", term: "First Semester A.Y 2022-2023" },
        { course: "SCITEC", description: "Science, Technology and Society", unit: "3.0", grade: "1.20", remarks: "Passed", term: "First Semester A.Y 2022-2023" },
        { course: "INTCOM", description: "Introduction to Computing", unit: "3.0", grade: "1.50", remarks: "Passed", term: "First Semester A.Y 2022-2023" },
        { course: "COPRO1", description: "Computer Programming 1", unit: "3.0", grade: "1.60", remarks: "Passed", term: "First Semester A.Y 2022-2023" },
        { course: "COMPOP", description: "Computer Operations: Office Productivity Software (MS Office)", unit: "3.0", grade: "1.70", remarks: "Passed", term: "First Semester A.Y 2022-2023" },
        { course: "PEDUC1", description: "Physical Activities Towards Health and Fitness 1", unit: "2.0", grade: "1.10", remarks: "Passed", term: "First Semester A.Y 2022-2023" },
        { course: "JRIZAL", description: "Life, Works and Writings of Jose Rizal", unit: "3.0", grade: "1.10", remarks: "Passed", term: "First Semester A.Y 2022-2023" }
    ];
       // Second semester courses data
    let secondSemesterCourses = [
        { course: "OOPROG", description: "Object-Oriented Programming", unit: "3.0", grade: "1.70", remarks: "Passed", term: "Second Semester A.Y 2022-2023" },
        { course: "ARTAPP", description: "Art Appreciation", unit: "3.0", grade: "1.00", remarks: "Passed", term: "Second Semester A.Y 2022-2023" },
        { course: "PURCOM", description: "Purposive Communication", unit: "3.0", grade: "1.50", remarks: "Passed", term: "Second Semester A.Y 2022-2023" },
        { course: "NSTP02", description: "Civic Welfare Training Service 2", unit: "3.0", grade: "1.70", remarks: "Passed", term: "Second Semester A.Y 2022-2023" },
        { course: "DSTUR1", description: "Discrete Structures 1", unit: "3.0", grade: "1.50", remarks: "Passed", term: "Second Semester A.Y 2022-2023" },
        { course: "PEDUC2", description: "Physical Activities Towards Health and Fitness 2", unit: "2.0", grade: "1.20", remarks: "Passed", term: "Second Semester A.Y 2022-2023" },
        { course: "COPRO2", description: "Computer Programming 2", unit: "3.0", grade: "1.60", remarks: "Passed", term: "Second Semester A.Y 2022-2023" },
        { course: "GEEL01", description: "General Education Elective 1", unit: "3.0", grade: "1.50", remarks: "Passed", term: "First Semester A.Y 2023-2024" }
    ];
         // Third semester courses data (Second Year)
    let thirdSemesterCourses = [
        { course: "ANIMUL", description: "Animation and Multimedia", unit: "3.0", grade: "1.60", remarks: "Passed", term: "First Semester A.Y 2023-2024" },
        { course: "HUMCOM", description: "Human Computer Interaction", unit: "3.0", grade: "1.60", remarks: "Passed", term: "First Semester A.Y 2023-2024" },
        { course: "MATMOD", description: "Mathematics in the Modern World", unit: "3.0", grade: "1.00", remarks: "Passed", term: "Second Semester A.Y 2022-2023" },
        { course: "DASTRU", description: "Data Structures and Algorithms", unit: "3.0", grade: "1.70", remarks: "Passed", term: "First Semester A.Y 2023-2024" },
        { course: "NETWRK", description: "CCNA Exploration: Network Fundamentals", unit: "3.0", grade: "1.70", remarks: "Passed", term: "First Semester A.Y 2023-2024" },
        { course: "PEDUC3", description: "Physical Activities Towards Health and Fitness 3", unit: "2.0", grade: "1.00", remarks: "Passed", term: "First Semester A.Y 2023-2024" },
        { course: "GEEL02", description: "General Education Elective 2", unit: "3.0", grade: "1.00", remarks: "Passed", term: "Second Semester A.Y 2023-2024" }
    ];
        // Fourth semester courses data
    let fourthSemesterCourses = [
        { course: "UNDLSF", description: "Understanding the Self", unit: "3.0", grade: "1.10", remarks: "Passed", term: "First Semester A.Y 2023-2024" },
        { course: "INMANA", description: "Information Management", unit: "3.0", grade: "1.40", remarks: "Passed", term: "Second Semester A.Y 2023-2024" },
        { course: "EVIDRI", description: "Event Driven Programming", unit: "3.0", grade: "1.10", remarks: "Passed", term: "Second Semester A.Y 2023-2024" },
        { course: "PRO1", description: "Professional Elective 1", unit: "3.0", grade: "1.10", remarks: "Passed", term: "Second Semester A.Y 2023-2024" },
        { course: "PEDUC4", description: "Physical Activities Towards Health and Fitness 4", unit: "3.0", grade: "1.30", remarks: "Passed", term: "Second Semester A.Y 2023-2024" },
        { course: "TECHNO", description: "Technopreneurship", unit: "3.0", grade: "2.00", remarks: "Passed", term: "Second Semester A.Y 2023-2024" },
        { course: "GEEL03", description: "General Education Elective 3", unit: "3.0", grade: "", remarks: "", term: "" }
    ];
     // Fifth semester courses data (Third year)
    let fifthSemesterCourses = [
        { course: "SOFENG", description: "Software Engineering", unit: "3.0", grade: "", remarks: "In progress", term: "" },
        { course: "WEBTEC", description: "Web Technology", unit: "3.0", grade: "", remarks: "In progress", term: "" },
        { course: "SYSTIN", description: "System Integration and Architecture", unit: "3.0", grade: "", remarks: "In progress", term: "" },
        { course: "MOBAPP", description: "Mobile Application", unit: "3.0", grade: "", remarks: "In progress", term: "" },
        { course: "PROEL2", description: "Professional Elective 2", unit: "3.0", grade: "", remarks: "In progress", term: "" },
        { course: "RESMET", description: "Research Methods in IT", unit: "3.0", grade: "", remarks: "In progress", term: "" }
    ];
      // Sixth semester courses data
    let sixthSemesterCourses = [
        { course: "PROEL3", description: "Professional Elective 3", unit: "3.0", grade: "", remarks: "", term: "" },
        { course: "PROEL4", description: "Professional Elective 4", unit: "3.0", grade: "", remarks: "", term: "" },
        { course: "SOCPRO", description: "Social and Professional Issues", unit: "3.0", grade: "", remarks: "", term: "" },
        { course: "SYSTAD", description: "System Administration and Maintenance", unit: "3.0", grade: "", remarks: "", term: "" },
        { course: "APPDEV", description: "Application Development and Emerging Technologies", unit: "3.0", grade: "", remarks: "", term: "" },
        { course: "CPSTON1", description: "Capstone Project 1", unit: "3.0", grade: "", remarks: "", term: "" }
    ];
     // Seventh semester courses data (Fourth Year)
    let seventhSemesterCourses = [
        { course: "INFASS", description: "Information Assurance and Security", unit: "3.0", grade: "", remarks: "", term: "" },
        { course: "OPESYS", description: "Operating Systems", unit: "3.0", grade: "", remarks: "", term: "" },
        { course: "ITPRA1", description: "IT Practicum 1 (250 Hours)", unit: "5.0", grade: "", remarks: "", term: "" },
        { course: "CPSTON2", description: "Capstone Project 2", unit: "3.0", grade: "", remarks: "", term: "" },
        { course: "CONWOR", description: "The Contemporary World", unit: "3.0", grade: "1.30", remarks: "Passed", term: "Second Semester A.Y 2023-2024" }
    ];
     // Eighth semester courses data
    let eightSemesterCourses = [
        { course: "PLATEC", description: "Platform Technologies", unit: "3.0", grade: "", remarks: "", term: "" },
        { course: "BUSANA", description: "Business Analytics", unit: "3.0", grade: "", remarks: "", term: "" },
        { course: "ETHICS", description: "Ethics", unit: "5.0", grade: "", remarks: "", term: "" },
        { course: "PHIHIS", description: "Readings in Philippine History", unit: "3.0", grade: "", remarks: "", term: "" },
        { course: "ITPRA2", description: "IT Practicum 2 (250 Hours)", unit: "5.0", grade: "", remarks: "", term: "" }
    ]
    // This code gets table body elements for each semester this connects to table classes
    let firstSemesterTableBody = document.getElementById("course-data");
    let secondSemesterTableBody = document.getElementById("course-data-second-semester");
    let thirdSemesterTableBody = document.getElementById("course-data-third-semester");
    let fourthSemesterTableBody = document.getElementById("course-data-fourth-semester");
    let fifthSemesterTableBody = document.getElementById("course-data-fifth-semester");
    let sixthSemesterTableBody = document.getElementById("course-data-sixth-semester");
    let seventhSemesterTableBody = document.getElementById("course-data-seventh-semester");
    let eightSemesterTableBody = document.getElementById("course-data-eight-semester")

    // Function to insert courses into the table uses For each
    firstSemesterCourses.forEach((course) => {
        let row = `<tr class="skyblue">
            <td>${course.course}</td>
            <td>${course.description}</td>
            <td>${course.unit}</td>
            <td>${course.grade}</td>
            <td>${course.remarks}</td>
            <td>${course.course}</td> <!-- Duplicate course name -->
            <td>${course.term}</td>
        </tr>`;
        firstSemesterTableBody.innerHTML += row;
    });

    // Insert second semester courses
    secondSemesterCourses.forEach((course) => {
        let row = `<tr class="skyblue">
            <td>${course.course}</td>
            <td>${course.description}</td>
            <td>${course.unit}</td>
            <td>${course.grade}</td>
            <td>${course.remarks}</td>
            <td>${course.course}</td> <!-- Duplicate course name -->
            <td>${course.term}</td>
        </tr>`; 
        secondSemesterTableBody.innerHTML += row;
    });

        // Insert third semester courses
        thirdSemesterCourses.forEach((course) => {
            let row = `<tr class="skyblue">
                <td>${course.course}</td>
                <td>${course.description}</td>
                <td>${course.unit}</td>
                <td>${course.grade}</td>
                <td>${course.remarks}</td>
                <td>${course.course}</td>
                <td>${course.term}</td>
            </tr>`;
            
            thirdSemesterTableBody.innerHTML += row;
    });

    // Insert fourth semester courses
        fourthSemesterCourses.forEach((course) => {
            let row = `<tr class="skyblue">
                <td>${course.course}</td>
                <td>${course.description}</td>
                <td>${course.unit}</td>
                <td>${course.grade}</td>
                <td>${course.remarks}</td>
                <td>${course.course}</td> <!-- Duplicate course name -->
                <td>${course.term}</td>
            </tr>`;
            
            fourthSemesterTableBody.innerHTML += row;
    });

    // Change the background color of the last row to white
            let lastRow = document.querySelector("#course-data-fourth-semester tr:last-child");
            if (lastRow) {
                lastRow.style.backgroundColor = "white";
}

    // Insert fifth semester courses
        fifthSemesterCourses.forEach((course) => {
            let row = `<tr class="yellow">
                <td>${course.course}</td>
                <td>${course.description}</td>
                <td>${course.unit}</td>
                <td>${course.grade}</td>
                <td>${course.remarks}</td>
                <td>${course.course}</td> <!-- This can remain unchanged if needed -->
                <td>${course.term}</td>
            </tr>`;
            
            fifthSemesterTableBody.innerHTML += row;
        });

    // Insert sixth semester courses
        sixthSemesterCourses.forEach((course) => {
            let row = `<tr class="white">
                <td>${course.course}</td>
                <td>${course.description}</td>
                <td>${course.unit}</td>
                <td>${course.grade}</td>
                <td>${course.remarks}</td>
                <td>${course.course}</td> <!-- Duplicate course name -->
                <td>${course.term}</td>
            </tr>`;
            
            sixthSemesterTableBody.innerHTML += row;
        });

        // Add this condition when inserting rows
        seventhSemesterCourses.forEach((course, index) => {
            let rowClass = index === seventhSemesterCourses.length - 1 ? "skyblue" : ""; // Check if it's the last row
            let row = `<tr class="${rowClass}">
                <td>${course.course}</td>
                <td>${course.description}</td>
                <td>${course.unit}</td>
                <td>${course.grade}</td>
                <td>${course.remarks}</td>
                <td>${course.course}</td>
                <td>${course.term}</td>
            </tr>`;
            
            seventhSemesterTableBody.innerHTML += row;
        });
                    // Insert eight semester courses
                    eightSemesterCourses.forEach((course) => {
                        let row = `<tr class="white">
                            <td>${course.course}</td>
                            <td>${course.description}</td>
                            <td>${course.unit}</td>
                            <td>${course.grade}</td>
                            <td>${course.remarks}</td>
                            <td>${course.course}</td> <!-- Duplicate course name -->
                            <td>${course.term}</td>
                        </tr>`;
                        eightSemesterTableBody.innerHTML += row;
                    });
});