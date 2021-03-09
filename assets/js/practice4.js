// Variables

let enterInfo=document.getElementById("enterInfo");
let name1=document.getElementById("name1");
let age=document.getElementById("age");
let docId=document.getElementById("docId");
let phoneNum=document.getElementById("phoneNum");

// Function
const saveInfo=()=>{
    let saveName=prompt("Please Enter Your Name: ")

    if (saveName === "") {
        alert("Please input your name before continuing!");
    } else {
        name1.innerHTML= "Name: "+ saveName;
    }
    let saveAge=prompt("Please Enter Your Age: ")

    if (saveAge === "") {
        alert("Please input your age before continuing!");
    } else {
        age.innerHTML="Age: "+ saveAge;
    }
    let saveDoc=prompt("Please Enter Your Document Number: ")

    if (saveDoc === "") {
        alert("Please input your document number before continuing!")
    } else {
        docId.innerHTML="Document Id: "+saveDoc;
    }
    let savePhone=prompt("Please Enter Your Phone Number: ")

    if (savePhone === "") {
        alert("Please enter your phone number before continuing!")
    } else {
        phoneNum.innerHTML="Phone Number: "+savePhone;
    }
}

// OnClicks
enterInfo.onclick=function (){
    saveInfo();
}