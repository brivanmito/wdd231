const localStg = localStorage.getItem("last-visit");

const localStgCountVisit = localStorage.getItem("count-visit");

const div = document.querySelector("#updated");

const p = document.createElement("p");

const pcount = document.createElement("p");

// Create kc


export function verifyVisit() {

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

        


    }

    let acum = parseInt(localStgCountVisit, 10) || 0;

    acum += 1;

    pcount.innerHTML = `Number of visits: ${acum}`;

    div.append(p, pcount);

    saveVisit(now, acum);
}

function saveVisit(now, acum) {

    localStorage.setItem("last-visit", now.toString());
    localStorage.setItem("count-visit", acum);
}

verifyVisit();