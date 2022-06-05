function Eligibility() {
  let name = prompt("What's your name?");
  let age = prompt("How old are you?");
  if (age <= 18) {
    alert("Sorry," + name + "You cannot join PURE 😢");
  } else {
    alert(
      "Hi," +
        name +
        "Welcome to PURE! 😊 Please provide your username and password"
    );
  }
}
let applyButton = document.querySelector("button");
applyButton.addEventListener("click", Eligibility);

var modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var modal = document.getElementById("id02");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function checkForm() {
  var oldP = document.getElementById("oldP").value;
  var newP = document.getElementById("newP").value;
  var confirmP = document.getElementById("confirmP").value;

  if (oldP != "" && newP != "" && confirmP != "") {
    if (oldP != newP) {
      if (newP == confirmP) {
        return true;
      } else {
        alert("Confirm password is not same as you new password.");
        return false;
      }
    } else {
      alert(" This Is Your Old Password,Please Provide A New Password");
      return false;
    }
  } else {
    alert("All Fields Are Required");
    return false;
  }
}

function resetForm() {
  var oldP = (document.getElementById("oldP").value = "");
  var newP = (document.getElementById("newP").value = "");
  var confirmP = (document.getElementById("confirmP").value = "");
}
