const params = new URLSearchParams(window.location.search);

// GET THE VALUES K
const firstName = params.get("firstName");

const lastName = params.get("lastName");

const emailf = params.get("email");

const phoneNumber = params.get("telephone");

const businessName = params.get("organization");

const currentDate = params.get("timestamp");

// Get the container 
const containerf = document.querySelector("#thankyou-section");

const p = document.createElement("p");

p.innerHTML = `
Dear <strong>${firstName} ${lastName}</strong>,<br><br>
Thank you for submitting your membership application on <strong>${currentDate}</strong> for your organization, <strong>${businessName}</strong>.<br><br>
We will reach out to you shortly using the following contact information:<br>
<strong>Email:</strong> ${emailf}<br>
<strong>Phone:</strong> ${phoneNumber}<br><br>
We appreciate your interest and look forward to collaborating with you.<br><br>
Sincerely,<br>
<strong>The Chamber Team</strong>
`;

containerf.append(p);
