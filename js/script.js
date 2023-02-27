const locationElement = document.querySelector(".header__icon--location");
const bottomSheet = document.querySelector(".screen__sheet");


let sheetActive = false;
locationElement.addEventListener("click", ()=>{
    if(sheetActive){
        bottomSheet.style.height = "0%";
        sheetActive = false;
    }else{
        bottomSheet.style.height = "35%";
        sheetActive = true;
    }
});