let btnMod = document.querySelector("#modal");
let btnClose = document.querySelector("#close");
let taxValue = document.querySelector("h3");

let errorIn = document.querySelector("#exclamIn");
errorIn.style.visibility = "hidden";
let errorEx = document.querySelector("#exclamEx");
errorEx.style.visibility = "hidden";
let errorDed = document.querySelector("#exclamDed");
errorDed.style.visibility = "hidden";
let ageError = document.querySelector("#age");
ageError.style.visibility = "hidden";

let myInputIn = document.getElementById("income");
let myInputEx = document.getElementById("extra");
let myInputDed = document.getElementById("deduction");

btnMod.disabled = true;

myInputIn.addEventListener("input", () => {
    if(Number.isInteger(Number(myInputIn.value)) == false){
        errorIn.style.visibility = "visible";
        btnMod.disabled = true;
    }
    else{
        errorIn.style.visibility = "hidden";
        btnMod.disabled = false;
    }
})

myInputEx.addEventListener("input", () => {
    if(Number.isInteger(Number(myInputEx.value)) == false){
        errorEx.style.visibility = "visible";
        btnMod.disabled = true;
    }
    else{
        errorEx.style.visibility = "hidden";
        btnMod.disabled = false;
    }
})

myInputDed.addEventListener("input", () => {
    if(Number.isInteger(Number(myInputDed.value)) == false){
        errorDed.style.visibility = "visible";
        btnMod.disabled = true;
    }
    else{
        errorDed.style.visibility = "hidden";
        btnMod.disabled = false;
    }
})


btnMod.addEventListener("click", showModal)
btnClose.addEventListener("click", hideModal)

function showModal(){

    let ageGroup = document.querySelector("select").value;

    if(ageGroup == ""){
        ageError.style.visibility = "visible";
    }

    else{
    ageError.style.visibility = "hidden";
    document.querySelector(".pop").classList.add("overlay");

    let annualIncome = document.querySelector("#income").value;
    annualIncome = Number(annualIncome);
    let extraIncome = document.querySelector("#extra").value;
    extraIncome = Number(extraIncome);
    let deduction = document.querySelector("#deduction").value;
    deduction = Number(deduction);
    

    let tax;
    let totalIncome = annualIncome + extraIncome - deduction;

    if(totalIncome > 800000){

        switch(ageGroup){
            case 'A': tax = 0.3*(totalIncome-800000);
                      break;
            case 'B': tax = 0.4*(totalIncome-800000);
                      break;
            case 'C': tax = 0.1*(totalIncome-800000);
                      break;
            default: tax=0;                    
                     break;

        }
    }
    else {
        tax=0;
    }

    let finalIncome = totalIncome - tax;
    //console.log(annualIncome,typeof(annualIncome), extraIncome,typeof(extraIncome), deduction,typeof(deduction), totalIncome,typeof(totalIncome), finalIncome,typeof(finalIncome));

    taxValue.innerText = (finalIncome).toLocaleString();

  }
}

function hideModal(){   
   
 document.querySelector(".pop").classList.remove("overlay");

 setTimeout(() => {
    window.location.reload(true);
 }, 280)
    
}