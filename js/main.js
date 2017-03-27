function validateForm(){
	/* Escribe tú código aquí */
  var titulo = document.getElementById('form-signup-heading');
  var nombre = document.getElementById('name').value;
  var apellido = document.getElementById('lastname').value;
  var correo = document.getElementById('input-email').value;
  var contrasena = document.getElementById('input-password').value;
  var seleccion = document.getElementById('bici').value;
  var letra = /[a-zA-Z]/;
  var mayuscula = /[A-Z]{1}/;
  var corr = /\S+@\S+\.\S+/
//validando espacios
  if(nombre !="" && apellido!="" && correo!="" && contrasena!=""){
//validando letras
    if(letra.test(nombre) != true){
      alert("Estructura de nombre no válida");
    }

    if(letra.test(apellido) != true){
      alert("Estructura de apellido no válida");
    }
//validando mayusculas
    if(mayuscula.test(nombre) != true){
      alert("Primera letra de tu nombre debe ser máyuscula");
    }

    if(mayuscula.test(apellido) != true){
      alert("Primera letra de tu apellido debe ser máyuscula");
    }
//validando correo
  if(corr.test(correo) != true){
    alert("Estructura de correo no válida: \n Ingresar email@domain.com");
  }
  //validando campo password
  if(contrasena.toString().length < 6 || contrasena.toString() == "password" ||
      contrasena == "123456" || contrasena == "098754"){
    alert("Estructura de contraseña no válida: \n Ingresar contraseña de 6 caracteres");
    }
  //validando seleccion
  if(seleccion == "0"){
    alert("Escoge tu tipo de bici");
  }

  }else{
    alert("Completa todos los campos");
  }
}
