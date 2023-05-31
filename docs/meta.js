const ogImageMeta = document.getElementsByClassName("og-image")

for (let i = 0; i < ogImageMeta.length; i++) {
    ogImageMeta[i].setAttribute("content", window.location + ogImageMeta[i].getAttribute("content"))
}

const ogDescriptionMeta = document.getElementsByClassName("og-description")

for (let i = 0; i < ogDescriptionMeta.length; i++) {
    ogDescriptionMeta[i].setAttribute("content", "Rizwan Nasir — Full Stack Web Developer | Laravel | Symfony | Vue.js | React | Tailwind CSS")
}

// Calculate the number of years of experience
const currentYear = new Date().getFullYear();
const startYear = 2020;
const yearsOfExperience = currentYear - startYear;

// Update the content of the element with the years of experience
const yearsOfExperienceElement = document.getElementById("yearsOfExperience");
yearsOfExperienceElement.textContent = yearsOfExperience.toString();
