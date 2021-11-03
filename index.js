let email = document.getElementById("txt-email")
var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = Swal.fire({
      position: 'top-end',
      icon: `success`,
      title: `Thank you ${email.value}, Your Message has been sent`,
      showConfirmButton: false,
      timer: 2500
    });
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)


