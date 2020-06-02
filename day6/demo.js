function validate(){
    var mob=document.getElementById('num'),value;
    var user=document.getElementById('username').value;
    var email=document.getElementById('emailid').value;
    var roll=document.getElementById('rno').value;
    var m=/^[6-9][0-9]{9}$|^[0][6-9][0-9]{9}$|^[+][9][1][6-9][0-9]{9}$/;
    var e=/^[a-zA-Z0-9._-]{6,12}[@][a-z]{3,15}[.][a-z]{2,6}$/;
    var r=/^[2][2][1][7][1][0][3][0][0-9]{2}[0-9]{3}$/;
    if(mob=='' || user=='' || email==''|| roll==''){
        window.alert('please enter all fields');
        return false;
    }
    else{
        if(m.test(mob)&&e.test(emailid)&&r.test(roll)){
            window.alert('valid');
            return true;
        }
        else{
            window.alert('invalid');
            return false;
        }
    }
}