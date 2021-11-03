
 

let fName = document.getElementById("fName")
let email = document.getElementById("txt-email")
let message = document.getElementById("txt-textarea")
let contactForm = document.getElementById('contact-form')


contactForm.addEventListener('submit',(e) => {
  e.preventDefault()

  let formData = {
    fName: fName.value,
    email: email.value,
    message: message.value
  }

  let xhr = new XMLHttpRequest();
  xhr.open('POST','/');
  xhr.setRequestHeader('content-type', 'application/json')
  xhr.onload = function(){
    console.log(xhr.responseText);
    if(xhr.responseText == 'success'){
      Swal.fire({
        title: '<strong>HTML <u>example</u></strong>',
        icon: 'info',
        html:
          'You can use <b>bold text</b>, ' +
          '<a href="//sweetalert2.github.io">links</a> ' +
          'and other HTML tags',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
      })
      fName.value = '',
      email.value = '',
      message.value = ''
    } else{
      alert("Something went wrong")
    }
  }

  xhr.send(JSON.stringify(formData))

})