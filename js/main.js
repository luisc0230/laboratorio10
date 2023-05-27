const mario = document.getElementById('mario');
const inputUsuario = document.getElementById('input-usuario2');
const inputClave = document.getElementById('input-clave2');

inputClave.addEventListener('focus',()=>{
  
    mario.src = "./img/cover/mario_cerrando_los_ojos.png"
})

inputClave.addEventListener('blur',()=>{
    mario.src = "./img/read/mario_mirando.png"
})

function redireccion(){
    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault();
        var username = document.getElementById("input-usuario2").value;
        var password = document.getElementById("input-clave2").value;
        
        if (username !== "hola" || password !== "hola") {
            Swal.fire({
                icon: 'error',
                title: 'Usuario o Contraseña Incorrectos',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
          return;
        }
        window.location="productos.html";
      });
      
}
function validarLetras() {
  const input = document.getElementById("input-usuario2");
  const letras = /^[A-Za-z]+$/; // Expresión regular para letras en mayúsculas y minúsculas
  const mensaje = document.getElementById("myAlert");
  
  if (input.value.match(letras)) {
    mensaje.textContent = "";
  } else {
    var alert = '<div>No se permiten números en este campo</div>';
    document.getElementById("myAlert").innerHTML = alert;
    input.value = ""; // Limpiar el campo
  }
}
