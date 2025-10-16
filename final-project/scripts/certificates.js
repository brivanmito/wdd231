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

        console.error("Error fetching Data ", error);
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

        button.value = certificate.id;

        // img.setAttribute("src", technology.imageUrl);
        // img.setAttribute("alt", `${technology.title} Logo`);
        // img.setAttribute("height", "44");
        // img.setAttribute("width", "44");
        // img.setAttribute("loading", "lazy");

        p.innerHTML = `<b>${certificate.name}</b><br>Awarded: ${certificate.awarded}<br>Institution: ${certificate.institution}`;

        div.append(p, button);

        container.appendChild(div);


        // CREATE MODALS

        button.addEventListener("click", () => {

            CreateModals(certificate);

        });
        

    });

}

function CreateModals(certificate) {

    const modal = document.createElement("dialog");

    const divheader = document.createElement("div");

    const divparagraph = document.createElement("div");

    modal.classList.add("course-dialog");

    const titleCertificate = document.createElement("p");

    const institutionName = document.createElement("h3");

    const buttonClose = document.createElement("button");

    const date = document.createElement("p");

    const descriptionCetificate = document.createElement("p");

    const topicsCetificate = document.createElement("p");

    // "id": 1,
    //   "name": "Front-End Web Development",
    //   "awarded": 2021,
    //   "topics": ["HTML", "CSS", "JavaScript", "Responsive Design"],
    //   "institution": "Coursera",
    //   "description": "A comprehensive course
    institutionName.innerHTML = `Institution: ${certificate.institution}`;
    titleCertificate.innerHTML = `<b>Certificate:</b> ${certificate.name}`;
    date.innerHTML = `<b>Awarded: </b> ${certificate.awarded}`;
    descriptionCetificate.innerHTML = `<b>Description: </b>${certificate.description}`;
    topicsCetificate.innerHTML = `<b>Topics: </b>${certificate.topics.join(", ")}`;

    divheader.append(institutionName, buttonClose);

    divparagraph.append(titleCertificate, date, descriptionCetificate, topicsCetificate);

    modal.append(divheader, divparagraph);

    document.body.appendChild(modal);

    modal.showModal();

    buttonClose.addEventListener("click", () => {

        modal.close();

        modal.remove();

    });


}



