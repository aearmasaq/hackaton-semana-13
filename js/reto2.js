function readFormData() {
    let formData = {};
    formData.nombre = document.getElementById("nombre").value;
    formData.apellido = document.getElementById("apellido").value;
    formData.raza = document.getElementById("raza").value;
    formData.telefono = document.getElementById("telefono").value;
    formData.pais = document.getElementById("pais").value;
    formData.img = document.getElementById("img").value;
    formData.descripcion = document.getElementById("descripcion").value;
    return formData; 
}

let modal = document.querySelector(".modal");
var trigger = document.querySelector(".buton__modal");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);





