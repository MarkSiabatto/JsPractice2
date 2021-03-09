// Variables

let nameBtn=document.getElementById("nameBtn");
let hName=document.getElementById("hName");

// Function
const saveName=()=>{
    let savedName=prompt("Please Enter Your Name: ")
    console.log(savedName);
    if (savedName === "") {
        alert("Please input your name before continuing!");
    } else {
        hName.innerHTML= "Welcome: "+ savedName;
    }
}

// OnClicks
nameBtn.onclick=function (){
    saveName();
}