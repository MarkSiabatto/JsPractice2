// DOM - Document Object Model

let alertBtn= document.getElementById("alertBtn");

const alertWindow =()=>{
    alert("Test~!")
}

// onClicks should be last in the JS file by good practices

alertBtn.onclick=function (){
    alertWindow();
}