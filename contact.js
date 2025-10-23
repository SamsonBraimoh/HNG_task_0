const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    
    const error = document.getElementById("errorMessage");
    const success = document.getElementById("success");

    if (!name||!email||!subject||!message){
        error.textContent = "***Please, fill in all fields";
        success.textContent = "";
    }else{
       
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
    
    if (!emailPattern.test(email)) {
        error.textContent = "***Pease enter a valid email address (e.g., name@example.com)";
        success.textContent = ""
        return;
    }

    if (message.length < 10) {
        error.textContent = "***Message must be at least 10 characters long.";
        success.textContent = ""
    return;
      }
        success.textContent = "Message sent successfully.";
        // alert("Sent")
        error.textContent = "";
        form.reset();
    }
});