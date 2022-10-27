
let nombre = prompt("Ingrese su nombre");
let valorTotal = 0;
let carrito = alert("Bienvenido al carrito " + nombre);
let productos = Number(prompt("Seleccione un producto \n 1-pantalon 2-remera 3-campera"));
let continuar = prompt("desea continuar?\n S-si N-no");
if(productos > 3){
    alert ("el numero  es invalido");
}
const iva = 0.21; 
while(continuar.toLocaleLowerCase != "n"){
    switch (productos){
        case 1:
            cantidad = prompt("Cuantos va a llevar?");
            valorTotal = 1000*cantidad;
            console.log(valorTotal);
            break;
        case 2:    
            cantidad = prompt("Cuantos va a llevar?");
            valorTotal = 2000*cantidad;
            console.log(valorTotal);
             break;
        case 3:
            cantidad = prompt("Cuantos va a llevar?");
            valorTotal = 9000*cantidad;
            console.log(valorTotal);
            break;
    }
  
        continuar = prompt("Quiere agregar otro porducto? \n S-si N-no");
        if(continuar.toLocaleLowerCase != "n"){ 
        productos = Number(prompt("Seleccione un producto \n 1-pantalon 2-remera 3-campera"));
        }else{
            alert = ("gracias por su comrpa el total es: " + totalIva)
        }
} 



function totalIva (iva,valorTotal){
    console.log((valorTotal*iva) + valorTotal);
}

























