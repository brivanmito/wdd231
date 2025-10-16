const container = document.querySelector("#section-projects");

const url = "https://raw.githubusercontent.com/brivanmito/wdd231/main/final-project/data/projects.json";

export function LoadProjects() {

    FetchApi();

}

async function FetchApi() {
    try {

        const response = await fetch(url);

        const data = await response.json();

        DisplayProjects(data.projects)
        
    } catch (error) {

        console.error("Error fetching Data ", error);
    }
}

function DisplayProjects(projects) {


    projects.forEach(project => {

        const div = document.createElement("div");

        // const img = document.createElement("img");

        const p = document.createElement("p");

        const button = document.createElement("button");

        const img = document.createElement("img");

        img.setAttribute("src", `${project.url}`);
        img.setAttribute("alt", `${project.name}`);
        img.setAttribute("width", 300);
        img.setAttribute("heigth", "auto");
        img.setAttribute("loading", "lazy");


        button.textContent = "View details";


        button.value = project.title;

        

        p.innerHTML = `<b>${project.title}</b><br>Awarded: ${project.year}<br>Institution: ${project.company}`;

        div.append(img, p);

        container.appendChild(div);



    });

}

