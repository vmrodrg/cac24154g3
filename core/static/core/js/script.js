
// carga formilario

// let loginForm = document.getElementById("Form");

// carga valores del formulario

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let nombre = document.getElementById("nombre")
  var errorNombre = document.getElementById("errorNombre")

  let email = document.getElementById("email")
  var errorEmail = document.getElementById("errorEmail")

  let telefono = document.getElementById("telefono")  
  var errorTelefono = document.getElementById("errorTelefono")

  let consulta = document.getElementById("consulta")  
  var errorConsulta = document.getElementById("errorConsulta")

  let mensaje = document.getElementById("mensaje")  
  var errorMensaje = document.getElementById("errorMensaje")

  let adjunto = document.getElementById("adjunto")  
  var errorAdjunto = document.getElementById("errorAdjunto")



  // 
// 
// 
// 
// fundion de validacion de la imagen 

function validarImagen() {
    let archivo = document.getElementById('adjunto').files[0];
    let tiposPermitidos = ['image/jpeg', 'image/png'];
    let tamañoMaximo = 2 * 1024 * 1024; // 2MB
  
    if (!tiposPermitidos.includes(archivo.type)) {
        errorAdjunto.innerHTML = "Tipo de archivo no permitido. Por favor, sube una imagen JPEG o PNG."
        
        // alert('Tipo de archivo no permitido. Por favor, sube una imagen JPEG o PNG.');
        valido = false
    //   return false;
    }
  
    if (archivo.size > tamañoMaximo) {
        errorAdjunto.innerHTML = "La imagen es demasiado grande. El tamaño máximo permitido es 2MB."
        valido = false
      
      
        // alert('La imagen es demasiado grande. El tamaño máximo permitido es 2MB.');
    //   return false;
    }
  
    return true;
  }

  
//   
// 
// 
//
// validaciones regex 

    const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/
    const regUserTelefono = /^\d{10}$/
    // const regUserConsulta = /^\d{10}$/


// validaciones nombre

if (!regUserName.test(nombre.value) ) {
    errorNombre.innerHTML = "Por favor, ingresa tu nombre"
      valido = false
    
  } else{
    errorNombre.innerHTML = ""
    //   valido = true;
  }


  // validaciones email

  if (!regUserEmail.test(email.value) ) {
    errorEmail.innerHTML = "Por favor, ingresa email"
      valido = false
    
  } else{
    errorEmail.innerHTML = ""
    //   valido = true;
  }



// validaciones telefono

  if (!regUserTelefono.test(telefono.value) ) {
    errorTelefono.innerHTML = "Por favor, ingresa tu telefono"
      valido = false;
    
  } else{
    errorTelefono.innerHTML = ""
    //   valido = false;
  }

// validaciones consulta

  if (consulta === 0) {
    errorConsulta.innerHTML = "Por favor, elegi uno"
      valido = false;
    
  } else{
    errorConsulta.innerHTML = ""
    //   valido = false;
  }

  // validaciones imagen
   
    validarImagen(adjunto)
    
  




    nombre.value = ""
    email.value = ""
    telefono.value = ""
    consulta.value = ""
    mensaje.value = ""
    adjunto.value = ""
  
})
  

