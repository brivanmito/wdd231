let addressElement = document.querySelector("#address-chamber");

let titleValue = document.querySelector("title").textContent;

// Create Variables
let titleElement = document.createElement("p");
titleElement.textContent = titleValue;
let street = document.createElement("p");
street.textContent = "005 MZ VELEZ";
let zipcode = document.createElement("p");
zipcode.textContent = "10548";
let email = document.createElement("p");
email.textContent = "bmino@byupathway.com"
let number = document.createElement("p");
number.textContent = "+1 123456789"

//Asign values to the variables

//Create the DIV CONTAINER


addressElement.append(titleElement, street, zipcode, email, number);