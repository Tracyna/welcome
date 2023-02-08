const container = document.querySelector(".container"), 
  pwShowhide = document.querySelectorAll(".showhidePw"),
  pwFields = document.querySelectorAll(".password"),
  
  pwShowhide.forEach(eyeicon =>{
    eyeIcon.addEventListener("click",() =>{
      pwFields.forEach(pwField =>{
        if(pwField.type ==="password"){
          pwField.type = "text";}
          else
          pwField.type = "password";
        }
      })
    })
  })