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


function GetMembersSpotligth() {
    
    const quantityMembers = GetRandomQuantity();

    
}