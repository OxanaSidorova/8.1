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
function count(yearlyExpences, minPrice) { 
    // min price for each object 
  let sum = 0;
  yearlyExpences.forEach((expencesExamples) => {
    // cycle forEach object in a whole array 
    expencesExamples.yearlyExpences.forEach((eachValue) => {
        // cyclec for each value in a array in a each object
      if (eachValue >= minPrice) {
        // condition 
        sum += eachValue;
      }
    });
  });
  return sum;
}
console.log(count(expencesExamples, 1000));
