function validate(){
    var result = "";	
	result+= validateName(); 	
    result+= validateEmail();
    result+= rollno();
    result+=feedback();
    
    if (result == "")  return true;
	
	else alert("Validation Result:\n\n" + result);
	return false;	
}

   function validateName(){
    var name=document.getElementById('txtname').value;
    var na=/^[a-zA-Z0-9]+([@._]?[a-zA-Z0-9]+)*$/;
    if(name=="")
{
return "Please Enter Your Name\n";

   }
   if(!na.test(name))
   return "invalid name\n";
   return "";
}
   function validateEmail(){
 var ei=document.getElementById('txtemail').value ;
 if(ei=="")
return "Please Enter Your email id\n";


var reg=/^[a-zA-Z0-9._-]{6,12}[@][a-z]{3,15}[.][a-z]{2,6}$/;
if(!reg.test(ei))  
    return 'invalid emailid\n';
    return "";
   }
   function rollno(){
       var number=document.getElementById('num').value;
       if(number=="")
   return "Please Enter Your roll no\n";
       var r=/^[2][2][1][7][1][0][3][0][0-9]{2}[0-9]{3}$/;
       if(!r.test(number))
           return 'invalid roll no\n';
       return "";
   }
   function   feedback()
   {
       var fb=document.getElementById('feed').value;
       if(fb=="")
       return "please enter your feedback";
   }
   function myFunction() {
    document.getElementById("f1").reset();
  }
   