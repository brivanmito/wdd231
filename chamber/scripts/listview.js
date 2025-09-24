const gridBtn = document.querySelector("#gridselection");
const listBtn = document.querySelector("#listselection");
const container = document.querySelector("#directory-container");

gridBtn.addEventListener("click", () => {
    container.classList.remove("list-view");
    container.classList.add("grid-view");
});

listBtn.addEventListener("click", () => {
    container.classList.remove("grid-view");
    container.classList.add("list-view");
});
