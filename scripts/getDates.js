// Set the elements for copyright year and last modified date
const currentYearElement = document.getElementById("currentYear");
currentYearElement.textContent = new Date().getFullYear();

const lastModifiedElement = document.getElementById("lastModifiedDate");
lastModifiedElement.textContent = document.lastModified;

// Set the state
const state = "Pennsylvania, USA";
document.getElementById("state-placeholder").textContent = state;

// Weather implementation or a placeholder message
const weather = "55°F - Cloudy";
document.getElementById("weather-placeholder").textContent = weather;

// Store and update page visits count
let pageVisits = localStorage.getItem("pageVisits") || 0;
pageVisits++;
localStorage.setItem("pageVisits", pageVisits);
document.getElementById("visits-placeholder").textContent = pageVisits;