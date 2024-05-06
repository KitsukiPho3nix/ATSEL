document.getElementById("btnIniciarSesion").addEventListener("click", iniciarSesion);
document.getElementById("btnRegistrarse").addEventListener("click", register);


var contenedorLoginRegister = document.querySelector(".Login_Register");
var formulario_Login = document.querySelector(".formularioLogin");
var formulario_Register = document.querySelector(".formularioRegister");
var cajaTraseraLogin = document.querySelector(".CajaTraseraLogin");
var cajaTraseraRegister = document.querySelector(".CajaTraseraRegister");

function iniciarSesion(){
	formulario_Register.style.display = "none";
	contenedorLoginRegister.style.left = "10px";
	formulario_Login.style.display = "block";
	cajaTraseraRegister.style.opacity = "1";
	cajaTraseraLogin.style.opacity = "0";
}


function register(){
	formulario_Register.style.display = "block";
	contenedorLoginRegister.style.left = "410px";
	formulario_Login.style.display = "none";
	cajaTraseraRegister.style.opacity = "0";
	cajaTraseraLogin.style.opacity = "1";
}