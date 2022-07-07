/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//Importe =document.getElementById('txtIdSueldo').value; para escribir en el cuadro de texto
	//document.getElementById('txtIdSueldo').value= para que el resultado se escriba solo en el cuadro de texto
	
	let Importe;
	let salario;


	
    
	
	Importe =document.getElementById('txtIdSueldo').value;
	
	
	Importe=parseInt(Importe);
	salario = Importe + (Importe * 0.10) ;
	document.getElementById('txtIdResultado').value=salario;

	
	

	

	
}
