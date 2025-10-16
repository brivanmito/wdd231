import { AddHideNavigation } from "./navigationmenu.js";

import { LoadTechnologies } from "./technologies.js";

import { LoadEducation } from "./education.js";

import { LoadCertificates } from "./certificates.js";

import { verifyVisit } from "./localstorage.js";

import { GetYear } from "./date.js";

import { InitWayfinding } from "./wayfinding.js";

InitWayfinding();

AddHideNavigation();

LoadTechnologies();

LoadEducation();

LoadCertificates();

verifyVisit();

GetYear();





