const container = document.querySelector("#technologies-container");

const url = "https://raw.githubusercontent.com/brivanmito/wdd231/main/final-project/data/technologies.json";

export function LoadTechnologies() {

    FetchApi();

}

async function FetchApi() {
    try {

        const response = await fetch(url);

        const data = await response.json();

        DisplayTechnologies(data.technologies);
        
    } catch (error) {

        console.error("Error fetching Data ", error );
    }
}

function DisplayTechnologies(technologies) {


    technologies.forEach(technology => {

        const div = document.createElement("div");

        const img = document.createElement("img");

        const title = document.createElement("p");

        img.setAttribute("src", technology.imageUrl);
        img.setAttribute("alt", `${technology.title} Logo`);

        title.textContent = technology.title;

        div.append(img, title);

        container.appendChild(div);
    });

}


