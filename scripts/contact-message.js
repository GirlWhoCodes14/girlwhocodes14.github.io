const form = document.forms['message-form']
const msg = document.getElementById('js-confirm-msg')

form.addEventListener('submit', e => {
    e.preventDefault()

    msg.innerHTML = "Your message is sending. Wait a moment."
    setTimeout(function(){
    msg.innerHTML = ""
    }, 6000)

    form.reset()
})

function sendEmail() {
    Email.send({
        SecureToken : "03558de4-6837-4d64-b1a3-8bf078120917",
        To : 'alexis.ayuso.bz@gmail.com',
        From : "iamalexisayuso@gmail.com",
        Subject : "Email from " + document.getElementById("name").value + " | Alexis' Website",
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br><br> Message: <br>" + document.getElementById("message").value
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
