

let expencesExamples = [
  {
    yearlyExpences: [
      2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
    ],
  },
  {
    yearlyExpences: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    yearlyExpences: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
];
for (let eachYearlyExpences of expencesExamples) {
  let eachValue = eachYearlyExpences.yearlyExpences.length;
  for (let i = 0; i < eachValue; i++) {
    if (eachYearlyExpences.yearlyExpences[i] < 1000) {
      const month = new Date(`${i + 1}`).toString().split(" ").slice(1, -7);

      console.log(month);
      console.log(
        month + " " + "and expenses " + eachYearlyExpences.yearlyExpences[i]
      );
    }
  }
}
