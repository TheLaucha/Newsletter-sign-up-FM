// Cambiar imagen al disminuir tamaño de pantalla

window.addEventListener("resize", changeImage)
window.addEventListener("load", changeImage)

const containerImage = document.querySelector(".containerImage")

function changeImage() {
  var widthWindow = window.innerWidth
  console.log("entra")
  if (widthWindow < 768) {
    containerImage.src = "./assets/images/illustration-sign-up-mobile.svg"
  } else {
    containerImage.src = "./assets/images/illustration-sign-up-desktop.svg"
  }
}

// Manejar envio de formulario

const form = document.querySelector(".form")
const containerForm = document.querySelector(".containerForm")
const containerMessage = document.querySelector(".containerMessage")
const btnMessage = document.querySelector(".btnMessage")
const email = document.querySelector("#email")
const emailTo = document.querySelector(".emailTo")
const invalidMessage = document.querySelector(".invalidMessage")

form.addEventListener("submit", showMessage)
btnMessage.addEventListener("click", showForm)

function showMessage(e) {
  e.preventDefault()
  let validEmail = false
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    validEmail = true
  }

  if (validEmail) {
    invalidMessage.style.display = "none"
    containerForm.style.display = "none"
    containerMessage.style.display = "flex"
    emailTo.textContent = email.value
    form.reset()
  } else {
    email.classList.add("invalid")
    invalidMessage.style.display = "inline-block"
  }
}

function showForm() {
  containerForm.style.display = "flex"
  containerMessage.style.display = "none"
}
