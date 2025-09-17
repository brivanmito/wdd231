
// Declare a const variable named "url" that contains the URL string of the JSON resource provided.
const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

// Declare a const variable name "cards" that selects the HTML div element from the document with an id value of "cards".
const cards = document.querySelector("#cards");




// -----------------------------------------------------------------------------------------------------------------------------//



// Create a async defined function named "getProphetData" to fetch data from the JSON source url using the await fetch() method.
async function getProphetData() {
    try {

        // Store the response from the fetch() method in a const variable named "response".
        const response = await fetch(url);

        // Convert the response to a JSON object using the .json method and store the results in a const variable named "data".
        const data = await response.json();

        // Add a console.table() expression method to check the data response at this point in the console window.
        // console.table(data);

        displayProphets(data.prophets);

    } catch (error) {
        console.error("Error fetching Data:", error);
    }
    
};


// Define a function expression named "displayProphets" that handles a single parameter named "prophets" somewhere in your js file. Use an arrow expression to contain statements that will process the parameter value and build a card for each prophet.
const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // create a section element and store it in a variable named card using createElement()
        const card = document.createElement("section");

        // create an h2 element and store it in a variable named "fullName",
        const fullName = document.createElement("h2");

        // create an img element and store it in a variable named "portrait",
        const portrait = document.createElement("img");

        // populate the heading element with the prophet's full name using a template string to build the full name,
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // build the image element by setting the src, alt, loading, width, and height attributes using setAttribute().
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of: ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("width", "440");

        // Add the Date of Birth and Place of Birth as shown in the screenshot at the start of this activity.
        const birthDate = document.createElement("p");
        const birthPlace = document.createElement("p");

        birthDate.textContent = `Birth Date: ${prophet.birthdate}`;
        birthPlace.textContent = `Birth Place: ${prophet.birthplace}`;


        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);
        cards.appendChild(card);
    });
}


// Call the function getProphetData() in the main line of your .js code to test the fetch and response
getProphetData();