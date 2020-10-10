function validation(){
	var Name =document.getElementById("Name").value;
	var Email Adress =document.getElementById("Email Adress").value;
	var message =document.getElementById("message").value;
    var error_message=document.getElementById("error_message");
    var text;
    
    error_message.style.padding="10px";

    if(name.length <5){
    	text = "Please Enter Valid Name";
    	error_message.innerHTML=text;
    	return false;
    }
    if(emailadress.indexof("@") == -1 || emailadress.length <6){
    	text = "Please Enter Valid Email Adress";
    	error_message.innerHTML = text;
    	return false;
    }
    if(message.length <=140){
    	text = "Please Enter More Than 140 Characters";
    	error_message.innerHTML=text;
    	return false;
    }
    alert("Form Submitted Sucessfully!") 
    return true;
}