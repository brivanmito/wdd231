const params = new URLSearchParams(window.location.search);

// GET THE VALUES K
const firstName = params.get("firstName");

const lastName = params.get("lastName");

const emailf = params.get("email");

// Get the container 
const containerf = document.querySelector("#thankyou-section");

const p = document.createElement("p");

p.innerHTML = `Dear <strong>${firstName} ${lastName}</strong>.<br>
We will contact you from the following email address: <strong>${emailf}</strong>.<br>
See you soon!`;

containerf.append(p);
