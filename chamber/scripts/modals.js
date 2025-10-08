document.addEventListener("DOMContentLoaded", () => {
    const timestampField = document.getElementById("timestamp");
    timestampField.value = new Date().toLocaleString();
});

const divContainer = document.querySelector("#membershipContainer");

const membershipLevels = [
  {
    id: "np",
    name: "NP Membership",
    description: "This non-profit membership gives you access to newsletters and networking events, helping you stay connected and informed.",
    cost: 0,
    benefits: [
      "Access to newsletters",
      "Networking events"
    ]
  },
  {
    id: "bronze",
    name: "Bronze Membership",
    description: "Bronze members enjoy all NP benefits plus event discounts and limited advertising opportunities on our website.",
    cost: 10,
    benefits: [
      "Everything in NP",
      "Event discounts",
      "Limited advertising on website"
    ]
  },
  {
    id: "silver",
    name: "Silver Membership",
    description: "Silver members receive all Bronze benefits, priority event registration, and a featured spotlight on the homepage for greater visibility.",
    cost: 20,
    benefits: [
      "Everything in Bronze",
      "Priority event registration",
      "Featured spotlight on homepage"
    ]
  },
  {
    id: "gold",
    name: "Gold Membership",
    description: "Gold membership includes all Silver benefits, VIP event access, premium advertising on the homepage, and special training sessions for maximum exposure and opportunities.",
    cost: 30,
    benefits: [
      "Everything in Silver",
      "VIP event access",
      "Premium advertising on homepage",
      "Special training sessions"
    ]
  }
];

function CreateMembershipLevels() {

    // Create a div

    membershipLevels.forEach(membership => {

        const divElement = document.createElement("div");

        const membershipName = document.createElement("h3");

        const button = document.createElement("button");



        membershipName.textContent = membership.name;

        button.textContent = "Learn more";
        button.value = membership.id;

        divElement.append(membershipName);
        divElement.append(button);

        divContainer.append(divElement);

        button.addEventListener("click", () => {

            CreateModals(membership);
        });

        

    });

    
}

function CreateModals(membership) {

    const modal = document.createElement("dialog");

    modal.classList.add("course-dialog");

    const title = document.createElement("h3");

    const button = document.createElement("button");

    const description = document.createElement("p");

    const price = document.createElement("p");

    const benefits = document.createElement("p");

    title.textContent = membership.name;

    button.textContent = "x";

    description.textContent = `Description: ${membership.description}`;

    price.textContent = membership.cost === 0 ? "Price: FREE" : `Price: $${membership.cost}`;

    benefits.textContent = `Benefits: ${membership.benefits}`;

    modal.append(title, description, price, benefits, button);

    document.body.appendChild(modal);
  
    modal.showModal();


    button.addEventListener("click", () => {
    modal.close();
    modal.remove();
  });

    


}

CreateMembershipLevels();





// function CreateModals {

// }