
//Create a function using fecth and async await

const url = "https://raw.githubusercontent.com/brivanmito/wdd231/main/chamber/data/members.json";


async function GetMembers() {

    try {

        const response = await fetch(url);

        const data = await response.json();

        DisplayMembers(data.members);
        
    } catch (error) {

        console.error("Error fetching Data ", error );
    }
}

const containerElement = document.querySelector("#directory-container");



const DisplayMembers = (members) => {
    members.forEach(member => {
        
        // CREATE ELEMENTS

        // "name": "Quevedo Photo Club",
        // "address": "TX df. 466Y",
        // "phonenumber": "123456789",
        // "websiteurl": "wwww.quevedophotoclub.com",
        // "imageicon": "https://via.placeholder.com/150x50?text=Logo",
        // "membershiplevel": "gold",
        // "sincemember": ""

        const titleCompany = document.createElement("h2");
        const logoCompany = document.createElement("img");
        const address = document.createElement("p");
        const phoneNumber = document.createElement("p");
        const website = document.createElement("a");
        const levelMembership = document.createElement("p");
        const sincemember = document.createElement("p");

        // CREATE DIV 
        const memberinfo = document.createElement("div");

        // ASSIGN VALUES WITH THE DATA.MEMBERS
        titleCompany.textContent = member.name;
        logoCompany.setAttribute("src", member.imageicon);
        logoCompany.setAttribute("alt", `${titleCompany} Logo`);
        logoCompany.setAttribute("width", "100px");
        logoCompany.setAttribute("height", "100px");
    
        address.textContent = member.address;
        phoneNumber.textContent = member.phonenumber;

        website.textContent = member.websiteurl;
        website.setAttribute("href", member.websiteurl);
        website.setAttribute("target", "_blank");

        levelMembership.textContent = member.membershiplevel.charAt(0).toUpperCase() + member.membershiplevel.slice(1);
        sincemember.textContent = member.sincemember;

        // APPEND TO THE DIV PARENT 
        memberinfo.append(titleCompany, logoCompany, address, phoneNumber, website, levelMembership, sincemember);

        // APPEND TO THE DIRECTORY CONTAINER DIV 
        containerElement.appendChild(memberinfo);


    });
}

GetMembers();

// BOTTONS




// CODE JS FOR SHOWING MEMBERS SPOTLIGTH

const companySectionElement = document.querySelector("#company-section");



