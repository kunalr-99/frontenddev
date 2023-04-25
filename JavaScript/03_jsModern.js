const calcPercent = (marks) => {
  const sum = 0;
  for (let index = 0; index < marks.length; index++) {
    sum += marks[index];
  }
  return sum / marks.length;
};

let fakeData = [
  {
    id: 1,
    studName: "kunal",
    studSchool: "stjoseph",
    studSubjects: ["science", "maths", "hindi", "marathi", "english"],
    studMarks: [78, 89, 68, 81, 75],
  },
  {
    id: 2,
    studName: "aniket",
    studSchool: "bosco",
    studSubjects: ["science", "maths", "hindi", "marathi", "english"],
    studMarks: [74, 91, 84, 70, 78],
  },
];

const studs = fakeData.map((student) => {
  return student.studMarks.map((marks) => {
    let sum = 0;
    sum += marks;
    return sum;
  });
});

console.log(name, age);
