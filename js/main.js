function validateForm(){
	/* Escribe tú código aquí */
	//todo lo que ingresa el usuario en los inputs.
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var correo = document.getElementById("input-email").value;
	var contrasenia = document.getElementById("input-password").value;
	var select = document.getElementsByClassName("form-control").value;
	
			//Revisa todos los campos.

			function validacionNombre(){
				var soloCaracteres = /^[a-zA-Z]*$/;
				if(nombre === ""){
					var obligatorioNombre = document.getElementsByClassName("input-box")[0];
					var spanNombre = document.createElement("span");
					var hijoNombre = document.createTextNode("Campo obligatorio");
					spanNombre.appendChild(hijoNombre);
					obligatorioNombre.appendChild(spanNombre);
					return hijoNombre;
				}else if(nombre.charAt(0) != nombre.charAt(0).toUpperCase()){
					var obligatorioNombre = document.getElementsByClassName("input-box")[0];
					var spanNombre = document.createElement("span");
					var hijoNombre = document.createTextNode("Primera letra debe ser mayúscula");
					spanNombre.appendChild(hijoNombre);
					obligatorioNombre.appendChild(spanNombre);
					return hijoNombre;
				}else if(nombre != soloCaracteres){//no corre completamente
					var obligatorioNombre = document.getElementsByClassName("input-box")[0];
					var spanNombre = document.createElement("span");
					var hijoNombre = document.createTextNode("Deben ser solo letras A-Z");
					spanNombre.appendChild(hijoNombre);
					obligatorioNombre.appendChild(spanNombre);
					return hijoNombre;
				}
			}
			validacionNombre();

			function validacionApellido(){
				var soloCaracteres = /^[a-zA-Z]*$/;
				if(apellido === ""){
					var obligatorioApellido = document.getElementsByClassName("input-box")[1];
					var spanApellido = document.createElement("span");
					var hijoApellido = document.createTextNode("Campo obligatorio");
					spanApellido.appendChild(hijoApellido);
					obligatorioApellido.appendChild(spanApellido);
					return hijoApellido; 
				}else if(apellido.charAt(0) != apellido.charAt(0).toUpperCase()){
					var obligatorioApellido = document.getElementsByClassName("input-box")[1];
					var spanApellido = document.createElement("span");
					var hijoApellido = document.createTextNode("Primera letra debe ser mayúscula");
					spanApellido.appendChild(hijoApellido);
					obligatorioApellido.appendChild(spanApellido);
					return hijoApellido;
				}else if(apellido != soloCaracteres){//no corre completamente
					var obligatorioApellido = document.getElementsByClassName("input-box")[1];
					var spanApellido = document.createElement("span");
					var hijoApellido = document.createTextNode("Deben ser solo letras A-Z");
					spanApellido.appendChild(hijoApellido);
					obligatorioApellido.appendChild(spanApellido);
					return hijoApellido;
				}
			}
			validacionApellido();

			function validacionCorreo(){
				var validarCorreo = /^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/;
				if(correo === ""){
					var obligatorioCorreo = document.getElementsByClassName("input-box")[2];
					var spanCorreo = document.createElement("span");
					var hijoCorreo = document.createTextNode("Campo obligatorio");
					spanCorreo.appendChild(hijoCorreo);
					obligatorioCorreo.appendChild(spanCorreo);
					return hijoCorreo; 
				}else if(correo != validarCorreo){//No corre completamente :( 
					var obligatorioCorreo = document.getElementsByClassName("input-box")[2];
					var spanCorreo = document.createElement("span");
					var hijoCorreo = document.createTextNode("Debe tener '@' y '.'");
					spanCorreo.appendChild(hijoCorreo);
					obligatorioCorreo.appendChild(spanCorreo);
					return hijoCorreo; 
				}
			}
			validacionCorreo();

			function validacionContrasenia(){
				if(contrasenia === ""){
					var obligatorioContrasenia = document.getElementsByClassName("input-box")[3];
					var spanContrasenia = document.createElement("span");
					var hijoContrasenia= document.createTextNode("Campo obligatorio");
					spanContrasenia.appendChild(hijoContrasenia);
					obligatorioContrasenia.appendChild(spanContrasenia);
					return hijoContrasenia;
				}else if(contrasenia.length <= 5){
					var obligatorioContrasenia = document.getElementsByClassName("input-box")[3];
					var spanContrasenia = document.createElement("span");
					var hijoContrasenia= document.createTextNode("Debe tener mas de seis caracteres ");
					spanContrasenia.appendChild(hijoContrasenia);
					obligatorioContrasenia.appendChild(spanContrasenia);
					return hijoContrasenia;
				}else if(contrasenia === "123456"){
					var obligatorioContrasenia = document.getElementsByClassName("input-box")[3];
					var spanContrasenia = document.createElement("span");
					var hijoContrasenia= document.createTextNode("No puede ser '123456'");
					spanContrasenia.appendChild(hijoContrasenia);
					obligatorioContrasenia.appendChild(spanContrasenia);
					return hijoContrasenia;
				}else if(contrasenia === "098765"){
					var obligatorioContrasenia = document.getElementsByClassName("input-box")[3];
					var spanContrasenia = document.createElement("span");
					var hijoContrasenia= document.createTextNode("No puede ser '098765'");
					spanContrasenia.appendChild(hijoContrasenia);
					obligatorioContrasenia.appendChild(spanContrasenia);
					return hijoContrasenia;
				}
			}
			validacionContrasenia();

			function validacionSelect(){//no corre :( 
				if(select === ""){
					var obligatorioSelect = document.getElementsByClassName("input-box")[4];
					var spanSelect = document.createElement("span");
					var hijoSelect= document.createTextNode("Campo obligatorio");
					spanSelect.appendChild(hijoSelect);
					obligatorioSelect.appendChild(spanSelect);
					return false; 
				}
			}
			validacionSelect();
					
						
			/*No corrió con if completo a todos los campos :( 
					if(nombre === "" )
					}else if(apellido === ""){
					
					}else if(correo === ""){
						
					}else if(contrasenia === ""){
						 
					}else if(select === ""){
						
					}
			
			//Nunca funcionó con las funciones separadas :( 
			function soloCaracteres(n, p){//
				var validar = /^[a-zA-Z]*$/;
					//validacion con if.
					if(n != validar){
							var spanValidacionCaracteres = document.createElement("span");
							var hijoValidacionCaracteres= document.createTextNode("no");
							spanValidacionCaracteres.appendChild(hijoValidacionCaracteres);
							obligatorioNombre.appendChild(spanValidacionCaracteres);
							return hijoValidacionCaracteres; 
						}else if( p != validar){
							var spanValidacionCaracteres = document.createElement("span");
							var hijoValidacionCaracteres= document.createTextNode("ko");
							spanValidacionCaracteres.appendChild(hijoValidacionCaracteres);
							obligatorioApellido.appendChild(spanValidacionCaracteres);
							return hijoValidacionCaracteres; 
						}
			}
			function MaysPrimera(string){
  				var mayuscula = string.charAt(0).toUpperCase() + string.slice(1);
  				return spane.innerHTML = "No se permite";
			}
	
	soloCaracteres(nombre, apellido);
	MaysPrimera(nombre, apellido)*/
}
