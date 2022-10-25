
let nombre = prompt("Ingrese su nombre");
let valorTotal = 0;
let carrito = alert("Bienvenido al carrito " + nombre);
let productos = Number(prompt("Seleccione un producto \n 1-pantalon 2-remera 3-campera"));
let continuar = confirm("desea continuar?");

const iva = 0.21;

while(continuar){
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
    continuar = confirm("Quiere agregar otro porducto?");
    productos = Number(prompt("Seleccione un producto \n 1-pantalon 2-remera 3-campera"));
    if(productos > 3){
        alert ("el numero  es invalido");
    }
    function totalIva (iva,valorTotal){
        console.log((valorTotal*iva) + valorTotal);
    }
    totalIva(iva,valorTotal)

} 





























