// Get the current of the page
document.querySelector("#currentYear").textContent = new Date().getFullYear();

// GET THE LAST MODIFIED DATE
document.querySelector("#last-modified").textContent = `Last modified: ${document.lastModified}`;

// ADD THE COURSE NAME
document.querySelector("#course-name").textContent = "WDD 231 CLASS PROJECT";