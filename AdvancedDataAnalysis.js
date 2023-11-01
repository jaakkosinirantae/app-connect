/* 
Filename: AdvancedDataAnalysis.js
Description: This code performs advanced data analysis on a dataset.
Author: Jane Smith
Date: 2022-12-15
*/

// Define the dataset
const dataset = [
  {
    id: 1,
    name: "John",
    age: 25,
    gender: "Male",
  },
  {
    id: 2,
    name: "Emma",
    age: 32,
    gender: "Female",
  },
  {
    id: 3,
    name: "Michael",
    age: 27,
    gender: "Male",
  },
  // ... more data objects ...
];

// Function to calculate the average age
function calculateAverageAge(data) {
  const totalAge = data.reduce((sum, currentData) => sum + currentData.age, 0);
  return totalAge / data.length;
}

// Function to count the number of males and females
function countGender(data) {
  let males = 0;
  let females = 0;

  data.forEach((item) => {
    if (item.gender === "Male") {
      males++;
    } else if (item.gender === "Female") {
      females++;
    }
  });

  return { males, females };
}

// Function to find the oldest person
function findOldestPerson(data) {
  let oldestPerson = null;

  data.forEach((item) => {
    if (!oldestPerson || item.age > oldestPerson.age) {
      oldestPerson = item;
    }
  });

  return oldestPerson;
}

// Function to filter dataset by age
function filterByAge(data, minAge, maxAge) {
  return data.filter((item) => item.age >= minAge && item.age <= maxAge);
}

// Calculate and output average age
const averageAge = calculateAverageAge(dataset);
console.log("Average Age:", averageAge);

// Count and output gender distribution
const genderCount = countGender(dataset);
console.log("Gender Distribution:", genderCount);

// Find and output the oldest person
const oldestPerson = findOldestPerson(dataset);
console.log("Oldest Person:", oldestPerson);

// Filter the dataset by age range
const filteredData = filterByAge(dataset, 25, 35);
console.log("Filtered Data:", filteredData);
