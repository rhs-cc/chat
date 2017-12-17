var name = prompt("Please enter your name");




if (name === "Tamir" || name ==="Fin" || name ==="Dom" || name ==="Jack" || name ==="Nick"){
var UserReal = true;
}

if (UserReal != true) {
name = "UserError";

}
function btnclick() {
  var firebaseRef = firebase.database().ref();

var unix = Date.now();

var maintext = document.getElementById('messagetext').value;

firebaseRef.child(name + "/" + unix ).set(maintext);

document.getElementById("messagetext").value = "";
}


function chat1() {
  alert("chat1")
}

function chat2() {
  alert("chat2")
}

function chat3() {
  alert("chat3")
}
