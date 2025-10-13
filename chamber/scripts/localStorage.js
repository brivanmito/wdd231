const localStg = localStorage.getItem("last-visit");

const div = document.querySelector("#overlay-msg");

const p = document.createElement("p");

// Create kc


function verifyVisit() {

    const now = Date.now();

    if (!localStg) {

        p.textContent = "Welcome! This is your first Visit!";

    } else {

        const lastVisitTime = parseInt(localStg, 10);

        const difMs = now - lastVisitTime;

        const diffDays = Math.floor(difMs / (1000 * 60 * 60 * 24));

        if (difMs < 100 * 60 * 60 * 24) {

            p.textContent = "Back so soon! Awesome!";

        } else {

            const dayText = diffDays === 1 ? "day" : "days";

            p.textContent = `You last visited ${diffDays} ${dayText} ago.`;

        }

        console.log(diffDays);


    }

    div.append(p);

    saveVisit(now);
}

function saveVisit(now) {

    localStorage.setItem("last-visit", now.toString());
}

verifyVisit();