function validateForm(){
	/* Escribe tú código aquí */
  var titulo = document.getElementById('form-signup-heading');
  var nombre = document.getElementById('name').value;
  var apellido = document.getElementById('lastname').value;
  var correo = document.getElementById('input-email').value;
  var contrasena = document.getElementById('input-password').value;
  var seleccion = document.getElementsByClassName('form-control').value;
  var social = document.getElementById('input-social').value;
  var recordar = document.getElementsByTagName('label').value;
  var boton = document.getElementsByClassName('btn');
  var letra = /[a-zA-Z]/;
  var mayuscula = /[A-Z]{1}/;
  var corr = /\S+@\S+\.\S+/
//validando espacios
  if(nombre !="" && apellido!="" && correo!="" && contrasena!=""){
//validando letras
    if(letra.test(nombre) != true && letra.test(apellido) != true){
      alert("Complete datos validos en los campos");
    }
//validando mayusculas
    if(mayuscula.test(nombre) != true && mayuscula.test(apellido) != true){
      alert("Poner la primera letra de tus datos en mayuscula");
    }
//validando correo
  if(corr.test(correo) != true){
    alert("Completa bien tu correo");
  }
  //validando campo password
  if(contrasena.toString().length < 6 || contrasena.toString() == "password" ||
      contrasena == "123456" || contrasena == "098754"){
    alert("Contraseña no válida");
    }
  //validando seleccion
  if( bici == null || bici == 0 ) {
	    alert("Completar datos en seleccionar bici");
	  }
  }else{
    alert("Completa todos los campos");
  }
}
