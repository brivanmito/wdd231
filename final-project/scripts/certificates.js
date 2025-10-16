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


    certificates.forEach(certificate => {

        const div = document.createElement("div");

        // const img = document.createElement("img");

        const p = document.createElement("p");

        const button = document.createElement("button");

        button.textContent = "View details";

        button.classList.add("btn-format");

        button.value = certificate.

        // img.setAttribute("src", technology.imageUrl);
        // img.setAttribute("alt", `${technology.title} Logo`);
        // img.setAttribute("height", "44");
        // img.setAttribute("width", "44");
        // img.setAttribute("loading", "lazy");

        p.innerHTML = `<b>${certificate.name}</b><br>Awarded: ${certificate.awarded}<br>Institution: ${certificate.institution}`;

        div.append(p, button);

        container.appendChild(div);
    });

}



