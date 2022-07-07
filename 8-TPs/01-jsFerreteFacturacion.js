/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	//txtIdPrecioUno,txtIdPrecioDos,txtIdPrecioTres
    let precio1;
    let precio2;
    let precio3;
    let resultado;

    precio1=document.getElementById('txtIdPrecioUno').value;

    precio1=parseInt(precio1);

    precio2=document.getElementById('txtIdPrecioDos').value;

    precio2=parseInt(precio2);

    precio3=document.getElementById('txtIdPrecioTres').value;
    
    precio3=parseInt(precio3);

    resultado = precio1 + precio2 + precio3;

    alert("total suma: "+ resultado);




}
function Promedio () 
{
	let precio1;
    let precio2;
    let precio3;
    let resultado;
    

    precio1=document.getElementById('txtIdPrecioUno').value;

    precio1=parseInt(precio1);

    
    
    precio2=document.getElementById('txtIdPrecioDos').value;
    
    precio2=parseInt(precio2);
    
    precio3=document.getElementById('txtIdPrecioTres').value;
    
    precio3=parseInt(precio3);

    
    resultado = (precio1 + precio2 + precio3) / 3 ;
    
    

    alert("total promedio: "+ resultado);
}
function PrecioFinal () 
{
	let precio1;
    let precio2;
    let precio3;
    let resultado;

    precio1=document.getElementById('txtIdPrecioUno').value;

    precio1=parseInt(precio1);

    precio2=document.getElementById('txtIdPrecioDos').value;

    precio2=parseInt(precio2);

    precio3=document.getElementById('txtIdPrecioTres').value;

    precio3=parseInt(precio3);

    resultado = precio1 + precio2 + precio3;

    resultado = resultado + ( resultado * 0.21);
    

    alert("precio total con iva (21%): "+ resultado);
}