import { AddHideNavigation } from "./navigationmenu.js";
import { LoadTechnologies } from "./technologies.js";
import { LoadEducation } from "./education.js";
import { LoadCertificates } from "./certificates.js";
import { verifyVisit } from "./localstorage.js";
import { GetYear } from "./date.js";
import { InitWayfinding } from "./wayfinding.js";

document.addEventListener("DOMContentLoaded", () => {
    InitWayfinding();
    AddHideNavigation();
    verifyVisit();
    GetYear();

    // ✅ Llama solo si el contenedor existe
    if (document.getElementById("technologies-container")) {
        LoadTechnologies();
    }

    if (document.getElementById("education-container")) {
        LoadEducation();
    }

    if (document.getElementById("certificates-container")) {
        LoadCertificates();
    }

});
    






