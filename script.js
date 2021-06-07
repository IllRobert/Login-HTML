function iniciarSesion(){
  const usuario = document.getElementById
  ("nombre-usuario").value;
  const contrasena = document.getElementById
  ("contrasena").value;
  validarDatos(usuario, contrasena);
}
var usuarios = ['Monica','Robert', 'Max'];
var contrasenas = ['123','456','789'];

function validarDatos(usuario, contrasena){

  if (usuario == usuarios[0] && contrasena == contrasenas[0] )
  {
    document.getElementById("Pikachu").setAttribute("src","https://www.flaticon.es/svg/static/icons/svg/3662/3662787.svg")
    document.getElementById("alerta").style.visibility = "visible"
    document.getElementById("alerta").innerHTML= `<p>¡Bienvenid@, ${usuario}!</p>`
    
  }
  else if (usuario == usuarios[1] && contrasena == contrasenas[1] )
  {
   document.getElementById("Pikachu").setAttribute("src","https://as1.ftcdn.net/jpg/03/49/51/76/500_F_349517669_U3Hz9cyuq0YV5SdTLnsZOaGMYerFrK3B.jpg")
    document.getElementById("alerta").style.visibility = "visible"
    document.getElementById("alerta").innerHTML= `<p>¡Bienvenid@, ${usuario}!</p>`
    
  }
  else if (usuario == usuarios[2] && contrasena == contrasenas[2] )
  {
     document.getElementById("Pikachu").setAttribute("src","https://www.flaticon.es/svg/static/icons/svg/3790/3790204.svg")
    document.getElementById("alerta").style.visibility = "visible"
    document.getElementById("alerta").innerHTML= `<p>¡Bienvenid@, ${usuario}!</p>`
    
  }
  else if (usuario == "" || contrasena == "" )
  {
    document.getElementById("alerta").style.visibility = "visible"
    document.getElementById("alerta").innerHTML= `<p>Falta llenar un campo, </p>` 
  }
  else{
     document.getElementById("alerta").style.visibility = "visible"
    document.getElementById("alerta").innerHTML= `<p>El usuario o contaseña esta incorrecta.</p>` 
    console.log(usuario)
    console.log(contrasena)
  }

}
