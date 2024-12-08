


const form = document.getElementById("subscription_form");
const email  = document.getElementById("email");
const successMessage  = document.querySelector(".success_message");
const newsletter = document.querySelector('.newsletter');
const validationMessage = document.querySelector('.validation_message');
const verifiedEmail = document.querySelector('.verified_email');
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const handleSubmit = (e) => {

  e.preventDefault();
  
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  
   if(email.value == "")
   {
    email.style.backgroundColor = "rgba(255, 123, 114, 0.16)"
    email.style.borderColor = "rgba(255, 123, 114, 0.67)"
    email.style.color = "rgba(255, 123, 114, 0.98)"
    email.style.fontWeight = "500"
    validationMessage.classList.add('invalid')
    validationMessage.innerHTML = "Email is Required";
   }
  else if (data.email.match(validRegex))
   {

    successMessage.classList.add('active')
    newsletter.style.display = "none";
    verifiedEmail.innerHTML = data.email;

   }else{

        email.style.backgroundColor = "rgba(255, 123, 114, 0.16)"
        email.style.borderColor = "rgba(255, 123, 114, 0.67)"
        email.style.color = "rgba(255, 123, 114, 0.98)"
        email.style.fontWeight = "500"
        validationMessage.classList.add('invalid')

    }
};


form.addEventListener("submit", handleSubmit);