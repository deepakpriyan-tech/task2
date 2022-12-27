function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function myWow() {
  var x = document.getElementById("cpassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function registration() {
 var firstname = document.getElementById("firstname").value;
 var lastname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
 var password = document.getElementById("password").value;
   var cpassword = document.getElementById("cpassword").value;

  var password_expression =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
  var letter = /^[A-Za-z]+$/;
  var filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

 if (firstname === "") {
   alert("Please enter your first name");
  } else if (lastname === "") {
   alert("Please enter your last name");
  } else if (email === "") {
     alert("Please enter your user email id");
  } else if (password === "") {
   alert("Please enter the password");
  } else if (cpassword === "") {
   alert("Enter Confirm Password");
  } else if (!password_expression.test(password)) {
   alert(
      "Upper case, Lower case, Special character and Numeric letter are required in Password filed"
   );
 } else if (password !== cpassword) {
  alert("Password not Matched");
 } else if (document.getElementById("cpassword").value.length < 4) {
   alert("Password minimum length is 4");
   } else if (document.getElementById("cpassword").value.length > 10) {
   alert("Password max length is 10");
  } else {
    alert("Thank You for Register");



 }
window.navigate("results.html");

}


function More()
{
    window.location.href='/results.html';


}

function redirect(){
	window.location.href='/results.html';
}
