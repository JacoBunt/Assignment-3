
function validateForms(){
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("e-mail");
    const phoneNumber = document.getElementById("phoneNumber");
    const pattern = /^\d{10}$/;
    const submitButton = document.getElementById("submit-button");
    const message = document.getElementById("message-panel");
    

    submitButton.addEventListener("click", function validate(event) {
        event.preventDefault();
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("e-mail").value;
        const phoneNumber = document.getElementById("phoneNumber").value.trim();
       

       if(!firstName || !lastName || !email || !phoneNumber){
            message.style.backgroundColor = "red";
            message.style.color = "white";
            message.innerHTML ="Please fill out ALL required fields."

        } else if(!email.endsWith("@dal.ca")){
            message.style.backgroundColor = "red";
            message.style.color = "white";
            message.innerHTML ="Please provide a Dalhousie e-mail address.";

        }else if(phoneNumber.length > 10 && pattern.test(phoneNumber)){
            message.style.backgroundColor = "red";
            message.style.color = "white";
            message.innerHTML ="Phone number must be 10 digits, written with hyphens.";

        } else if(phoneNumber.length < 10){
            message.style.backgroundColor = "red";
            message.style.color = "white";
            message.innerHTML ="Phone number must be 10 digits.";

        } else{
            message.style.backgroundColor = "green";
            message.style.color = "white";
            message.innerHTML ="Success!";
        }
        
        

        
    });

}
validateForms();

const button1 = document.querySelector("#button1");
button1.addEventListener("click",()=>{
    body.style.backgroundColor = "green";

});



