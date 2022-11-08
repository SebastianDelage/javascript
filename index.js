
let nombre = prompt("Ingrese su nombre");
let valorTotal = 0;
alert("Bienvenido al carrito " + nombre);
let continuar = confirm("desea continuar?");
const carrito = []
const iva = 0.21;

class Producto{
    constructor(nombre,precio,id,stock){
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;
        this.stock = stock;
    }
}

const producto1 = new Producto("pantalon",1000,001,3000);
const producto2 = new Producto("remera",2000,002,4000);
const producto3 = new Producto("campera",9000,003,5000);
const producto4 = new Producto("buso",3000,004,6000);

const BBDD =[producto1,producto2,producto3,producto4]


while(continuar){
    let productos = Number(prompt("Seleccione un producto \n 1-pantalon 2-remera 3-campera 4-buso"));
    if (productos > 4){
        alert("numero invalido")
    }
    switch (productos){
        case 1:
            cantidad = prompt("Cuantos va a llevar?");
            valorTotal = 1000*cantidad;
            console.log(valorTotal);
            carrito.push(BBDD[0]);
            break;
        case 2:    
            cantidad = prompt("Cuantos va a llevar?");
            valorTotal = 2000*cantidad;
            console.log(valorTotal);
            carrito.push(BBDD[1]);
             break;
        case 3:
            cantidad = prompt("Cuantos va a llevar?");
            valorTotal = 9000*cantidad;
            console.log(valorTotal);
            carrito.push(BBDD[2]);
            break;
        case 4:    
            cantidad = prompt("Cuantos va a llevar?");
            valorTotal = 3000*cantidad;
            console.log(valorTotal);
            carrito.push(BBDD[3]);
            break;
    }
    continuar = confirm("desea continuar?"); 
    
}

const stockActualizado = carrito.map((producto)=>{
    return{
        nombre: producto.nombre,
        precio: producto.precio,
        id: producto.id,
        stock: producto.stock-cantidad
    }
})
console.log(stockActualizado)

console.log (carrito)
totalIva(iva,valorTotal); 

function totalIva(iva,valorTotal){
    console.log((valorTotal*iva)+valorTotal);
}













