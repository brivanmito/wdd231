const container = document.querySelector("#section-certificates");

const url = "https://raw.githubusercontent.com/brivanmito/wdd231/main/final-project/data/certificates.json";

export function LoadCertificates() {

    FetchApi();

}

async function FetchApi() {
    try {

        const response = await fetch(url);

        const data = await response.json();

        DisplayCertificates(data.certificates)
        
    } catch (error) {

        console.error("Error fetching Data ", error );
    }
}

function DisplayCertificates(certificates) {


    technologies.forEach(technology => {

        const div = document.createElement("div");

        const img = document.createElement("img");

        const title = document.createElement("p");

        img.setAttribute("src", technology.imageUrl);
        img.setAttribute("alt", `${technology.title} Logo`);
        img.setAttribute("height", "44");
        img.setAttribute("width", "44");
        img.setAttribute("loading", "lazy");

        title.textContent = technology.title;

        div.append(img, title);

        container.appendChild(div);
    });

}



