/* const scriptURL = 'https://script.google.com/macros/s/AKfycbx9KfUlhPW8Mh2pj1WpTP_nbw1JKU3tByfpnsg9IchYlMH2Z2vskZ8h1YCcH-rC1wh5/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Your message was sent!"
        setTimeout(function(){
        msg.innerHTML = ""
        }, 5000)

        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
*/

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const msg = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Name: ${fullName.value}<br> Email: ${email.value}<br> Message: ${msg.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "alexis.ayuso.bz@gmail.com",
        Password : "FE1431E032809F9FF3667C983B33D1DB88A4",
        To : 'alexis.ayuso.bz@gmail.com',
        From : "alexis.ayuso.bz@gmail.com",
        Subject : "Message from Your Website Portfolio",
        Body : bodyMessage
    }).then(
      message => {
        if (message = "OK") {
            Swal.fire({
                title: "Success!",
                text: "Email sent successfully!",
                icon: "success"
              });
        }
      }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});
