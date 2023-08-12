function checkAPlusGrade(examType, totalMarks) {
    if (examType === "Final-exam") {
        return totalMarks >= 90;
    } else {
        return totalMarks >= 89 && totalMarks <= 100;
    }
}



const result = checkAPlusGrade("First-exam", 90);

if (result) {

    console.log(true);
} else {
    console.log(false);
}
