const companySectionElement = document.querySelector("#company-section");

const apiUrl = "https://raw.githubusercontent.com/brivanmito/wdd231/main/chamber/data/members.json";


function GetRandomQuantity() {

    const minNum = 2;
    const maxNum = 3;


    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

}

async function GetAPI() {
    try {

        const response = await fetch(apiUrl);

        const data = await response.json();

        return data;
        
    } catch (error) {

        console.error("Error fetching Data ", error );
    }
}


async function GetMembersSpotligth() {

    // Get the seed for rabndom companys
    
    const quantityMembers = GetRandomQuantity();

    const dataMembers = await GetAPI();

    const silverMembers = GetMembersByCategory(dataMembers, "silver");

    const goldMembers = GetMembersByCategory(dataMembers, "gold");

    const membersChosen = silverMembers.concat(goldMembers);

    // Random Array

    const randomArray = membersChosen.sort(() => Math.random() - 0.5);

    

    for (let i = 0; i < quantityMembers; i++) {


        PopulateData(randomArray[i]);



    }



    
}

function PopulateData(arrayInfo) {

    // Create a DIV element 
    const divElement = document.createElement("div");

    const h3Element = document.createElement("h3");

    const pdescription = document.createElement("p");

    const divContainerImgText = document.createElement("div");

    const photoLogo = document.createElement("img");

    const pinfoBussiness = document.createElement("p");

    h3Element.textContent = arrayInfo.name;

    pdescription.textContent = arrayInfo.tagline;


    console.log(arrayInfo.name);
    console.log(arrayInfo.tagline);





}

function GetMembersByCategory(datamembers, category) {

    return datamembers.members.filter(m => m.membershiplevel.toLowerCase() === category.toLowerCase());
}

function PopulateMembersSpotLigth() {

}

GetMembersSpotligth();