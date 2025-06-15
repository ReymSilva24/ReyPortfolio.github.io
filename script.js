
//menu
const menu = document.querySelector('#menu');
const nav = document.querySelector('.links');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active')
}



//Email

function sendMail(event) {
    event.preventDefault(); // Stop default form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const namePattern = /^[A-Za-z\s]+$/;

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;


    if (!name || !email || !message) {
        alert("❗ Please fill in all fields.");
        return;
    }


    if (!name.match(namePattern)) {
        alert("❗ Name should only contain letters and spaces.");
        return;
    }


    if (!email.match(emailPattern)) {
        alert("❗ Please enter a valid email address.");
        return;
    }

    if (message.length < 10) {
        alert("❗ Message should be at least 10 characters long.");
        return;
    }

    const parms = {
        name: name,
        email: email,
        message: message,
    };

    emailjs.send("service_a25ff0e", "template_5ybxwps", parms)
        .then(function(response) {
            alert("✅ Email sent successfully!");
            console.log("SUCCESS:", response.status, response.text);
        }, function(error) {
            alert("❌ Failed to send email. Please try again.");
            console.error("FAILED:", error);
        });
}

