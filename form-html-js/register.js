var inputPassword = document.getElementsByName("password");
var inputRepassword = document.getElementsByName("repassword");
var inputCheckbox = document.getElementsByName("termscheckbox");

document.getElementById("registerForm").addEventListener("submit", function (event) {
    var passwordValue = inputPassword[0].value;
    var repasswordValue = inputRepassword[0].value;
    // var termsCheckboxValue = inputCheckbox[0].value;

    if (passwordValue != repasswordValue ||  passwordValue == '') {
      alert("Mismatch password and repassword, Please insert again!!");
    } else  if (inputCheckbox[0].checked == false) {
      alert("Please check terms and conditions first!!");
    } else {
      alert("OK");
      let form = document.getElementById('registerForm');
      var formData = new FormData(form);
      console.log(formData);
    } 

    event.preventDefault();
  });
