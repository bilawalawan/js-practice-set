
// let myUser = [];
// function detail() {
//   let userName = document.getElementById('name').value;
//   let userEmail = document.getElementById('email').value;
//   let userPhoneNumber = document.getElementById('number').value;
//   let head1 = document.getElementById('head1')
//   let para = document.getElementById('para')
//   let para1 = document.getElementById('para1')
//   let user = {
//     name: userName,
//     email: userEmail,
//     number: userPhoneNumber
//   }
//   myUser.push(user);
//   for (let index = 0; index < myUser.length; index++) {
//     const users = myUser[index];

//    var myhead = head1.innerHTML = `<h1>Name: ${users.name} </h1>`
//   var myPara = para.innerHTML = `Email: ${users.email}`
//   var mypara1 = para1.innerHTML = `Phone: ${users.number}`
//    var div = myhead + myPara + mypara1;
//   }
//   document.getElementById("main1").innerHTML = div
// }

// =======================================================================================
// =======================================================================================



// Password Strength Checker Small Project

function checkPassword() {

  let mypassword = document.getElementById('password').value;
  let para = document.getElementById('para');
  let special_characters = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/

  

  // Check Capital letter include or not

  if (mypassword.match(/[A-Z]/)) {
    // console.log("ok");
    para.innerHTML = "Good"
    para.style.color = "green"
  }
  else {
    para.innerHTML = "*Must enter cpaital letter"

  }

  // check special letter include or not
  if (mypassword.match(special_characters)) {
    
  }
  else {
    para.innerHTML = "Must enter special"
  }


  // Check password lenght
  if (mypassword.length <= 8) {
    console.log("wrong");
    para.innerHTML = 'insert atleast one 8 number'
    para.style.color = "Red"
  }

}





