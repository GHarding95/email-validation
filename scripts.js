function validation(){
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");

    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email.match(pattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your Email Address is Valid";
        text.style.color = "#00ff00";
    }
    else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Please Enter Valid Email Address";
        text.style.color = "#ff0000";
    }

    if(email == ""){
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
        text.style.color = "#00ff00";
    }

};


// Console input to remove banned characters in an Array without Regex

// var emails = ["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"];
// var bannedChar = ['+'];

// emails.forEach((a, e) => {
//     emails[e] = a.replace(bannedChar, '');
// });

// console.log(emails);

//var emails = ["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"];

// var str = "+sample@email.com";
// var res = str.split("@");
// console.log(res[0].replace("+", "")); //finds first instance of "+" and replaces with "" - returns sample
//console.log(res[1]); // returns email.com

// var emails = ["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"];
// var arr = [];

// for(i = emails; i < emails.length; i++){
//     var obj = {
        
//     };

//     arr.push(obj);
// }

// console.log(obj);