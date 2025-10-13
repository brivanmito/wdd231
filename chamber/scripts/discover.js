const discoverContainer = document.querySelector("#discover-places");


const apiUrl = "https://raw.githubusercontent.com/brivanmito/wdd231/main/chamber/data/places.json";


async function GetApi() {
    try {

        const response = await fetch(apiUrl);

        const data = await response.json();

        CreateCards(data);
        
    } catch (error) {

        console.error("Error fetching Data ", error );
    }
}

function CreateCards(place) {

    place.places.forEach((place) => {
        
        const div = document.createElement("div");

        const title = document.createElement("h2");

        const figure = document.createElement("figure");


        const img = document.createElement("img");

        const address = document.createElement("p");


        const paragraph = document.createElement("p");

        const button = document.createElement("button");



        title.textContent = place.name;


        img.setAttribute("src", place.imageUrl);
        img.setAttribute("width", "300");
        img.setAttribute("height", "200");
        img.setAttribute("loading", "lazy");

        figure.append(img);


        paragraph.textContent = place.description;
        paragraph.classList.add("description-discover");

        address.textContent = place.address;

        button.textContent = "Learn more";

        div.append(title, figure, paragraph, address, button);

        discoverContainer.append(div);

    });
}


GetApi();