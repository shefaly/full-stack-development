function myFun() {
    var date = document.getElementById("dateob").value;
    reg = /^(0[1-9]|[1-2][0-9]|3[0-1])[/](0[1-9]|1[1-2])[/]([19|20][0-9]{3})$/;
    var dtc = new Date();
    var cd = reg.test(date);
    var parts = date.split("/");
    var dtDOB = new Date(parts[0] + "/" + parts[1] + "/" + parts[2]);
    var sh = dtc.getFullYear() - dtDOB.getFullYear();
    if (cd && sh >= 18) {
     alert('validated');
    } else {
      alert('not validated');
    }
  }