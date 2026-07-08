
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

document.addEventListener("DOMContentLoaded", function () {
  
  const btnFinalizar = document.getElementById("btnFinalizarPago");
  const toastElement = document.getElementById("toastGracias");

  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastElement, {
    delay: 4000 
  });


  if (btnFinalizar) {
    btnFinalizar.addEventListener("click", function () {
    
      setTimeout(() => {
        toastBootstrap.show();
      }, 300);
    });
  }
});