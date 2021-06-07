//if the name more than 12 char or less than 6 char // Please Enter Valid Name -->
var btn = document.getElementById('btn-submit');



var myfun = function myFunction()

{
    var yourNameVar = document.getElementById('yourName').value;
    var yourEmailVar = document.getElementById('yourEmail').value;
    var yourPasswordVar = document.getElementById('yourPassword').value;
    var emailFinder = yourEmailVar.search("@")
    var spaceFinder = yourPasswordVar.search(" ")
    var messageBox1 = document.getElementById('message1');
    var messageBox2 = document.getElementById('message2');
    var messageBox3 = document.getElementById('message3');
    if (yourNameVar.length > 12) {
        messageBox1.innerText = "The name is more than 12 char Please Enter Valid Name";
    } else {
        messageBox1.innerText = "";
    }
    if (yourNameVar.length < 6) {
        messageBox1.innerText = "The name is less than 6 char Please Enter Valid Name";
    } else {
        messageBox1.innerText = "";
    }
    if (yourNameVar.length == 0) {
        messageBox1.innerText = "Please Enter Your Name";
    }
    if (emailFinder == -1) {
        messageBox2.innerText = "Enter valid Email";
    } else {
        messageBox2.innerText = "";
    }
    if (yourEmailVar.length == 0) {
        messageBox2.innerText = "Please Enter Email"
    }
    if (spaceFinder !== -1) {
        messageBox3.innerText = "No space Allowed";
    } else {
        messageBox3.innerText = "";
    }
    if (yourPasswordVar.length == 0) {
        messageBox3.innerText = "Please Enter Your Password"
    }
}
btn.onclick = myfun
var myfun1 = function myFunction()

{
    var yourNameVar = document.getElementById('yourName').value;
    var messageBox1 = document.getElementById('message1');

    if (yourNameVar.length > 12) {
        messageBox1.innerText = "The name is more than 12 char Please Enter Valid Name";
    } else {
        messageBox1.innerText = "";
    }
    if (yourNameVar.length < 6) {
        messageBox1.innerText = "The name is less than 6 char Please Enter Valid Name";
    } else {
        messageBox1.innerText = "";
    }
    if (yourNameVar.length == 0) {
        messageBox1.innerText = "Please Enter Your Name";
    }
}

var myfun2 = function myFunction()

{
    var yourEmailVar = document.getElementById('yourEmail').value;
       var emailFinder = yourEmailVar.search("@")
     var messageBox2 = document.getElementById('message2');
  
      if (emailFinder == -1) {
        messageBox2.innerText = "Enter valid Email";
    } else {
        messageBox2.innerText = "";
    }
    if (yourEmailVar.length == 0) {
        messageBox2.innerText = "Please Enter Email"
    }
  
}

var myfun3 = function myFunction()

{
    var yourPasswordVar = document.getElementById('yourPassword').value;
    var messageBox3 = document.getElementById('message3');
    var spaceFinder = yourPasswordVar.search(" ")
    
    if (spaceFinder !== -1) {
        messageBox3.innerText = "No space Allowed";
    } else {
        messageBox3.innerText = "";
    }
    if (yourPasswordVar.length == 0) {
        messageBox3.innerText = "Please Enter Your Password"
    }
}







var myFirstinput = document.getElementById('yourName')
 

myFirstinput.onchange=  myfun1

var mySecondInput =document.getElementById('yourEmail')
var yourEmailVar = document.getElementById('yourEmail').value;

mySecondInput.onchange=  myfun2

var myThirdInput = document.getElementById('yourPassword')
var yourPasswordVar = document.getElementById('yourPassword').value;

myThirdInput.onchange=  myfun3


