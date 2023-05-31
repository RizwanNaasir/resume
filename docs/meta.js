// Calculate the number of years of experience
const currentYear = new Date().getFullYear();
const startYear = 2020;
const yearsOfExperience = currentYear - startYear;

// Update the content of the element with the years of experience
const yearsOfExperienceElement = document.getElementById("yearsOfExperience");
yearsOfExperienceElement.textContent = yearsOfExperience.toString();
