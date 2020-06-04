function validate() {
    var result = "";
    result += validateName();
    result += validatedob();
    result += validatemb();
    result += validateEmail();
    result += validatePassword();
    result += validateTerms();
    result+=address();
    if (result == "") return true;
    else alert("Validation Result:\n\n" + result);
  
    return false;
  }
  
  function validateName() {
    var name = document.getElementById("us").value;
    if(name=="")
    return "please enter your name\n";
    if (name.length <= 3) return "Name should be at least three characters.\n";
    else return "";
  }
  function validatedob() {
    var d = document.getElementById("dt").value;
    var reg = /^(0[1-9]|[1-2][0-9]|3[0-1])[/](0[1-9]|1[1-2])[/]([19|20][0-9]{3})$/;
    if(d=="")
    return "please enter dob";
    if (reg.test(d)) {
      return "";
    } else return "Enter Valid DOB in dd/mm/yyyy Format.\n";
  }
  function validatemb() {
    var mb = document.getElementById("mn").value;
    var g = /^[6-9][0-9]{9}$/;
    if(mb=="") 
    return "enter your mobile number\n";
    if (g.test(mb)) {
      return "";
    } else {
      return "Enter Valid Mobile number.\n";
    }
  }
  
  function validatePassword() {
    var password = document.getElementById("ps").value;
    var retype = document.getElementById("rps").value;
    var pss = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{6,12}$/;
    if (pss.test(password)) {
      return "";
    }
    if (password != retype) {
      return "Passwords do not match.\n";
    } else return "Password should be at least 6 characters.\n";
  }
  
  function validateEmail() {
    var email = document.getElementById("eid").value;
    var retype = document.getElementById("reid").value;
    if(email==""||retype=="")
    return "eneter email id\n";
    var emm = /^[a-zA-z0-9._-]{6,12}[@][a-z]{3,15}[.][a-z]{2,6}$/;
  
    if (emm.test(email)) {
      return "";
    }
    if (email != retype) {
      return "Email addresses do not match.\n";
    } else return "Enter Correct Email.\n";
  }
  function validateTerms() {
    var terms = document.getElementById("tp").value;
    if (!terms.checked)
      return "Please accept the Terms of Service and Privacy Policy.\n";
    else return "";
  }
  function address(){
    var address=document.getElementById('add').value;
    if(address=="")
    return "please enter address";
  }
  function myFunction() {
    document.getElementById("f1").reset();
  }