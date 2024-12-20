let myFunction = ()=> {
    let ulContainer = document.querySelector("#ulContainer");
    if(ulContainer.style.display === "none") {
        ulContainer.style.display = "inline";
    } else {
        ulContainer.style.display = "none";
    }
}