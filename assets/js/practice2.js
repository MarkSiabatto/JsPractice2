// Variables

let nameBtn=document.getElementById("nameBtn");
let hName=document.getElementById("hName");

// Function
const saveName=()=>{
    let savedName=prompt("Please Enter Your Name: ")
    hName.innerHTML= "Welcome: "+ savedName;
}

// OnClicks
nameBtn.onclick=function (){
    saveName();
}