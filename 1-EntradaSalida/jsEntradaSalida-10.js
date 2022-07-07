/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let Importe;
	let descuento;


	
    
	
	Importe =document.getElementById('txtIdImporte').value;
	
	
	Importe=parseInt(Importe);
	descuento = Importe - (Importe * 0.25) ;
	document.getElementById('txtIdResultado').value=descuento;
	
}
