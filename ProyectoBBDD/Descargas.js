function Bajar_Documento(){
	var clave=prompt("Que clave tienes de acceso para descargar la documentacion:\n");
	
	if(clave=="DAMPBC2020DOCUM"){
		window.open("Memoria_Proyecto.pdf");
	}
	else{
		alert("No puedes acceder sin una contraseña");
	}	
}

function Bajar_Proyecto(){
var clave=prompt("Que clave tienes de acceso para descargar el proyecto n:\n");
	
	if(clave=="DAMPBC2020Project"){
		window.open("Gestor_Base_Datos rest.zip","_blank");
	}
	else{
		alert("No puedes acceder sin una contraseña");
	}	
}
