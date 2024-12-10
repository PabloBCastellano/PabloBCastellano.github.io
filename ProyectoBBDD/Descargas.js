function Bajar_Documento(){
	
	window.open("Memoria_Proyecto.pdf");
}

function Bajar_Proyecto(){
var clave=prompt("Que clave tienes de acceso para descargar el proyecto :\n");
	
	if(clave=="DAMPBC2020Project"){
		window.open("Gestor_BaseDatos_Rest.zip","_blank");
	}
	else{
		alert("No puedes acceder sin una contraseña");
	}	
}
