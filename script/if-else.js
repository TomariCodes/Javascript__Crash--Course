function getGrade(numberGrade) {
  if (numberGrade === 100) {
    return "A++";
  } else if (numberGrade < 100 && numberGrade >= 90) {
    return "A";
  } else if (numberGrade < 90 && numberGrade >= 80) {
    return "B";
  } else if (numberGrade < 80 && numberGrade >= 70) {
    return "C";
  } else if (numberGrade < 70 && numberGrade >= 60) {
    return "D";
  } else if (numberGrade < 60) {
    return "F";
  }
}

console.log(getGrade(100));
console.log(getGrade(97));
console.log(getGrade(82));
console.log(getGrade(69));
console.log(getGrade(54));
console.log(getGrade(74));

function getAverage(gradeArray) {
  let combinedGrades = 0;
  for (const grade of gradeArray) {
    combinedGrades += grade;
  }
  const result = combinedGrades / gradeArray.length;
  return `The class average is ${result}.`;
}

console.log(getAverage([90, 64, 78, 90, 88]));

function getOverallReport(numberGrade, gradeArray) {
  const studentGrade = getGrade(numberGrade);
  const classAverage = getAverage(gradeArray);
  console.log(
    `Your grade is ${studentGrade}. The class average is ${classAverage}.`
  );
}

getOverallReport(100, [100, 97, 82, 69, 54, 74]);
getOverallReport(97, [100, 97, 82, 69, 54, 74]);
getOverallReport(82, [100, 97, 82, 69, 54, 74]);
getOverallReport(69, [100, 97, 82, 69, 54, 74]);
getOverallReport(54, [100, 97, 82, 69, 54, 74]);
getOverallReport(74, [100, 97, 82, 69, 54, 74]);
