const scriptURL = 'https://script.google.com/macros/s/AKfycbx9KfUlhPW8Mh2pj1WpTP_nbw1JKU3tByfpnsg9IchYlMH2Z2vskZ8h1YCcH-rC1wh5/exec'
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