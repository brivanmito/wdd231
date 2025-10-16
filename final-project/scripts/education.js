const container = document.querySelector("#section-education");

const url = "https://raw.githubusercontent.com/brivanmito/wdd231/main/final-project/data/education.json";

export function LoadEducation() {

    FetchApi();

}

async function FetchApi() {
    try {

        const response = await fetch(url);

        const data = await response.json();

        DisplayEducation(data.education);
        
    } catch (error) {

        console.error("Error fetching Data ", error );
    }
}

function DisplayEducation(education) {


    education.forEach(institucion => {

        const divContainer = document.createElement("div");

        const divImg = document.createElement("div");

        const divText = document.createElement("div");

        const img = document.createElement("img");

        const universityName = document.createElement("h3");

        const degreeTitle = document.createElement("p");

        const period = document.createElement("p");

        const languages = document.createElement("p");



        img.setAttribute("src", institucion.urlimg);
        img.setAttribute("alt", `${institucion.name} Logo`);
        img.setAttribute("height", "auto");
        img.setAttribute("width", "100");
        img.setAttribute("loading", "lazy");

        degreeTitle.innerHTML = `<span><b>${institucion.grade_title}</b></span>`;


        universityName.textContent = institucion.name;

        period.innerHTML = `<b>Period:</b> ${institucion.start_year} - ${institucion.end_year}`;

        languages.innerHTML = `<b>Languages:</b> ${institucion.languages.join(", ")}`;

        divImg.append(img);

        divText.append(universityName, degreeTitle, period, languages);

        divContainer.classList.add("university-container");

        divContainer.append(divImg, divText);

        container.append(divContainer);

    });

}


